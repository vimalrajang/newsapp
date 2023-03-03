using System;
namespace newsapp_backend.Models.UserModels
{
	public class UserTokenResponse
	{
		public UserTokenResponse()
		{
		}
		public string message { get; set; } = string.Empty;
        public string token { get; set; } = string.Empty;
        public string name { get; set; } = string.Empty;
    }
}

