using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Conventions;
using MongoDB.Driver;
using ProfileEngine.Data.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfileEngine.Data.Service
{
    public class MongoDBRepository : IRepository
    {
        static MongoDBRepository()
        {
            var camelCaseConvention = new ConventionPack { new CamelCaseElementNameConvention() };
            ConventionRegistry.Register("CamelCase",camelCaseConvention,type => true);
        }
         
        private readonly IMongoDatabase _database;
        public MongoDBRepository(IMongoDb db)
        {
            var client = new MongoClient(db.ConnectionString);
            _database = client.GetDatabase("my-resume");
        }
        public async Task<IEnumerable<string>> GetSkillsAsync()
        {
            var skills = _database.GetCollection<BsonDocument>("Skills");

            var projection = BsonDocument.Parse("{_id:0, skills:1 }");
            var sort = BsonDocument.Parse("{_id:-1}");


            var document =  await skills.Find(new BsonDocument()).Project(projection).Sort(sort).Limit(1).FirstAsync();
            var skill =  document.GetValue("skills").AsBsonArray; 
            return skill.Select(v => v.AsString);
        }

        public async Task<IEnumerable<Experience>> GetJobsAsync()
        {
            var jobs = _database.GetCollection<Experience>("Jobs");

            var projection = BsonDocument.Parse("{_id:0}");
            var sort = BsonDocument.Parse("{_id:-1}");

            var document = await jobs.Find(new BsonDocument()).Project<Experience>(projection).Sort(sort).ToListAsync();

            return document;
        }

        public async Task<IEnumerable<Role>> GetRolesAsync(string companyId)
        {
            var jobs = _database.GetCollection<Role>("JobDescriptions");

            var filter = BsonDocument.Parse($"{{name:'{companyId}'}}");
            var projection = BsonDocument.Parse("{_id:0}");
            var sort = BsonDocument.Parse("{_id:-1}");

            var document = await jobs.Find(filter).Project<Role>(projection).Sort(sort).ToListAsync();

            return document;
        }
    }
}
