using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using ProfileEngine.POCO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace ProfileEngine.Handler
{
    public class GlobalExceptionHandler
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<GlobalExceptionHandler> _logger;

        public GlobalExceptionHandler(RequestDelegate next, ILogger<GlobalExceptionHandler> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch(Exception ex)
            {
                await HandleErrorResponseAsync(context.Response, ex);
            }
        }

        private async Task HandleErrorResponseAsync(HttpResponse response,Exception ex)
        {
            response.ContentType = "application/json";
            response.StatusCode =  (int) HttpStatusCode.InternalServerError;
            var id = Guid.NewGuid();
            _logger.LogError(ex,$"Error - {id}");
            await response.WriteAsync(JsonConvert.SerializeObject(new ApiError(id,"Something went wrong here. Let me take a look and fix it. Try after sometime.")
                ,new JsonSerializerSettings {
                    ContractResolver = new CamelCasePropertyNamesContractResolver()

                }));
        }
    }
}
