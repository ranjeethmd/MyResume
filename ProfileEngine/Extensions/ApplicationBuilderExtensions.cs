using Microsoft.AspNetCore.Builder;
using ProfileEngine.Handler;

namespace ProfileEngine.Handlers
{
    static class ApplicationBuilderExtensions
    {
        public static void AddGlobalExceptionHandler(this IApplicationBuilder app)
        {
            app.UseMiddleware<GlobalExceptionHandler>();
        }
    }
}
