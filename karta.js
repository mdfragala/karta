var Karta = function($options, $callback) {

   var ___ = {},
   clusters, o;

   var options = {
      canvas = document.getElementById('map-canvas');
      infoWindows: true,
      markerClick: 'content',
      markerHover: 'title',
      MarkerClusterer: {},
      GoogleMaps: {}
   };

   ___.listen = function($options) {
      google.maps.event.addListener($options.object, $options.event, function(e){
         $options.callback.call(Module, e, $options.object);
      });
   }

   ___.pushMarker = function($marker) {
      markers.__add__($marker);
      clusters.addMarker($marker);
      Module.markers = markers.collection;
   };

   ___.registerMarker = function($markerOptions) {
      if ($markerOptions.map !== Module.map) {
         $options.map = Module.map;
      }
      if ($markerOptions)
   }

   google.maps.event.addDomListener(window, 'load', initialize);
   return new Module();

};
