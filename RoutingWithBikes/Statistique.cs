using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutingWithBikes
{
    public static class Statistique
    {
        public static List<Report> reports = new List<Report>();

        
        public static void addReport(Report report)
        {
            reports.Add(report);
        }

        public static string globalStatistique()
        {
            string stat = "";
            if (reports.Count == 0)
            {
                return "There is no statistics, use station before check again";
            }
            foreach(Report report in reports)
            {
                Station station = report.getStation();
                stat += ">> Station : " + station.name +" used " + report.getDate()+ "\n";
            }
            return stat;
        }

        public static string stationStatistique(string number)
        {
            string stat = "";
            foreach(Report report in reports)
            {
                if (""+report.getStation().number == number)
                {
                    stat += "Used " + report.getDate() + "\n";
                }
            }
            if (stat == "")
            {
                return "No statistic for this station yet";
            }
            return stat;
        }
    }

    public class Report
    {
        Station station { get; set; }
        DateTime date { get; set; }

        public Report(Station station)
        {
            this.station = station;
            this.date = new DateTime();
        }

        public Station getStation()
        {
            return this.station;
        }
        public DateTime getDate()
        {
            return this.date;
        }
    }
}
