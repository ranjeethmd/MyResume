using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProfileEngine.Data.Interface
{
    public interface IRepository
    {
        Task<IEnumerable<string>> GetSkillsAsync();
        Task<IEnumerable<Experience>> GetJobsAsync();
        Task<IEnumerable<Role>> GetRolesAsync(string companyId);
    }
}
