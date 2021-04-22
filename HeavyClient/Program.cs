using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace HeavyClient
{
    class Program
    {
        
        static void Main(string[] args)
        {
            RoutingBikeService.IRoutingBikeService routingBike = new RoutingBikeService.RoutingBikeServiceClient();

            string choix = "";
            do
            {
                Console.WriteLine("# Bienvenue dans le client lourd #\n");
                Console.WriteLine("  0 - Quit");
                Console.WriteLine("  1 - Find path");
                Console.WriteLine("  2 - Global statistics");
                Console.WriteLine("  3 - Station statistics\n");
                choix = Console.ReadLine();

                if (choix == "1")
                {
                    Console.WriteLine("# Find your path #\n");
                    Console.WriteLine("Enter start address :");
                    string start = Console.ReadLine();

                    Console.WriteLine("\nEnter end address:");
                    string end = Console.ReadLine();
                    Console.WriteLine("\n");

                    string json = routingBike.findPathsAsync(start, end);
                    Itineraire itineraire = JsonConvert.DeserializeObject<Itineraire>(json);
                    PromptItineraire(itineraire);
                }

                if (choix == "2")
                {
                    Console.WriteLine("# Report of all station used #\n");
                    Console.WriteLine(routingBike.getGlobalStat());
                    Console.WriteLine("\npress entrée");
                    Console.ReadLine();
                }

                if (choix == "3")
                {
                    Console.WriteLine("Enter the station number you want to check");
                    string number = Console.ReadLine();
                    Console.WriteLine(routingBike.getStationStat(number));
                    Console.WriteLine("press entrée");
                    Console.ReadLine();
                }

            } while (choix != "0");

            /* Methodes utilitaires */

            void PromptInfo(List<Step> steps)
            {
                foreach (Step step in steps)
                {
                    Console.WriteLine(">> " + step.instruction);
                }
            }

            void PromptItineraire(Itineraire it)
            {
                Console.Write("--- Walk course ---\n");
                PromptInfo(it.Indication1);
                Console.Write("Press enter to continue\n");
                Console.ReadLine();

                Console.Write("--- Bike course ---\n");
                PromptInfo(it.Indication2);
                Console.Write("Press enter to continue\n");
                Console.ReadLine();

                Console.Write("--- Walk course ---\n");
                PromptInfo(it.Indication3);
                Console.Write("Press enter to exit\n");
                Console.ReadLine();
            }
        }   
    }
}
