using Microsoft.AspNetCore.Mvc;
using ProfileEngine.Data.Interface;
using System.Threading.Tasks;

namespace ProfileEngine.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SkillsController : Controller
    {
        private readonly IRepository _repository;
        public SkillsController(IRepository repository)
        {
            _repository = repository;
        }
        public async Task<IActionResult> Get()
        {
            return Ok(await _repository.GetSkillsAsync());
        }
    }
}
