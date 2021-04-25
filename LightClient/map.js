var map;

/* Map */
function openMap() {
    /* Creation et gestion de la map */
    this.map = new ol.Map({
        target: 'map', // <-- This is the id of the div in which the map will be built.
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        
        view: new ol.View({
            center: ol.proj.fromLonLat([2.255504,49.911848]), // <-- Those are the GPS coordinates to center the map to.
            zoom: 10 // You can adjust the default zoom.
        }),
    });
}

function drawPath(coordinateA, coordinateB, velo) {
    // Create an array containing the GPS positions you want to draw
    var coords = [coordinateA, coordinateB];
    var lineString = new ol.geom.LineString(coords);

    // Transform to EPSG:3857
    lineString.transform('EPSG:4326', 'EPSG:3857');

    // Create the feature
    var feature = new ol.Feature({
        geometry: lineString,
        name: 'Line'
    });

    // Configure the style of the line
    if (velo) {
        var lineStyle = new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#0066ff',
                width: 5
            })
        });
    } else {
        var lineStyle = new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#33cc33',
                width: 5
            })
        });
    }
    
    var source = new ol.source.Vector({
        features: [feature]
    });

    var vector = new ol.layer.Vector({
        source: source,
        style: [lineStyle]
    });

    this.map.addLayer(vector);
}

