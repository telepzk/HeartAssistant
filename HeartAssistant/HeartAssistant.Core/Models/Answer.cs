namespace HeartAssistant.Core.Models
{
    public class Answer
    {
        public int Id { get; set; }

        public Respondent Respondent { get; set; }

        public Question Question { get; set; }

        public Variant Variant { get; set; }

        public string Value { get; set; }
    }
}
