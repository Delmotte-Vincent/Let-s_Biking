using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;
using RoutingWithBikes;

namespace Launch_Routing
{
    class Program
    {

        static void Main(string[] args)
        {

            // Create the ServiceHost.
            using (ServiceHost host = new ServiceHost(typeof(RoutingBikeService)))
            {

                host.Open();

                Console.WriteLine("The service is ready at {0}", host.BaseAddresses[0]);

                Console.ReadLine();
                host.Close();
            }
        }
    }
}
