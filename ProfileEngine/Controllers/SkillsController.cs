using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


namespace ProfileEngine.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SkillsController : Controller
    {
        private string[] skills = { "C#", "JS", "SQL Server", "MongoDB", "Powershell", "CSS", "Java", "JMS", "Kafka", "NodeJS", "OOP", "Architecture", "Design", "Angular", "React", ".NET Core", "Cordova", "Kubernetes", "Docker", "Istio" };
        public IActionResult Get()
        {
            return Ok(skills);
        }
    }
}
