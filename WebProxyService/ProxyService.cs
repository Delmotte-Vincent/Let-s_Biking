namespace WebProxyService
{
   public class ProxyService : IProxyService
    {

        ProxyCache<JCDecauxStation> proxy = new ProxyCache<JCDecauxStation>();
        //Get the json of a station
        public string GetStationInfo(string contractName, string stationNumber)
        {
            //Mise à jour des jsons représentant les stations toutes les 60s
            int updateDuration = 60;
            string urlStation = "https://api.jcdecaux.com/vls/v3/stations/" + stationNumber + "?contract=" + contractName + "&apiKey=39571097c1e9b087e872bf8c82780a117c246f85";
            return proxy.Get(urlStation, updateDuration).getJson(); 
        }
    }

}
