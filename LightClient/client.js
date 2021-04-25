display = false;
first = true;

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
        
    
        itineraire = JSON.parse(JSON.parse(this.responseText));
    
        for (let i = 0; i < itineraire.Etape1.length-1; i++) {
            drawPath(itineraire.Etape1[i], itineraire.Etape1[i+1], false);
        }
        for (let i = 0; i < itineraire.Etape2.length-1; i++) {
            drawPath(itineraire.Etape2[i], itineraire.Etape2[i+1], true);
        }
        
        for (let i = 0; i < itineraire.Etape3.length-1; i++) {
            drawPath(itineraire.Etape3[i], itineraire.Etape3[i+1], false);
        }
/*
        for (let i = 0; i < itineraire.Indication1.length; i++) {
            initDetail(itineraire.Indication1[i].instruction, "step1");
        }

        for (let i = 0; i < itineraire.Indication2.length; i++) {
            initDetail(itineraire.Indication2[i].instruction, "step2");
        }
  
        for (let i = 0; i < itineraire.Indication3.length; i++) {
            initDetail(itineraire.Indication2[i].instruction, "step3");
        }*/
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


function initDetail(text, bloc) {
    const myParent = document.getElementById(bloc); 
    const innerP = document.createElement("p");
    innerP.textContent = text;
    myParent.append(innerP); 
}

function getDetails() {
    if (display) {
        const pathDiv = document.getElementById("path");
        pathDiv.parentNode.removeChild(pathDiv);
        display = false;
    }
    else {
        const myParent = document.getElementById("map");
        const pathDiv = document.createElement("div");
        pathDiv.setAttribute("id", "path");
        myParent.insertAdjacentElement('afterend', pathDiv);
        display = true;

        const header = document.createElement("div");
        header.setAttribute("id", "header");
        pathDiv.append(header);

        const button1 = document.createElement("button");
        button1.setAttribute("classe", "buttonStep");
        button1.setAttribute("onclick", "step1();");
        button1.textContent = "Step 1";

        const button2 = document.createElement("button");
        button2.setAttribute("classe", "buttonStep");
        button2.setAttribute("onclick", "step2();");
        button2.textContent = "Step 2";

        const button3 = document.createElement("button");
        button3.setAttribute("classe", "buttonStep");
        button3.setAttribute("onclick", "step3();");
        button3.textContent = "Step 3";


        header.append(button1);
        header.append(button2);
        header.append(button3);

        step1();
    }
    
}

function step1() {
    if (first == false) {
        const contentDiv = document.getElementById("content");
        while(contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
        }
        contentDiv.parentNode.removeChild(contentDiv);
    }
    const pathDiv = document.getElementById("path");
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    pathDiv.append(content);

    for (let i = 0; i < itineraire.Indication1.length; i++) {
        initDetail(itineraire.Indication1[i].instruction, "content");
    }

    first = false;
}

function step2() {
    const contentDiv = document.getElementById("content");
    while(contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
    contentDiv.parentNode.removeChild(contentDiv);
    
    const pathDiv = document.getElementById("path");
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    pathDiv.append(content);

    for (let i = 0; i < itineraire.Indication2.length; i++) {
        initDetail(itineraire.Indication2[i].instruction, "content");
    }
}

function step3() {
    const contentDiv = document.getElementById("content");
    while(contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
    contentDiv.parentNode.removeChild(contentDiv);
    
    const pathDiv = document.getElementById("path");
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    pathDiv.append(content);

    for (let i = 0; i < itineraire.Indication3.length; i++) {
        initDetail(itineraire.Indication3[i].instruction, "content");
    }
}



