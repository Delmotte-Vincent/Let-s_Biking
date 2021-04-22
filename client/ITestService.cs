using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace Client
{
    [ServiceContract]
    interface ITestService
    {
        [OperationContract]
        String WelcomeUser(String name);
    }
}