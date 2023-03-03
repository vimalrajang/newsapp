using System;
using MongoDB.Driver;
using newsapp_backend.Models.UserModels;
using newsapp_backend.Repositories.IRepositories;
using newsapp_backend.DatabaseSettings.IDatabaseSettings;
using System.Text.RegularExpressions;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace newsapp_backend.Repositories
{
	public class UserAuthenticateRepository : IUserAuthenticateRepository
	{
        private readonly IMongoCollection<Users> _users;
        private IConfiguration _config;


        public UserAuthenticateRepository(IUsersDatabaseSettings settings, IMongoClient mongoClient, IConfiguration config)
        {
            _config = config;

            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _users = database.GetCollection<Users>(settings.UsersCollectionName);
        }

        public UserTokenResponse LoginIn(UserLogin userLogin)
        {
            UserTokenResponse userResponse = new UserTokenResponse();
            bool isUserExist = CheckIsUserExist(userLogin.email);
            if (IsEmailValid(userLogin.email))
            {
                if (isUserExist)
                {
                    Users user = _users.Find<Users>(user => user.email == userLogin.email).FirstOrDefault();
                    bool verified = BCrypt.Net.BCrypt.Verify(userLogin.password,user.password );
                    if (verified)
                    {
                        userResponse.token = Generatetoken(user);
                        userResponse.message = "User verified successfully";
                        userResponse.name = user.name;
                        return userResponse;
                    }
                    else
                    {
                        userResponse.message = "Password is wrong";
                        return userResponse;
                    }
                }
                else
                {
                    userResponse.message = "User not found";
                    return userResponse;
                }
            }
            else
            {
                userResponse.message = "Email Not valid";
                return userResponse;
            }
        }

        public UserTokenResponse SignUp(Users user)
        {
            UserTokenResponse userResponse = new UserTokenResponse();
            bool isUserExist = CheckIsUserExist(user.email);
            if (isUserExist)
            {
                userResponse.message = "User already exist";
                return userResponse;
            }
            else
            {
                if (!IsEmailValid(user.email))
                {
                    userResponse.message = "Email Not valid";
                    return userResponse;
                }
                if (user.name.Length < 5)
                {
                    userResponse.message = "Name length is less than 5";
                    return userResponse;
                }
                if (user.password.Length < 8)
                {
                    userResponse.message = "password length is less than 8s";
                    return userResponse;
                }
                string passwordHash = BCrypt.Net.BCrypt.HashPassword(user.password);
                user.password = passwordHash;

                _users.InsertOne(user);
                userResponse.message = "User Created successfully";
                userResponse.token = Generatetoken(user);
                return userResponse;
            }
        }

        public string Generatetoken(Users user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.Sid, user.id),
                new Claim(ClaimTypes.Email, user.email),
                new Claim(ClaimTypes.Name, user.name),
            };

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Audience"],
              claims,
              expires: DateTime.Now.AddDays(30),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }


        public bool IsEmailValid(string email)
        {
            //Regex regex = new Regex(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$");
            //Match match = regex.Match(email);
            //if (match.Success)
            //    return true;
            //else
            //    return false;
            return Regex.IsMatch(email, @"\A(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\Z", RegexOptions.IgnoreCase); ;

        }

        public bool CheckIsUserExist(string email)
        {
            return _users.Find<Users>(user => user.email == email).Any(); 
        }
    }
}