ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4283").setExtent([93.003105, -47.375588, 165.601968, -7.609635]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LGA_1 = new ol.format.GeoJSON();
var features_LGA_1 = format_LGA_1.readFeatures(json_LGA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_LGA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LGA_1.addFeatures(features_LGA_1);
var lyr_LGA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LGA_1, 
                style: style_LGA_1,
                popuplayertitle: "LGA",
                interactive: true,
    title: 'LGA<br />\
    <img src="styles/legend/LGA_1_0.png" /> Currently Monitoring<br />\
    <img src="styles/legend/LGA_1_1.png" /> Not yet monitored<br />\
    <img src="styles/legend/LGA_1_2.png" /> To be monitored<br />'
        });
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_ESRISatelliteArcGISWorld_Imagery_0,],
                                fold: "open",
                                title: "Basemap"});

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_LGA_1.setVisible(true);
var layersList = [group_Basemap,lyr_LGA_1];
lyr_LGA_1.set('fieldAliases', {'fid': 'fid', 'LGA_NAME24': 'LGA_NAME24', 'STE_NAME21': 'STE_NAME21', 'Status': 'Status', 'GF/Infill': 'GF/Infill', });
lyr_LGA_1.set('fieldImages', {'fid': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_NAME21': 'TextEdit', 'Status': 'TextEdit', 'GF/Infill': 'Range', });
lyr_LGA_1.set('fieldLabels', {'fid': 'hidden field', 'LGA_NAME24': 'inline label - visible with data', 'STE_NAME21': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'GF/Infill': 'inline label - visible with data', });
lyr_LGA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});