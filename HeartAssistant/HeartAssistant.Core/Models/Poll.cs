using System;
using System.Collections.Generic;
using System.Text;

namespace HeartAssistant.Core.Models
{
    public class Poll
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Type { get; set; }

        public List<Question> Questions { get; set; }
    }
}
