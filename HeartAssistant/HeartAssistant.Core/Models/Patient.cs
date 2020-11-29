using System;
using System.ComponentModel.DataAnnotations;

namespace HeartAssistant.Core.Models
{
    public class Patient
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        [DataType(DataType.Date)]
        public DateTime Birthday { get; set; }
    }
}
