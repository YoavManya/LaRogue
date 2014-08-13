/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var laRogueDirectives = angular.module("laRogueDirectives", []);

laRogueDirectives.directive('menuHeader', function() {
	return {
		restrict: "E",
		templateUrl: 'partials/menu-header.html'
	};
});