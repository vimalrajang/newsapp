using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace newsapp_backend.Models.UserModels
{
	public class Users
	{
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }

        [BsonElement("name")]
        public string name { get; set; }
        [BsonElement("email")]
        public string email{ get; set; }
        [BsonElement("password")]
        public string password { get; set; }
    }
}

