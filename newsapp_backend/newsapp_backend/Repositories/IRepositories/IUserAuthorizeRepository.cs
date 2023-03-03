using System;
using newsapp_backend.Models.UserModels;

namespace newsapp_backend.Repositories.IRepositories
{
	public interface IUserAuthorizeRepository
	{
		public string ChangePassword(UserPasswordChange userPasswordChange, Users user);
	}
}

