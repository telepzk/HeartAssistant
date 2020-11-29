using HeartAssistant.Core;
using HeartAssistant.Core.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;


namespace HeartAssistant.Web.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class RespondentsController : ControllerBase
    {
        private readonly HeartAssistantDbContext _context;

        public RespondentsController(HeartAssistantDbContext context)
        {
            _context = context;
        }

        [HttpGet("{id:int}")]
        public async Task<Respondent> GetAsync(int id)
        {
            return await _context.Respondents.FindAsync(id);
        }

        [HttpGet("find/{code}")]
        public async Task<Respondent> FindOrCreateAsync(string code)
        {
            if (string.IsNullOrEmpty(code))
                throw new System.Exception(code);

            var respondent = await _context.Respondents.Where(r => r.Code == code).FirstOrDefaultAsync();
            if (respondent is null)
            {
                respondent = new Respondent() { Code = code };
                _context.Respondents.Add(respondent);
                await _context.SaveChangesAsync();
            }
            return respondent;
        }

        [HttpGet("all")]
        public async Task<IEnumerable<Respondent>> GetAllAsync()
        {
            return await _context.Respondents.ToArrayAsync();
        }

        [HttpGet("answers/{id:int}")]
        public async Task<IEnumerable<Answer>> GetAnswersAsync(int id)
        {
            return await _context.Answers.Where(a => a.Respondent.Id == id).Include(a => a.Question).ToArrayAsync();
        }

        [HttpGet("predict/{id:int}")]
        public async Task<string> PredictAsync(int id)
        {
            var respondent = await _context.Respondents.FindAsync(id);
            var request = new Dictionary<string, string>
            {
                { "ID", respondent.Code }
            };
            var questions = await _context.Questions
                .Select(q => new { q.Id, q.Name })
                .ToArrayAsync();
            foreach (var question in questions)
            {
                var value = string.Empty;
                var answer = _context.Answers.Where(a => a.Respondent.Id == id && a.Question.Id == question.Id).FirstOrDefault();
                if (answer != null)
                    value = answer.Value;
                request.Add(question.Name, value);
            }

            var response = string.Empty;
            using (var client = new HttpClient())
            {
                var payload = JsonConvert.SerializeObject(request);
                var content = new StringContent(payload, Encoding.UTF8, "application/json");
                var result = await client.PostAsync("http://localhost:1488", content);
                if (result.IsSuccessStatusCode)
                {
                    response = await result.Content.ReadAsStringAsync();
                    respondent.Prediction = response;
                    await _context.SaveChangesAsync();
                }
            }

            return response;
        }
    }
}
