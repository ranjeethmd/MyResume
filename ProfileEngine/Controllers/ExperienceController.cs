using Microsoft.AspNetCore.Mvc;
using ProfileEngine.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProfileEngine.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ExperienceController : ControllerBase
    {
        // GET: api/<ExperienceController>
        [HttpGet]
        public IEnumerable<Experience> Get()
        {
            return new Experience[] { new Experience {Company = "Wells Fargo", Start = "2018", End = "Current" },
                new Experience {Company = "Bracket Global", Start = "2016", End = "2017" },
                new Experience {Company = "Intel Corporation", Start = "2005", End = "2016" }
            };
        }

        // GET api/<ExperienceController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ExperienceController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ExperienceController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ExperienceController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
