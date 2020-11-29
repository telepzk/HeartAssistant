using HeartAssistant.Core.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;

namespace HeartAssistant.Core
{
    public class HeartAssistantDbContext : IdentityDbContext<IdentityUser>
    {
        public DbSet<Patient> Patients { get; set; }

        public DbSet<Respondent> Respondents { get; set; }

        public DbSet<Poll> Polls { get; set; }

        public DbSet<Question> Questions { get; set; }

        public DbSet<Variant> Variants { get; set; }

        public DbSet<Answer> Answers { get; set; }

        public HeartAssistantDbContext(DbContextOptions<HeartAssistantDbContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Poll>().HasData(
                new Poll() { Id = 1, Name = "Подробный опрос", Type = "Single" },
                new Poll() { Id = 2, Name = "Краткий опрос", Type = "List" }
                );

            modelBuilder.Entity<Patient>().HasData(
                new Patient() { Id = 1, Name = "Олег", Surname = "Березин", Birthday = new DateTime(1989, 1, 17) },
                new Patient() { Id = 2, Name = "Максим", Surname = "Межов", Birthday = new DateTime(1988, 7, 3) }
                );
        }
    }
}
