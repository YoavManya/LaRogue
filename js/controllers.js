/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var laRogueControllers = angular.module('laRogueControllers', []);

laRogueControllers.controller('HomeCtrl',  ['$scope', '$log', function($scope, $log) {

	// $scope.map = {center: {latitude: -77.005263,longitude: -12.091454}, zoom: 18}
 //    $scope.marker = {
 //        id: 0,
 //        coords: {
 //            latitude: -77.005263,
 //            longitude: -12.091454
 //        }
 //    }

 	var delay = 0;
    $(".circle-product").each(function() {
        TweenLite.to($(this), 2, {delay: delay, autoAlpha: 1, ease: Power4.easeInOut});  
        delay += 1; 
    });

	$scope.map = {center: {latitude: -77.005263, longitude: -12.091454 }, zoom: 18 }
	$scope.options = {scrollwheel: false};
	$scope.marker = {
	    id:0,
	    coords: {
	        latitude: -77.005263,
	        longitude: -12.091454
	    },
	    icon: 'images/map-marker.png',
	    options: { draggable: true },
	    events: {
	        dragend: function (marker, eventName, args) {
	            $log.log('marker dragend');
	            $log.log(marker.getPosition().lat());
	            $log.log(marker.getPosition().lng());
	        }
	    }
	}
}]);