using System.ComponentModel.DataAnnotations;

namespace HustleApp_Backend.Models
{
    public class Job
    {
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string JobTitle { get; set; }
        public string JobDescription { get; set; }
        public string Images { get; set; }
        public Boolean Hourly { get; set; }
        public string CompletionTime { get; set; }
        public string NumberOfWorkers { get; set; }
        public string Geolocation { get; set; }
        public string StartTime { get; set; }
        public string ExtraInfo { get; set; }
    }
}