/* App Module */    
var laRogueApp = angular.module('larogue', [
	    'ngRoute',
      'google-maps',
	    'laRogueControllers',
      'laRogueDirectives'
	]);

laRogueApp.config(function($routeProvider, $locationProvider) {
	$routeProvider. 
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
})
