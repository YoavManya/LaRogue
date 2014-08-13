// (function() {	
//     $(document).ready(function() {
//         var delay = 0;
//         $(".circle-product").each(function() {
//           TweenLite.to($(this), 2, {delay: delay, autoAlpha: 1, ease: Power4.easeInOut});  
//           delay += 1; 
//         });
       
//         function initialize() {
//             var map_canvas = document.getElementById('map_canvas');
//             var myLatlng = new google.maps.LatLng(-12.091454, -77.005263);
//             var map_options = {
//                 center: new google.maps.LatLng(-12.091454, -77.005263),
//                 zoom: 18,
//                 mapTypeId: google.maps.MapTypeId.ROADMAP,
//                 styles: [{
//                         "featureType": "landscape",
//                         "elementType": "geometry.fill",
//                         "stylers": [
//                             {"color": "#dddddd"},
//                             {"visibility": "on"}
//                         ]
//                     }, {
//                         "featureType": "road.local",
//                         "elementType": "geometry",
//                         "stylers": [
//                             {"color": "#cecece"}
//                         ]
//                     }, {
//                         "featureType": "poi",
//                         "stylers": [
//                             {"color": "#dddddd"}
//                         ]
//                     }, {
//                         "featureType": "road.arterial",
//                         "elementType": "geometry",
//                         "stylers": [
//                             {"color": "#cecece"}
//                         ]
//                     }, {
//                         "featureType": "road.highway",
//                         "elementType": "geometry.fill",
//                         "stylers": [
//                             {"color": "#ddccdc"}
//                         ]
//                     }, {
//                         "featureType": "road.arterial",
//                         "elementType": "geometry.fill",
//                         "stylers": [
//                             {"color": "#ddccdc"}
//                         ]
//                     }, {
//                     }
//                 ]
//             };
//             var map = new google.maps.Map(map_canvas, map_options);
            
//             var marker = new google.maps.Marker({
//                   position: map_options.center,
//                   map: map,
//                   icon: 'images/map-marker.png',
//                   animation: google.maps.Animation.DROP
//             });
//             google.maps.event.addListener(marker, 'click', toggleBounce);
               
//         }
//         function toggleBounce() {
//             if (marker.getAnimation() != null) {
//               marker.setAnimation(null);
//             } else {
//               marker.setAnimation(google.maps.Animation.BOUNCE);
//             }
//         }
//         google.maps.event.addDomListener(window, 'load', initialize);
//     });
// })();
