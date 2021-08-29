using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProfileEngine.Data;
using ProfileEngine.Data.Interface;
using ProfileEngine.Extensions;
using ProfileEngine.POCO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProfileEngine.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RolesController : ControllerBase
    {
        private readonly IRepository _repository;

        public RolesController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("{name}")]
        public async Task<IActionResult> Get(string name)
        {
            if(!name.IsNoThreat())
            {
                return BadRequest(new ApiError(Guid.NewGuid(), $"Sorry, The request should contain only numbers or characters."));
            }

            var roles = await _repository.GetRolesAsync(name);
           
            if (roles.Any())
                return Ok(roles);
            else
                return NotFound(new ApiError(Guid.NewGuid(),$"Sorry, I have not worked in the company {name}."));

        }
    }
}
