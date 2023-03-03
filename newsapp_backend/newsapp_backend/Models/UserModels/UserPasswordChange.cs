using System;
namespace newsapp_backend.Models.UserModels
{
	public class UserPasswordChange
	{
		public UserPasswordChange()
		{
		}
        public string oldPassword { get; set; }
        public string newPassword1 { get; set; }
        public string newPassword2 { get; set; }
    }
}

