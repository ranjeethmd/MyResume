using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfileEngine.Data.Interface
{
    public interface IMongoDb
    {
        public string ConnectionString { get; }
    }
}
