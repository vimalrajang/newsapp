using Microsoft.Extensions.Options;
using MongoDB.Driver;
using newsapp_backend.DatabaseSettings.IDatabaseSettings;
using newsapp_backend.DatabaseSettings;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using newsapp_backend.Repositories.IRepositories;
using newsapp_backend.Repositories;
using Microsoft.AspNetCore.Builder;

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

//adding jwt authentication
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
               .AddJwtBearer(options => {
                   options.TokenValidationParameters = new TokenValidationParameters
                   {
                       ValidateIssuer = true,
                       ValidateAudience = true,
                       ValidateLifetime = true,
                       ValidateIssuerSigningKey = true,
                       ValidIssuer = builder.Configuration.GetSection("Jwt").GetSection("Issuer").Value,
                       ValidAudience = builder.Configuration.GetSection("Jwt").GetSection("Audience").Value,
                       IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration.GetSection("Jwt").GetSection("Key").Value))
                   };
               });

//repositories DI
builder.Services.AddSingleton<IUserAuthenticateRepository, UserAuthenticateRepository>();
builder.Services.AddSingleton<IUserAuthorizeRepository, UserAuthorizeRepository>();

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
app.UseCors(builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();

