using System;
using System.Security.Claims;
using newsapp_backend.Repositories.IRepositories;
using newsapp_backend.Models.UserModels;
using MongoDB.Driver;
using newsapp_backend.DatabaseSettings.IDatabaseSettings;
using System.Xml.Linq;

namespace newsapp_backend.Repositories
{
    public class UserAuthorizeRepository : IUserAuthorizeRepository
    {
        private readonly IMongoCollection<Users> _users;
        private IConfiguration _config;


        public UserAuthorizeRepository(IUsersDatabaseSettings settings, IMongoClient mongoClient, IConfiguration config)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _users = database.GetCollection<Users>(settings.UsersCollectionName);
        }
        public string ChangePassword(UserPasswordChange userPasswordChange,Users user)
        {
            string str = String.Empty;
            //var currentUser = GetCurrentUser();
            Users users = _users.Find(u => u.email== user.email).FirstOrDefault();

            bool verified = BCrypt.Net.BCrypt.Verify(userPasswordChange.oldPassword,users.password );
            if (!verified)
            {
                return "Old Password is Wrong";
            }
            else if (userPasswordChange.newPassword1 != userPasswordChange.newPassword2)
            {
                return "New passwords do not match";
            }
            if(verified && (userPasswordChange.newPassword1 == userPasswordChange.newPassword2))
            {
                string passwordHash = BCrypt.Net.BCrypt.HashPassword(userPasswordChange.newPassword1);
                
                _users.ReplaceOne<Users>(u => u.email == user.email, new Users { name = user.name, email = user.email, password = passwordHash, id = user.id });
                str = "Password Updated";
            }
            return str;

        }

    }
}

