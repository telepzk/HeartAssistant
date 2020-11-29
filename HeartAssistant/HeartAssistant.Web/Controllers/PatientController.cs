using HeartAssistant.Core;
using HeartAssistant.Core.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HeartAssistant.Web.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class PatientController : ControllerBase
    {
        private readonly HeartAssistantDbContext _context;

        public PatientController(HeartAssistantDbContext context)
        {
            _context = context;
        }

        [HttpGet("{id:int}")]
        public async Task<Patient> GetAsync(int id)
        {
            return await _context.Patients.FindAsync(id);
        }

        [HttpGet("all")]
        public async Task<IEnumerable<Patient>> GetAllAsync()
        {
            return await _context.Patients.ToArrayAsync();
        }
    }
}
