using HeartAssistant.Core;
using HeartAssistant.Core.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeartAssistant.Web.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class PollsController : ControllerBase
    {
        private readonly HeartAssistantDbContext _context;

        public PollsController(HeartAssistantDbContext context)
        {
            _context = context;
        }

        [HttpGet("{id:int}")]
        public async Task<Poll> GetAsync(int id)
        {
            return await _context.Polls.FindAsync(id);
        }

        [HttpGet("all")]
        public async Task<IEnumerable<Poll>> GetAllAsync()
        {
            return await _context.Polls.ToArrayAsync();
        }

        [HttpGet("questions")]
        public async Task<Question[]> GetAllQUestionsAsync()
        {
            return await _context.Questions.ToArrayAsync();
        }

        [HttpPost("answer")]
        public async Task<Answer> AddAnswerAsync(Answer newAnswer)
        {
            var answer = await _context.Answers.Where(a => a.Question.Id == newAnswer.Question.Id && a.Respondent.Id == newAnswer.Respondent.Id).FirstOrDefaultAsync();
            if (answer is null)
            {
                var question = await _context.Questions.FindAsync(newAnswer.Question.Id);
                var respondent = await _context.Respondents.FindAsync(newAnswer.Respondent.Id);
                answer = new Answer()
                {
                    Respondent = respondent,
                    Question = question,
                    Value = newAnswer.Value
                };
                _context.Answers.Add(answer);
            }
            else
                answer.Value = newAnswer.Value;

            await _context.SaveChangesAsync();
            return answer;
        }
    }
}
