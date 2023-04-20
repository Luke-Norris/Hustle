using Microsoft.EntityFrameworkCore;
using HustleApp_Backend.Models;
public class JobDbContext : DbContext
{
    public DbSet<Job>? Jobs { get; set; }

    public JobDbContext(DbContextOptions<JobDbContext> options) : base(options)
    {
    }
}