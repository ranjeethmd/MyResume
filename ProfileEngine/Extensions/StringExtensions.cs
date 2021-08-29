using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProfileEngine.Extensions
{
    public static class StringExtensions
    {
        public static bool IsNoThreat(this string value)
        {
            foreach(char c in value)
            {
                if (!char.IsLetterOrDigit(c))
                    return false;
            }

            return true;
        }
    }
}
