using HeartAssistant.Core;
using HeartAssistant.Core.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace HeartAssistant.Web.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class AnswersController : ControllerBase
    {
        private readonly HeartAssistantDbContext _context;

        public AnswersController(HeartAssistantDbContext context)
        {
            _context = context;
        }

        [HttpGet("{id:int}")]
        public async Task<Answer> GetAsync(int id)
        {
            return await _context.Answers.FindAsync(id);
        }
    }
}
