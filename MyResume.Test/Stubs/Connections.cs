using ProfileEngine.Data.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyResume.Test.Stubs
{
    class Connections : IMongoDb
    {
        public string ConnectionString => Environment.ExpandEnvironmentVariables("%my-resume-connection%");
    }
}
