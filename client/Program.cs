
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Diagnostics;
using System.Collections;
using Client;
using System.ServiceModel;
using System.ServiceModel.Description;
namespace Client
{
    class Program
    {
        static void Main(string[] args)
        {
            Uri baseAddress = new Uri("http://localhost:6525/TestService");
            using (ServiceHost host = new ServiceHost(typeof(Client.TestService), baseAddress))
            {
                ServiceMetadataBehavior smb = new ServiceMetadataBehavior();
                smb.HttpGetEnabled = true;
                smb.MetadataExporter.PolicyVersion = PolicyVersion.Policy15;
                host.Description.Behaviors.Add(smb);
                host.Open();
                Console.WriteLine("The service is ready at: {0}", baseAddress);
                Console.WriteLine("Press <Enter> to stop the service");
                Console.ReadKey();
                host.Close();
                Console.ReadLine();
            }
        }
    }
}
