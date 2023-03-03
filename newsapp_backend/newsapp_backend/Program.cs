using Microsoft.Extensions.Options;
using MongoDB.Driver;
using newsapp_backend.DatabaseSettings.IDatabaseSettings;
using newsapp_backend.DatabaseSettings;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//users collection DI
builder.Services.Configure<UsersDatabaseSettings>(
                builder.Configuration.GetSection(nameof(UsersDatabaseSettings)));

builder.Services.AddSingleton<IUsersDatabaseSettings>(sp =>
    sp.GetRequiredService<IOptions<UsersDatabaseSettings>>().Value);


//mongodb connection using mongo client
builder.Services.AddSingleton<IMongoClient>(s =>
        new MongoClient(builder.Configuration.GetValue<string>("DBConnectionString:ConnectionString")));



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

