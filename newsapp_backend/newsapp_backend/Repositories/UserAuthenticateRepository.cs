using System;
using MongoDB.Driver;
using newsapp_backend.Models;
using newsapp_backend.Repositories.IRepositories;

namespace newsapp_backend.Repositories
{
	public class UserAuthenticateRepository : IUserAuthenticateRepository
	{
        private readonly IMongoCollection<Users> _users;

        public UserAuthenticateRepository()
		{
		}

        public string LoginI(UserLogin userLogin)
        {
            throw new NotImplementedException();
        }

        public string SignUp(Users user)
        {
            throw new NotImplementedException();
        }
    }
}

