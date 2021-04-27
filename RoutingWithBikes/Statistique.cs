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

        public static List<Report> globalStatistique()
        {
            List<Report> listReport = new List<Report>();
            if (reports.Count == 0)
            {
                return listReport;
            }
            foreach(Report report in reports)
            {
                listReport.Add(report);
            }
            return listReport;
        }

        public static List<Report> stationStatistique(string number)
        {
            List<Report> listReport = new List<Report>();
            foreach (Report report in reports)
            {
                if (""+report.getStation().number == number)
                {
                    listReport.Add(report);
                }
            }            
            return listReport;
        }
    }
}
