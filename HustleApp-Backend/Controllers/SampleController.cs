using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace HustleApp_Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SampleController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            // var optionsBuilder = new DbContextOptionsBuilder<JobDbContext>();
            // optionsBuilder.UseNpgsql("Server=127.0.0.1;Port=8080;Database=postgres;User Id=postgres;Password=mysecretpassword;Integrated Security=true;Pooling=true;");
            // optionsBuilder.UseLoggerFactory(LoggerFactory.Create(builder => builder.AddConsole()));

            // using (var context = new JobDbContext(optionsBuilder.Options))
            // {
            //     try
            //     {
            //         context.Database.OpenConnection();
            //         Console.WriteLine("Database is connected!");
            //     }
            //     catch (Npgsql.NpgsqlException ex)
            //     {
            //         Console.WriteLine("Database is not connected: " + ex.Message);
            //     }
            // }
            return Ok("Hello, world!");
        }
    }
}