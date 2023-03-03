using System;
using newsapp_backend.DatabaseSettings.IDatabaseSettings;

namespace newsapp_backend.DatabaseSettings
{
	public class UsersDatabaseSettings : IUsersDatabaseSettings
	{
		public UsersDatabaseSettings()
		{
		}
        public string UsersCollectionName { get ; set ; } = String.Empty;
        public string DatabaseName { get ; set ; } = String.Empty;
    }
}