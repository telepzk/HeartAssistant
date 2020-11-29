using System.Collections.Generic;

namespace HeartAssistant.Core.Models
{
    public class Question
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Type { get; set; }

        public List<Variant> Variants { get; set; }
    }
}
