ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4283").setExtent([109.536979, -43.794014, 159.037225, -9.229929]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LGA_2 = new ol.format.GeoJSON();
var features_LGA_2 = format_LGA_2.readFeatures(json_LGA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_LGA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LGA_2.addFeatures(features_LGA_2);
var lyr_LGA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LGA_2, 
                style: style_LGA_2,
                popuplayertitle: "LGA",
                interactive: true,
    title: 'LGA<br />\
    <img src="styles/legend/LGA_2_0.png" /> Currently Monitoring<br />\
    <img src="styles/legend/LGA_2_1.png" /> Not yet monitored<br />\
    <img src="styles/legend/LGA_2_2.png" /> To be monitored<br />'
        });
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Basemap"});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_LGA_2.setVisible(true);
var layersList = [group_Basemap,lyr_LGA_2];
lyr_LGA_2.set('fieldAliases', {'fid': 'fid', 'LGA_NAME24': 'LGA_NAME24', 'STE_NAME21': 'STE_NAME21', 'Status': 'Status', });
lyr_LGA_2.set('fieldImages', {'fid': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_NAME21': 'TextEdit', 'Status': 'TextEdit', });
lyr_LGA_2.set('fieldLabels', {'fid': 'hidden field', 'LGA_NAME24': 'inline label - visible with data', 'STE_NAME21': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_LGA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});