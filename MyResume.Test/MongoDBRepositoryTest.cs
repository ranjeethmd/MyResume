using MyResume.Test.Stubs;
using ProfileEngine.Data.Service;
using System;
using System.Threading.Tasks;
using Xunit;

namespace MyResume.Test
{
    public class MongoDBRepositoryTest
    {
        [Fact]
        public async Task CanGetSkills()
        {
            var connection = new Connections();
            var respository = new MongoDBRepository(connection);

            var result = await respository.GetSkillsAsync();

            Assert.NotEmpty(result);
        }

        [Fact]
        public async Task CanGetJobs()
        {
            var connection = new Connections();
            var respository = new MongoDBRepository(connection);

            var result = await respository.GetJobsAsync();

            Assert.NotEmpty(result);
        }

        [Fact]
        public async Task CanGetRoles()
        {
            var connection = new Connections();
            var respository = new MongoDBRepository(connection);

            var result = await respository.GetRolesAsync("Intel");

            Assert.NotEmpty(result);
        }

        [Fact]
        public async Task GetRolesShouldNotFail()
        {
            var connection = new Connections();
            var respository = new MongoDBRepository(connection);

            var result = await respository.GetRolesAsync("Aasls");

            Assert.Empty(result);
        }
    }
}
