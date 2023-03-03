using System;
namespace newsapp_backend.DatabaseSettings.IDatabaseSettings
{
	public interface IUsersDatabaseSettings
	{
        string UsersCollectionName { get; set; }
        //string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}

