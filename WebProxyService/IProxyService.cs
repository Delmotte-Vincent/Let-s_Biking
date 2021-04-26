using System.ServiceModel;
using System.ServiceModel.Web;

namespace WebProxyService
{
    [ServiceContract]
    public interface IProxyService
    {
        [OperationContract]
        [WebInvoke(Method = "GET", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare, UriTemplate = "Station?stationNumber={stationNumber}&contractName={contractName}")]
        string GetStationInfo(string contractName, string stationNumber);
    }
}
