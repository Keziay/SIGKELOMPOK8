var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_2, 
                style: style_building_2,
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);lyr_building_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1,lyr_building_2];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'wheelchair': 'wheelchair', 'roof:orientation': 'roof:orientation', 'roof:material': 'roof:material', 'roof:colour': 'roof:colour', 'operator': 'operator', 'opening_hours': 'opening_hours', 'name': 'name', 'club': 'club', 'amenity': 'amenity', });
lyr_building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'parking': 'parking', 'capacity': 'capacity', 'government': 'government', 'operator:wikipedia': 'operator:wikipedia', 'operator:wikidata': 'operator:wikidata', 'operator': 'operator', 'stars': 'stars', 'rooms': 'rooms', 'phone': 'phone', 'fax': 'fax', 'email': 'email', 'self_service': 'self_service', 'beauty': 'beauty', 'building:walls': 'building:walls', 'alt_name': 'alt_name', 'takeaway': 'takeaway', 'opening_hours': 'opening_hours', 'drive_through': 'drive_through', 'cuisine': 'cuisine', 'brand:wikipedia': 'brand:wikipedia', 'healthcare': 'healthcare', 'dispensing': 'dispensing', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'branch': 'branch', 'kitchen:facilities': 'kitchen:facilities', 'atm': 'atm', 'office': 'office', 'ground_floor:height': 'ground_floor:height', 'evacuation_center': 'evacuation_center', 'name:es': 'name:es', 'height': 'height', 'shop': 'shop', 'school:type_idn': 'school:type_idn', 'addr:housenumber': 'addr:housenumber', 'wikipedia': 'wikipedia', 'website': 'website', 'addr:street': 'addr:street', 'addr:housename': 'addr:housename', 'religion': 'religion', 'amenity': 'amenity', 'addr:postcode': 'addr:postcode', 'admin_level': 'admin_level', 'operator:type': 'operator:type', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', 'type': 'type', 'tourism': 'tourism', 'name': 'name', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'wheelchair': '', 'roof:orientation': '', 'roof:material': '', 'roof:colour': '', 'operator': '', 'opening_hours': '', 'name': '', 'club': '', 'amenity': '', });
lyr_building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'parking': '', 'capacity': '', 'government': '', 'operator:wikipedia': '', 'operator:wikidata': '', 'operator': '', 'stars': '', 'rooms': '', 'phone': '', 'fax': '', 'email': '', 'self_service': '', 'beauty': '', 'building:walls': '', 'alt_name': '', 'takeaway': '', 'opening_hours': '', 'drive_through': '', 'cuisine': '', 'brand:wikipedia': '', 'healthcare': '', 'dispensing': '', 'brand:wikidata': '', 'brand': '', 'branch': '', 'kitchen:facilities': '', 'atm': '', 'office': '', 'ground_floor:height': '', 'evacuation_center': '', 'name:es': '', 'height': '', 'shop': '', 'school:type_idn': '', 'addr:housenumber': '', 'wikipedia': '', 'website': '', 'addr:street': '', 'addr:housename': '', 'religion': '', 'amenity': '', 'addr:postcode': '', 'admin_level': '', 'operator:type': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', 'type': '', 'tourism': '', 'name': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'wheelchair': 'no label', 'roof:orientation': 'no label', 'roof:material': 'no label', 'roof:colour': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'name': 'no label', 'club': 'no label', 'amenity': 'no label', });
lyr_building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'parking': 'no label', 'capacity': 'no label', 'government': 'no label', 'operator:wikipedia': 'no label', 'operator:wikidata': 'no label', 'operator': 'no label', 'stars': 'no label', 'rooms': 'no label', 'phone': 'no label', 'fax': 'no label', 'email': 'no label', 'self_service': 'no label', 'beauty': 'no label', 'building:walls': 'no label', 'alt_name': 'no label', 'takeaway': 'no label', 'opening_hours': 'no label', 'drive_through': 'no label', 'cuisine': 'no label', 'brand:wikipedia': 'no label', 'healthcare': 'no label', 'dispensing': 'no label', 'brand:wikidata': 'no label', 'brand': 'no label', 'branch': 'no label', 'kitchen:facilities': 'no label', 'atm': 'no label', 'office': 'no label', 'ground_floor:height': 'no label', 'evacuation_center': 'no label', 'name:es': 'no label', 'height': 'no label', 'shop': 'no label', 'school:type_idn': 'no label', 'addr:housenumber': 'no label', 'wikipedia': 'no label', 'website': 'no label', 'addr:street': 'no label', 'addr:housename': 'no label', 'religion': 'no label', 'amenity': 'no label', 'addr:postcode': 'no label', 'admin_level': 'no label', 'operator:type': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', 'type': 'no label', 'tourism': 'no label', 'name': 'no label', });
lyr_building_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});