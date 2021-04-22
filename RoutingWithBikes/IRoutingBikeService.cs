using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using System.Threading.Tasks;

namespace RoutingWithBikes
{
    [ServiceContract]
    public interface IRoutingBikeService
    {
        [OperationContract]
        [WebInvoke(Method = "GET", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare, UriTemplate = "findPaths?location={location}&destination={destination}")]
        string findPathsAsync(string location, string destination);

        [OperationContract]
        string getGlobalStat();

        [OperationContract]
        string getStationStat(string number);
    }
}
