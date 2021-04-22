var itineraire;


function callAPI(url, requestType, params, finishHandler) {
    var fullUrl = url;
    // If there are params, we need to add them to the URL.
    if (params) {
        // Reminder: an URL looks like protocol://host?param1=value1&param2=value2 ...
        fullUrl += "?" + params.join("&");
    }
    // The js class used to call external servers is XMLHttpRequest.
    var caller = new XMLHttpRequest();
    caller.open(requestType, fullUrl, true);
    // The header set below limits the elements we are OK to retrieve from the server.
    caller.setRequestHeader ("Accept", "application/json");
    // onload shall contain the function that will be called when the call is finished.
    caller.onload=finishHandler;

    caller.send();
}



function getCoordinates() {
    getPath();
    console.log("YO");
}


// Récuperation de l'adresse de départ (input)
function getLocation() {
    var input = document.getElementById("location");
    return input.value;
}
// Récuperation de l'adresse d'arrivée (input)
function getDestination() {
    var input = document.getElementById("destination");
    return input.value;
}

function getPath() { 
    var targetUrl = "http://localhost:8733/Design_Time_Addresses/RoutingWithBikes/InfoStation/findPaths";
    var requestType = "GET";
    var params = ["location="+getLocation(), "destination="+getDestination()];
    var onFinish = initPath;
    callAPI(targetUrl, requestType, params, onFinish);
}

// This function is called when a XML call is finished. In this context, "this" refers to the API response.
function initPath() {
    // First of all, check that the call went through OK:
    if (this.status !== 200) {
        console.log("Stations not retrieved. Check the error in the Network or Console tab.");
    } else {
        console.log(this.responseText);
        // Let's fill the stations variable with the list we got from the API:
        var json = "{\"Etape1\":[[2.255391,49.911717],[2.255066,49.911315],[2.255044,49.911292],[2.255025,49.911298],[2.255004,49.9113],[2.254983,49.911298],[2.254947,49.911282],[2.254935,49.911268],[2.254932,49.911252],[2.254938,49.911236],[2.254947,49.911226],[2.254959,49.911218],[2.254974,49.911212],[2.254995,49.911208],[2.255017,49.911208],[2.255072,49.911192],[2.255765,49.910954],[2.256162,49.910819],[2.257251,49.910423],[2.257411,49.910371],[2.257464,49.910353],[2.257593,49.910305],[2.257883,49.910202],[2.257992,49.910166],[2.258115,49.910128],[2.258265,49.910071],[2.258306,49.910058],[2.258372,49.910033],[2.258422,49.910015],[2.258432,49.910008],[2.258457,49.909999],[2.258472,49.909997],[2.258543,49.909979],[2.25859,49.909965],[2.258815,49.909889],[2.25932,49.909682],[2.259805,49.909478],[2.261313,49.908856],[2.261722,49.908687],[2.26231,49.908465],[2.262703,49.908355],[2.263494,49.90816],[2.264292,49.907938],[2.264348,49.907916],[2.264371,49.907902],[2.26443,49.907891],[2.264461,49.907894],[2.264535,49.907895],[2.264714,49.907876],[2.264845,49.907833],"
        +"[2.264865,49.907821],[2.264879,49.907804],[2.264956,49.90778],[2.264985,49.907783],[2.265018,49.907781],[2.266078,49.907459],[2.266571,49.907285],[2.266703,49.907236],[2.267088,49.907096],[2.267413,49.906964],[2.267796,49.906822],[2.268463,49.906563],[2.268514,49.906538],[2.268549,49.906521],[2.268562,49.906507],[2.268608,49.906488],[2.268639,49.906486],[2.26869,49.90648],[2.268756,49.906469],[2.268977,49.906388],[2.269335,49.906283],[2.269613,49.906212],[2.269701,49.90619],[2.270645,49.905951],[2.271036,49.905865],[2.271144,49.905831],[2.271205,49.905811],[2.271213,49.905791],[2.271251,49.905757],[2.27128,49.905747],[2.271318,49.905742],[2.271357,49.905746],[2.271392,49.905757],[2.271454,49.905754],[2.271904,49.905674],[2.272156,49.905601],[2.272256,49.905564],[2.272371,49.905504],[2.272458,49.905452],[2.272621,49.905345],[2.272783,49.905231],[2.273002,49.905106],[2.273497,49.904834],[2.273509,49.90481],[2.273497,49.904773],[2.273504,49.904736],[2.27353,49.904703],[2.273624,49.904661],[2.273682,49.904657],[2.273738,49.904666],[2.273799,49.904643],"
        +"[2.27599,49.903529],[2.276463,49.903325],[2.276641,49.903266],[2.276836,49.903201],[2.276952,49.903174],[2.277092,49.903136],[2.277193,49.903111],[2.277281,49.903088],[2.277531,49.903035],[2.277864,49.902981],[2.278307,49.90292],[2.279752,49.902822],[2.279972,49.902807],[2.280548,49.902742],[2.281149,49.902633],[2.281607,49.902504],[2.283933,49.901614],[2.284179,49.901569],[2.284156,49.9015],[2.284107,49.901365],[2.284074,49.901271],[2.283891,49.900754],[2.283865,49.900688],[2.283626,49.89999],[2.283582,49.899876],[2.283576,49.89986],[2.283524,49.899722],[2.28345,49.899482],[2.283433,49.899417],[2.283068,49.898118],[2.282774,49.897081],[2.282766,49.897052],[2.282744,49.896964],[2.282739,49.896875],[2.282847,49.8969]],\"Indication1\":[{\"distance\":53.4,\"duration\":12.8,\"type\":11,\"instruction\":\"Head southwest on Rue Jean de la Fontaine\",\"name\":\"Rue Jean de la Fontaine\",\"way_points\":[0,2]},{\"distance\":297.7,\"duration\":65.2,\"type\":7,\"instruction\":\"Enter the roundabout and take the 3rd exit onto Rue d'Abbeville, D 1235\",\"name\":\"Rue d'Abbeville, D 1235\",\"way_points\":[2,28]},"
        +"{\"distance\":486.1,\"duration\":46.4,\"type\":7,\"instruction\":\"Enter the roundabout and take the 1st exit onto Rue d'Abbeville, D 1235\",\"name\":\"Rue d'Abbeville, D 1235\",\"way_points\":[28,43]},{\"distance\":39.9,\"duration\":10.7,\"type\":7,\"instruction\":\"Enter the roundabout and take the 1st exit\",\"name\":\"-\",\"way_points\":[43,50]},{\"distance\":302.4,\"duration\":32.9,\"type\":7,\"instruction\":\"Enter the roundabout and take the 1st exit onto Rue d'Abbeville, D 1235\",\"name\":\"Rue d'Abbeville, D 1235\",\"way_points\":[50,63]},{\"distance\":206.9,\"duration\":26.5,\"type\":7,\"instruction\":\"Enter the roundabout and take the 1st exit onto Rue d'Abbeville, D 1235\",\"name\":\"Rue d'Abbeville, D 1235\",\"way_points\":[63,76]},{\"distance\":207.2,\"duration\":35.6,\"type\":7,\"instruction\":\"Enter the roundabout and take the 2nd exit onto Rue du Faubourg de Hem, D 1235\",\"name\":\"Rue du Faubourg de Hem, D 1235\",\"way_points\":[76,93]},{\"distance\":869.5,\"duration\":84.8,\"type\":7,\"instruction\":\"Enter the roundabout and take the 2nd exit onto Rue d'Australie, D 1235\",\"name\":\"Rue d'Australie, D 1235\","
        +"\"way_points\":[93,118]},{\"distance\":532.3,\"duration\":59.6,\"type\":1,\"instruction\":\"Turn right onto Rue des Prés Forêts\",\"name\":\"Rue des Prés Forêts\",\"way_points\":[118,134]},{\"distance\":8.2,\"duration\":2.0,\"type\":2,\"instruction\":\"Turn sharp left onto Allée du Bicêtre\",\"name\":\"Allée du Bicêtre\",\"way_points\":[134,135]},{\"distance\":0.0,\"duration\":0.0,\"type\":10,\"instruction\":\"Arrive at Allée du Bicêtre, on the right\",\"name\":\"-\",\"way_points\":[135,135]}],\"Etape2\":[[2.282847,49.8969],[2.282739,49.896875],[2.282831,49.896696],[2.282846,49.896663],[2.283123,49.896044],[2.2833,49.895644],[2.283311,49.895619],[2.283397,49.895431],[2.283456,49.895294],[2.283478,49.895248],[2.28358,49.895024],[2.283836,49.894442],[2.283862,49.894316],[2.283902,49.894223],[2.283976,49.894134],[2.284059,49.894066],[2.284376,49.893941],[2.284507,49.893891],[2.284956,49.893702],[2.285102,49.893649],[2.285169,49.893631],[2.285257,49.893602],[2.285948,49.893334],[2.286123,49.893284],[2.286056,49.893193],[2.286001,49.893085],[2.285991,49.893013],"
        +"[2.286001,49.892937],[2.286025,49.892909],[2.28638,49.892679],[2.286647,49.892538],[2.286928,49.892433],[2.287752,49.891984],[2.288011,49.891844],[2.289981,49.89075],[2.290223,49.89058],[2.2907,49.890321],[2.290795,49.890274],[2.290894,49.890245],[2.291094,49.890161],[2.291642,49.889956],[2.291768,49.889893],[2.291937,49.889813],[2.292288,49.889682],[2.294582,49.888876],[2.294791,49.88881],[2.294941,49.888772],[2.294972,49.888816],[2.295053,49.888799],[2.29677,49.888744],[2.296801,49.888744],[2.296962,49.888737],[2.297188,49.888726],[2.297429,49.888719],[2.299805,49.888639],[2.300083,49.888637],[2.301914,49.888577],[2.302764,49.888534],[2.303005,49.888536],[2.303133,49.888533],[2.303462,49.888534],[2.304414,49.888517],[2.30457,49.888535],[2.304838,49.8886],[2.304982,49.888671],[2.305092,49.888765],[2.305349,49.889102],[2.305486,49.889294],[2.305575,49.889203],[2.305635,49.889182],[2.305885,49.889135],[2.306018,49.889142],[2.306141,49.889161],[2.306232,49.889177],[2.306443,49.889236],[2.306579,49.889285],[2.306744,49.889367],[2.306992,49.889486],[2.307072,49.889532],"
        +"[2.307177,49.889566],[2.308801,49.889795],[2.308819,49.889794],[2.308841,49.889793],[2.309074,49.889733]],\"Indication2\":[{\"distance\":8.2,\"duration\":2.0,\"type\":11,\"instruction\":\"Head west on Allée du Bicêtre\",\"name\":\"Allée du Bicêtre\",\"way_points\":[0,1]},{\"distance\":499.2,\"duration\":74.0,\"type\":0,\"instruction\":\"Turn left onto Boulevard des Fédérés\",\"name\":\"Boulevard des Fédérés\",\"way_points\":[1,23]},{\"distance\":836.1,\"duration\":111.2,\"type\":1,\"instruction\":\"Turn right onto Boulevard Carnot\",\"name\":\"Boulevard Carnot\",\"way_points\":[23,46]},{\"distance\":5.4,\"duration\":1.3,\"type\":0,\"instruction\":\"Turn left onto Rue Blasset\",\"name\":\"Rue Blasset\",\"way_points\":[46,47]},{\"distance\":800.8,\"duration\":74.1,\"type\":1,\"instruction\":\"Turn right onto Mail Albert 1er\",\"name\":\"Mail Albert 1er\",\"way_points\":[47,67]},{\"distance\":12.0,\"duration\":2.2,\"type\":3,\"instruction\":\"Turn sharp right onto Rue Charles de Foucauld\",\"name\":\"Rue Charles de Foucauld\",\"way_points\":[67,68]},{\"distance\":76.7,\"duration\":15.9,"
        +"\"type\":4,\"instruction\":\"Turn slight left onto Rue Charles de Foucauld\",\"name\":\"Rue Charles de Foucauld\",\"way_points\":[68,75]},{\"distance\":44.7,\"duration\":8.1,\"type\":12,\"instruction\":\"Keep left onto Rue Charles de Foucauld\",\"name\":\"Rue Charles de Foucauld\",\"way_points\":[75,78]},{\"distance\":149.5,\"duration\":21.5,\"type\":13,\"instruction\":\"Keep right onto Rue Charles de Foucauld\",\"name\":\"Rue Charles de Foucauld\",\"way_points\":[78,83]},{\"distance\":0.0,\"duration\":0.0,\"type\":10,\"instruction\":\"Arrive at Rue Charles de Foucauld, on the left\",\"name\":\"-\",\"way_points\":[83,83]}],\"Etape3\":[[2.309074,49.889733],[2.309131,49.889718],[2.31043,49.889211],[2.31048,49.889204],[2.310472,49.889192],[2.310474,49.889166],[2.310516,49.889139],[2.310536,49.889136],[2.310587,49.889119],[2.31115,49.888888],[2.311182,49.888873],[2.311193,49.888858],[2.311212,49.888848],[2.311236,49.888843],[2.31128,49.88883],[2.312444,49.888393],[2.313651,49.887911],[2.313693,49.887891],[2.3137,49.88788],[2.313711,49.887871],[2.313741,49.88786],[2.313759,49.887859],[2.313808,49.887841],[2.314222,49.887682],"
        +"[2.314262,49.887666],[2.314268,49.887652],[2.314309,49.887631],[2.314322,49.88763],[2.314392,49.887607],[2.315408,49.88719],[2.315483,49.887149],[2.315555,49.887129],[2.315933,49.886982],[2.316032,49.886938],[2.316134,49.886896],[2.316773,49.886644],[2.316744,49.886601],[2.31665,49.886388],[2.316619,49.886107],[2.316681,49.885901],[2.316727,49.885785],[2.316895,49.885159],[2.317235,49.884055],[2.317304,49.883856],[2.317271,49.88379],[2.317503,49.883581],[2.317708,49.883404],[2.318068,49.883085],[2.318148,49.883018],[2.318654,49.882564],[2.31869,49.882532],[2.318736,49.882485],[2.318846,49.882376],[2.318984,49.882261],[2.319015,49.882234],[2.319574,49.881763],[2.319673,49.88169],[2.319727,49.881647],[2.319824,49.88158],[2.320265,49.881275],[2.320415,49.881171],[2.320514,49.881103],[2.320539,49.881085],[2.32059,49.881048],[2.32116,49.88064],[2.321662,49.880292],[2.321817,49.880194],[2.322175,49.879947],[2.322655,49.879631],[2.323283,49.879221],[2.32342,49.879127],[2.32353,49.879055],[2.323905,49.878807],[2.324152,49.878644],[2.324671,49.878302],[2.325023,49.87807],[2.3251,49.878023],[2.325339,49.877875],[2.326094,49.877412],[2.326113,49.877401],"
        +"[2.326803,49.876982],[2.326897,49.876926],[2.32736,49.876649],[2.328094,49.87621],[2.328168,49.876165],[2.328267,49.876108],[2.328367,49.87605],[2.328478,49.875978],[2.328694,49.875848],[2.328882,49.875735],[2.328941,49.875698],[2.329449,49.87538],[2.329575,49.875298],[2.329637,49.875228],[2.329952,49.874875],[2.330937,49.873793],[2.331813,49.872782],[2.331946,49.872608],[2.332044,49.872481],[2.332238,49.872182],[2.332318,49.872067],[2.332502,49.871794],[2.332599,49.871643],[2.332665,49.8715],[2.332765,49.871348],[2.332855,49.871216],[2.332934,49.87123],[2.333031,49.871245],[2.333052,49.871354],[2.33322,49.871931],[2.333251,49.8724],[2.33324,49.87258],[2.333207,49.873157],[2.332998,49.874268],[2.33282,49.874898],[2.332753,49.874884],[2.332545,49.874835]],\"Indication3\":[{\"distance\":119.7,\"duration\":17.2,\"type\":11,\"instruction\":\"Head east on Rue Jules Barni\",\"name\":\"Rue Jules Barni\",\"way_points\":[0,3]},{\"distance\":65.0,\"duration\":13.5,\"type\":7,\"instruction\":\"Enter the roundabout and take the 1st exit onto Rue Jules Barni\",\"name\":\"Rue Jules Barni\",\"way_points\":[3,10]},"
        +"{\"distance\":211.0,\"duration\":33.5,\"type\":7,\"instruction\":\"Enter the roundabout and take the 1st exit onto Rue Jules Barni\",\"name\":\"Rue Jules Barni\",\"way_points\":[10,17]},{\"distance\":48.4,\"duration\":12.4,\"type\":7,\"instruction\":\"Enter the roundabout and take the 2nd exit onto Rue Jules Barni\",\"name\":\"Rue Jules Barni\",\"way_points\":[17,24]},{\"distance\":213.6,\"duration\":38.8,\"type\":7,\"instruction\":\"Enter the roundabout and take the 1st exit onto Rue Jules Barni\",\"name\":\"Rue Jules Barni\",\"way_points\":[24,35]},{\"distance\":324.1,\"duration\":77.8,\"type\":1,\"instruction\":\"Turn right onto Rue de Cagny\",\"name\":\"Rue de Cagny\",\"way_points\":[35,44]},{\"distance\":1807.2,\"duration\":155.7,\"type\":0,\"instruction\":\"Turn left onto Rue de Cagny\",\"name\":\"Rue de Cagny\",\"way_points\":[44,105]},{\"distance\":13.0,\"duration\":3.1,\"type\":0,\"instruction\":\"Turn left\",\"name\":\"-\",\"way_points\":[105,107]},{\"distance\":409.6,\"duration\":98.3,\"type\":0,\"instruction\":\"Turn left onto Rue René Boileau\",\"name\":\"Rue René Boileau\",\"way_points\":"
        +"[107,114]},{\"distance\":20.9,\"duration\":5.0,\"type\":0,\"instruction\":\"Turn left onto Allée du Verger\",\"name\":\"Allée du Verger\",\"way_points\":[114,116]},{\"distance\":0.0,\"duration\":0.0,\"type\":10,\"instruction\":\"Arrive at Allée du Verger, on the left\",\"name\":\"-\",\"way_points\":[116,116]}]}"
        itineraire = JSON.parse(json);
        
        //itineraire = JSON.parse(this.responseText);
        //console.log(this.responseText);
        //printValues(itineraire);
        
        //console.log(itineraire.Etape1);
    
        for (let i = 0; i < itineraire.Etape1.length-1; i++) {
            drawPath(itineraire.Etape1[i], itineraire.Etape1[i+1], false);
        }
        for (let i = 0; i < itineraire.Etape2.length-1; i++) {
            drawPath(itineraire.Etape2[i], itineraire.Etape2[i+1], true);
        }
        
        for (let i = 0; i < itineraire.Etape3.length-1; i++) {
            drawPath(itineraire.Etape3[i], itineraire.Etape3[i+1], false);
        }

        console.log(itineraire.Indication1);
        console.log(itineraire.Indication2);
        console.log(itineraire.Indication3);
    }
}


function printValues(obj) {
    for(var k in obj) {
        if(obj[k] instanceof Object) {
            printValues(obj[k]);
        } else {
            document.write(obj[k] + "<br>");
        };
    }
};




