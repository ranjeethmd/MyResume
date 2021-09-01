using ProfileEngine.Data.Interface;
using System;

namespace MyResume.Test.Stubs
{
    class Connections : IMongoDb
    {
        public string ConnectionString => Environment.ExpandEnvironmentVariables("%my-resume-connection%");
    }
}
