ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([8123069.466013, 2177363.252460, 8124529.777166, 2178011.051352]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CartoLight_1 = new ol.layer.Tile({
            'title': 'Carto Light',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });

        var lyr_CartoDark_2 = new ol.layer.Tile({
            'title': 'Carto Dark',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_SAMPLES_3 = new ol.format.GeoJSON();
var features_SAMPLES_3 = format_SAMPLES_3.readFeatures(json_SAMPLES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAMPLES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAMPLES_3.addFeatures(features_SAMPLES_3);
var lyr_SAMPLES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAMPLES_3, 
                style: style_SAMPLES_3,
                popuplayertitle: "SAMPLES",
                interactive: true,
                title: '<img src="styles/legend/SAMPLES_3.png" /> SAMPLES'
            });
var format_callouts_4 = new ol.format.GeoJSON();
var features_callouts_4 = format_callouts_4.readFeatures(json_callouts_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_callouts_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_callouts_4.addFeatures(features_callouts_4);
var lyr_callouts_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_callouts_4, 
                style: style_callouts_4,
                popuplayertitle: "callouts",
                interactive: true,
                title: '<img src="styles/legend/callouts_4.png" /> callouts'
            });
var format_recreational_5 = new ol.format.GeoJSON();
var features_recreational_5 = format_recreational_5.readFeatures(json_recreational_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_recreational_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_recreational_5.addFeatures(features_recreational_5);
var lyr_recreational_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_recreational_5, 
                style: style_recreational_5,
                popuplayertitle: "recreational",
                interactive: true,
    title: 'recreational<br />\
    <img src="styles/legend/recreational_5_0.png" /> Recreational_Activity<br />'
        });
var format_kissing_6 = new ol.format.GeoJSON();
var features_kissing_6 = format_kissing_6.readFeatures(json_kissing_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kissing_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kissing_6.addFeatures(features_kissing_6);
var lyr_kissing_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kissing_6, 
                style: style_kissing_6,
                popuplayertitle: "kissing",
                interactive: true,
    title: 'kissing<br />\
    <img src="styles/legend/kissing_6_0.png" /> Kissing<br />'
        });
var format_hugging_7 = new ol.format.GeoJSON();
var features_hugging_7 = format_hugging_7.readFeatures(json_hugging_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hugging_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hugging_7.addFeatures(features_hugging_7);
var lyr_hugging_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hugging_7, 
                style: style_hugging_7,
                popuplayertitle: "hugging",
                interactive: true,
    title: 'hugging<br />\
    <img src="styles/legend/hugging_7_0.png" /> Hugging<br />'
        });
var format_holding_hands_8 = new ol.format.GeoJSON();
var features_holding_hands_8 = format_holding_hands_8.readFeatures(json_holding_hands_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_holding_hands_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_holding_hands_8.addFeatures(features_holding_hands_8);
var lyr_holding_hands_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_holding_hands_8, 
                style: style_holding_hands_8,
                popuplayertitle: "holding_hands",
                interactive: true,
    title: 'holding_hands<br />\
    <img src="styles/legend/holding_hands_8_0.png" /> Holding hands<br />'
        });
var format_eating_couples_9 = new ol.format.GeoJSON();
var features_eating_couples_9 = format_eating_couples_9.readFeatures(json_eating_couples_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eating_couples_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eating_couples_9.addFeatures(features_eating_couples_9);
var lyr_eating_couples_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eating_couples_9, 
                style: style_eating_couples_9,
                popuplayertitle: "eating_couples",
                interactive: true,
    title: 'eating_couples<br />\
    <img src="styles/legend/eating_couples_9_0.png" /> Eating food<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_CartoLight_1.setVisible(true);lyr_CartoDark_2.setVisible(true);lyr_SAMPLES_3.setVisible(true);lyr_callouts_4.setVisible(true);lyr_recreational_5.setVisible(true);lyr_kissing_6.setVisible(true);lyr_hugging_7.setVisible(true);lyr_holding_hands_8.setVisible(true);lyr_eating_couples_9.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_CartoLight_1,lyr_CartoDark_2,lyr_SAMPLES_3,lyr_callouts_4,lyr_recreational_5,lyr_kissing_6,lyr_hugging_7,lyr_holding_hands_8,lyr_eating_couples_9];
lyr_SAMPLES_3.set('fieldAliases', {'SAMPLE NO.': 'SAMPLE NO.', 'activity': 'activity', 'illus': 'illus', 'drawing': 'drawing', 'describe': 'describe', 'click': 'click', });
lyr_callouts_4.set('fieldAliases', {'text': 'text', });
lyr_recreational_5.set('fieldAliases', {'activity': 'activity', 'tree_set': 'tree_set', 'pavement': 'pavement', 'boat': 'boat', 'lighting': 'lighting', 'seating': 'seating', 'play_activ': 'play_activ', 'eateries': 'eateries', 'ghoda_gadi': 'ghoda_gadi', 'traffic': 'traffic', 'plan': 'plan', 'setting': 'setting', 'status': 'status', });
lyr_kissing_6.set('fieldAliases', {'activity': 'activity', 'tree_set': 'tree_set', 'pavement': 'pavement', 'boat': 'boat', 'lighting': 'lighting', 'seating': 'seating', 'play_activ': 'play_activ', 'eateries': 'eateries', 'ghoda_gadi': 'ghoda_gadi', 'traffic': 'traffic', 'plan': 'plan', 'setting': 'setting', 'status': 'status', });
lyr_hugging_7.set('fieldAliases', {'activity': 'activity', 'tree_set': 'tree_set', 'pavement': 'pavement', 'boat': 'boat', 'lighting': 'lighting', 'seating': 'seating', 'play_activ': 'play_activ', 'eateries': 'eateries', 'ghoda_gadi': 'ghoda_gadi', 'traffic': 'traffic', 'plan': 'plan', 'setting': 'setting', 'status': 'status', });
lyr_holding_hands_8.set('fieldAliases', {'activity': 'activity', 'tree_set': 'tree_set', 'pavement': 'pavement', 'boat': 'boat', 'lighting': 'lighting', 'seating': 'seating', 'play_activ': 'play_activ', 'eateries': 'eateries', 'ghoda_gadi': 'ghoda_gadi', 'traffic': 'traffic', 'plan': 'plan', 'setting': 'setting', 'status': 'status', });
lyr_eating_couples_9.set('fieldAliases', {'activity': 'activity', 'tree_set': 'tree_set', 'pavement': 'pavement', 'boat': 'boat', 'lighting': 'lighting', 'seating': 'seating', 'play_activ': 'play_activ', 'eateries': 'eateries', 'ghoda_gadi': 'ghoda_gadi', 'traffic': 'traffic', 'plan': 'plan', 'setting': 'setting', 'status': 'status', });
lyr_SAMPLES_3.set('fieldImages', {'SAMPLE NO.': 'TextEdit', 'activity': 'TextEdit', 'illus': 'ExternalResource', 'drawing': 'ExternalResource', 'describe': 'TextEdit', 'click': 'TextEdit', });
lyr_callouts_4.set('fieldImages', {'text': 'TextEdit', });
lyr_recreational_5.set('fieldImages', {'activity': 'TextEdit', 'tree_set': 'CheckBox', 'pavement': 'CheckBox', 'boat': 'CheckBox', 'lighting': 'CheckBox', 'seating': 'CheckBox', 'play_activ': 'CheckBox', 'eateries': 'CheckBox', 'ghoda_gadi': 'CheckBox', 'traffic': 'CheckBox', 'plan': 'ExternalResource', 'setting': 'ExternalResource', 'status': 'TextEdit', });
lyr_kissing_6.set('fieldImages', {'activity': 'TextEdit', 'tree_set': 'CheckBox', 'pavement': 'CheckBox', 'boat': 'CheckBox', 'lighting': 'CheckBox', 'seating': 'CheckBox', 'play_activ': 'CheckBox', 'eateries': 'CheckBox', 'ghoda_gadi': 'CheckBox', 'traffic': 'CheckBox', 'plan': 'ExternalResource', 'setting': 'ExternalResource', 'status': 'TextEdit', });
lyr_hugging_7.set('fieldImages', {'activity': 'TextEdit', 'tree_set': 'CheckBox', 'pavement': 'CheckBox', 'boat': 'CheckBox', 'lighting': 'CheckBox', 'seating': 'CheckBox', 'play_activ': 'CheckBox', 'eateries': 'CheckBox', 'ghoda_gadi': 'CheckBox', 'traffic': 'CheckBox', 'plan': 'ExternalResource', 'setting': 'ExternalResource', 'status': 'TextEdit', });
lyr_holding_hands_8.set('fieldImages', {'activity': 'TextEdit', 'tree_set': 'CheckBox', 'pavement': 'CheckBox', 'boat': 'CheckBox', 'lighting': 'CheckBox', 'seating': 'CheckBox', 'play_activ': 'CheckBox', 'eateries': 'CheckBox', 'ghoda_gadi': 'CheckBox', 'traffic': 'CheckBox', 'plan': 'ExternalResource', 'setting': 'ExternalResource', 'status': 'TextEdit', });
lyr_eating_couples_9.set('fieldImages', {'activity': 'TextEdit', 'tree_set': 'CheckBox', 'pavement': 'CheckBox', 'boat': 'CheckBox', 'lighting': 'CheckBox', 'seating': 'CheckBox', 'play_activ': 'CheckBox', 'eateries': 'CheckBox', 'ghoda_gadi': 'CheckBox', 'traffic': 'CheckBox', 'plan': 'ExternalResource', 'setting': 'ExternalResource', 'status': 'TextEdit', });
lyr_SAMPLES_3.set('fieldLabels', {'SAMPLE NO.': 'header label - always visible', 'activity': 'header label - always visible', 'illus': 'inline label - visible with data', 'drawing': 'inline label - visible with data', 'describe': 'inline label - visible with data', 'click': 'hidden field', });
lyr_callouts_4.set('fieldLabels', {'text': 'hidden field', });
lyr_recreational_5.set('fieldLabels', {'activity': 'header label - always visible', 'tree_set': 'inline label - visible with data', 'pavement': 'inline label - visible with data', 'boat': 'inline label - visible with data', 'lighting': 'inline label - visible with data', 'seating': 'inline label - visible with data', 'play_activ': 'inline label - visible with data', 'eateries': 'inline label - visible with data', 'ghoda_gadi': 'inline label - visible with data', 'traffic': 'inline label - visible with data', 'plan': 'inline label - visible with data', 'setting': 'inline label - visible with data', 'status': 'inline label - visible with data', });
lyr_kissing_6.set('fieldLabels', {'activity': 'header label - always visible', 'tree_set': 'inline label - visible with data', 'pavement': 'inline label - visible with data', 'boat': 'inline label - visible with data', 'lighting': 'inline label - visible with data', 'seating': 'inline label - visible with data', 'play_activ': 'inline label - visible with data', 'eateries': 'inline label - visible with data', 'ghoda_gadi': 'inline label - visible with data', 'traffic': 'inline label - visible with data', 'plan': 'inline label - visible with data', 'setting': 'inline label - visible with data', 'status': 'inline label - visible with data', });
lyr_hugging_7.set('fieldLabels', {'activity': 'header label - always visible', 'tree_set': 'inline label - visible with data', 'pavement': 'inline label - visible with data', 'boat': 'inline label - visible with data', 'lighting': 'inline label - visible with data', 'seating': 'inline label - visible with data', 'play_activ': 'inline label - visible with data', 'eateries': 'inline label - visible with data', 'ghoda_gadi': 'inline label - visible with data', 'traffic': 'inline label - visible with data', 'plan': 'inline label - visible with data', 'setting': 'inline label - visible with data', 'status': 'inline label - visible with data', });
lyr_holding_hands_8.set('fieldLabels', {'activity': 'header label - always visible', 'tree_set': 'inline label - visible with data', 'pavement': 'inline label - visible with data', 'boat': 'inline label - visible with data', 'lighting': 'inline label - visible with data', 'seating': 'inline label - visible with data', 'play_activ': 'inline label - visible with data', 'eateries': 'inline label - visible with data', 'ghoda_gadi': 'inline label - visible with data', 'traffic': 'inline label - visible with data', 'plan': 'inline label - visible with data', 'setting': 'inline label - visible with data', 'status': 'inline label - visible with data', });
lyr_eating_couples_9.set('fieldLabels', {'activity': 'header label - always visible', 'tree_set': 'inline label - visible with data', 'pavement': 'inline label - visible with data', 'boat': 'inline label - visible with data', 'lighting': 'inline label - visible with data', 'seating': 'inline label - visible with data', 'play_activ': 'inline label - always visible', 'eateries': 'inline label - visible with data', 'ghoda_gadi': 'inline label - visible with data', 'traffic': 'inline label - visible with data', 'plan': 'inline label - visible with data', 'setting': 'inline label - visible with data', 'status': 'inline label - visible with data', });
lyr_eating_couples_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});