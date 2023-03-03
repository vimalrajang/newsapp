using System;
using newsapp_backend.Models;

namespace newsapp_backend.Repositories.IRepositories
{
	public interface IUserAuthenticateRepository
	{
		public string SignUp(Users user);
		public string LoginI(UserLogin userLogin);
    }
}

