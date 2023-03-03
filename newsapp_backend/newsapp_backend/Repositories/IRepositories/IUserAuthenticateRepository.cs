using System;
using newsapp_backend.Models.UserModels;

namespace newsapp_backend.Repositories.IRepositories
{
	public interface IUserAuthenticateRepository
	{
		public UserTokenResponse SignUp(Users user);
		public UserTokenResponse LoginIn(UserLogin userLogin);
    }
}

