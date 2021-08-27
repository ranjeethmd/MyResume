using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProfileEngine.Data;
using System.Collections.Generic;

namespace ProfileEngine.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RolesController : ControllerBase
    {
        private static readonly Dictionary<string, Role[]> roles = new Dictionary<string, Role[]>()
        {
            {
                "Wells Fargo",
                new []{
                new Role
                {
                    Name= "WellsFargo",
                    DisplayName = "Wells Fargo",
                    Title = "Lead Software Engineer",
                    Description = "If the URL is / about, then < About >, <User>, and <NoMatch> will all render because they all match the path. This is by design, allowing us to compose <Route>s into our apps in many ways, like sidebars and breadcrumbs, bootstrap tabs, etc.Occasionally, however, we want to pick only one <Route> to render. If we’re at /about we don’t want to also match /:user (or show our “404” page). Here’s how to do it with Switch:",

                }
                }
            },            
            {
                "Bracket Global",
                new []{
                new Role
                {
                    Name= "WellsFargo",
                    DisplayName = "Wells Fargo",
                    Title = "Senior Software Engineer",
                    Description = "If the URL is / about, then < About >, <User>, and <NoMatch> will all render because they all match the path. This is by design, allowing us to compose <Route>s into our apps in many ways, like sidebars and breadcrumbs, bootstrap tabs, etc.Occasionally, however, we want to pick only one <Route> to render. If we’re at /about we don’t want to also match /:user (or show our “404” page). Here’s how to do it with Switch:",

                }
                }
            },
            {
                "Intel Corporation",
                new [] {
                    new Role
                    {
                        Name= "WellsFargo",
                        DisplayName = "Wells Fargo",
                        Title = "Product Owner",
                        Description = "If the URL is / about, then < About >, <User>, and <NoMatch> will all render because they all match the path. This is by design, allowing us to compose <Route>s into our apps in many ways, like sidebars and breadcrumbs, bootstrap tabs, etc.Occasionally, however, we want to pick only one <Route> to render. If we’re at /about we don’t want to also match /:user (or show our “404” page). Here’s how to do it with Switch:",

                    },
                    new Role
                    {
                        Name= "WellsFargo",
                        DisplayName = "Wells Fargo",
                        Title = "Team Leader",
                        Description = "If the URL is / about, then < About >, <User>, and <NoMatch> will all render because they all match the path. This is by design, allowing us to compose <Route>s into our apps in many ways, like sidebars and breadcrumbs, bootstrap tabs, etc.Occasionally, however, we want to pick only one <Route> to render. If we’re at /about we don’t want to also match /:user (or show our “404” page). Here’s how to do it with Switch:",

                    }
                }
            }


        };




        private readonly ILogger<RolesController> _logger;

        public RolesController(ILogger<RolesController> logger)
        {
            _logger = logger;
        }

        [HttpGet("{name}")]
        public IActionResult Get(string name)
        {
            if (roles.ContainsKey(name))
                return Ok(roles[name]);
            else
                return NotFound($"{name} not found.");

        }
    }
}
