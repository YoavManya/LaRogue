/* App Module */    
var laRogueApp = angular.module('larogue', [
	    'ngRoute',
	    'laRogueControllers'
	]);

laRogueApp.config(function($routeProvider, $locationProvider) {
	$routeProvider. 
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/hello', {
        templateUrl: 'partials/hello.html',
        controller: 'HelloCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
})
