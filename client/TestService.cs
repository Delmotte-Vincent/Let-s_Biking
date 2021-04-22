
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Client
{
    public class TestService : ITestService
    {
        public String WelcomeUser(String name)
        {
            return String.Format("Welcome " + name);
        }
    }
}
