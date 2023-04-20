using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Xunit;
using Xunit.Abstractions;

namespace HustleApp_Backend.Tests
{
    public class DatabaseConnectionTest
    {
        private readonly ITestOutputHelper _output;

        public DatabaseConnectionTest(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void TestDatabaseConnection()
        {
            var optionsBuilder = new DbContextOptionsBuilder<JobDbContext>();
            optionsBuilder.UseNpgsql("Server=127.0.0.1;Port=8080;Database=postgres;User Id=postgres;Password=postgres;Integrated Security=true;Pooling=true;");

            using (var context = new JobDbContext(optionsBuilder.Options))
            {
                try
                {
                    context.Database.OpenConnection();
                    _output.WriteLine("Database is connected!");
                }
                catch (Npgsql.NpgsqlException ex)
                {
                    _output.WriteLine("Database is not connected: " + ex.Message);
                }
            }
        }
    }
}