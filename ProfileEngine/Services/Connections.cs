using Microsoft.Extensions.Configuration;
using ProfileEngine.Data.Interface;
using System;

namespace ProfileEngine.Services
{
    public class Connections : IMongoDb
    {
        private readonly IConfiguration _configuration;

        public Connections(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public string ConnectionString => Environment.ExpandEnvironmentVariables(_configuration["MongoConnectionstring"]);
    }
}
