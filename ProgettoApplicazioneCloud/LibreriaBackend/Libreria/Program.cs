using Libreria.Middleware;
using Libreria.ServiceExtensions;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);


//Servizi
builder.Services
    .AddWebServices(builder.Configuration)
    .AddApplicationServices(builder.Configuration)
    .AddModelServices(builder.Configuration);


var app = builder.Build();
app.UseCors("AllowAngularApp");

//Inizializzo Middleware

app.AddWebMiddleware()
    .AddApplicationMiddleware();

app.Run();

