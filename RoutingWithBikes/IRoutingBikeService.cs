using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;

namespace RoutingWithBikes
{
    [ServiceContract]
    public interface IRoutingBikeService
    {
        [OperationContract]
        [WebInvoke(Method = "GET", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare, UriTemplate = "findPaths?location={location}&destination={destination}")]
        string findPathsAsync(string location, string destination);

        [OperationContract]
        List<Report> getGlobalStat();

        [OperationContract]
        List<Report> getStationStat(string number);
    }

    [DataContract]
    public class Report
    {
        [DataMember]
        public Station station { get; set; }
        [DataMember]
        public DateTime localDate { get; set; }
        
        [DataMember]
        public string date { get; set; }

        public Report(Station s)
        {
            station = s;
            localDate = DateTime.Now;
            date = localDate.ToString(new CultureInfo("fr-FR"));
        }
        
        public Station getStation()
        {
            return this.station;
        }
        
    }
}
