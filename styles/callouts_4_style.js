var size = 0;
var placement = 'point';

var style_callouts_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'Poppins Medium\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#000000";
    var bufferWidth = 0.3;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("text") !== null) {
        labelText = String(feature.get("text"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.0 + size,
             fill: new ol.style.Fill({color: 'rgba(141,90,153,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
