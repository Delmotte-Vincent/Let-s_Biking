using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Description;
using System.Text;
using System.Threading.Tasks;
using WebProxyService;

namespace launch
{
    class Program
    {
        
        static void Main(string[] args)
        {

            // Create the ServiceHost.
            using (ServiceHost host = new ServiceHost(typeof(ProxyService)))
            {

                host.Open();

                Console.WriteLine("The service is ready at {0}", host.BaseAddresses[0]);

                Console.ReadLine();
                host.Close();
            }
        }
    }

}

