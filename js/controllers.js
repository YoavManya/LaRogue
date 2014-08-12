/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var laRogueControllers = angular.module('laRogueControllers', []);

laRogueControllers.controller('HomeCtrl',  ['$scope', function($scope) {
	$scope.hello = "hello world";
}]);