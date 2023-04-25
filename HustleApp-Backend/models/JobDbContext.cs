using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using HustleApp_Backend.Models;
using Npgsql.EntityFrameworkCore.PostgreSQL;

public class JobDbContext : DbContext
{
    public DbSet<Job>? Jobs { get; set; }

    private readonly IConfiguration Configuration;

    public JobDbContext(DbContextOptions<JobDbContext> options, IConfiguration configuration) : base(options)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseNpgsql(Configuration.GetConnectionString("JobDb"));
        }
    }
}