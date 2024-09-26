var size = 4;  // Adjust the size for the circle
var placement = 'point';

var style_callouts_4 = function(feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = "";
    var labelText = "";
    var labelFont = "bold 12px 'Poppins Medium', sans-serif";  // Make the text bold and slightly larger
    var labelFill = "#ffffff";  // White text color
    var bufferColor = "#000000";  // Black buffer for a clear contrast
    var bufferWidth = 2.0;  // Thicker buffer for better readability
    var textAlign = "center";  // Center-align the text
    var offsetX = 0;  // Center horizontally
    var offsetY = -15;  // Offset the label above the point
    var placement = 'point';
    
    if (feature.get("text") !== null) {
        labelText = String(feature.get("text"));
    }

    // Create a shadow effect for the text
    var textShadow = new ol.style.Text({
        font: labelFont,
        text: labelText,
        fill: new ol.style.Fill({
            color: labelFill
        }),
        stroke: new ol.style.Stroke({
            color: '#000000',  // Shadow color (black)
            width: 4  // Shadow thickness
        }),
        offsetX: offsetX,
        offsetY: offsetY,
        placement: placement,
        textAlign: textAlign,
        backgroundFill: new ol.style.Fill({
            color: 'rgba(0, 0, 0, 0.5)'  // Semi-transparent black background (optional)
        }),
        padding: [5, 5, 5, 5]  // Add padding around the label
    });

    var style = [
        new ol.style.Style({
            image: new ol.style.Circle({
                radius: 4.0 + size,  // Visible circle
                fill: new ol.style.Fill({
                    color: 'rgba(141,90,153,1.0)'  // Purple color for the circle
                })
            }),
            text: new ol.style.Text({
                font: labelFont,
                text: labelText,
                fill: new ol.style.Fill({
                    color: labelFill
                }),
                stroke: new ol.style.Stroke({
                    color: bufferColor,  // Buffer color (black)
                    width: bufferWidth  // Buffer width
                }),
                offsetX: offsetX,
                offsetY: offsetY,
                textAlign: textAlign,
                backgroundFill: new ol.style.Fill({
                    color: 'rgba(0, 0, 0, 0.5)'  // Semi-transparent black background (optional)
                }),
                padding: [5, 5, 5, 5],  // Padding around the text for better visibility
                placement: placement
            })
        })
    ];

    return style;
};
