using Microsoft.AspNetCore.Builder;
using ProfileEngine.Handler;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProfileEngine.Handlers
{
    static  class ApplicationBuilderExtensions
    {
        public static void AddGlobalExceptionHandler(this IApplicationBuilder app)
        {
            app.UseMiddleware<GlobalExceptionHandler>();
        }
    }
}
