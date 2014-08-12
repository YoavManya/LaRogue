/* App Module */    
var laRogueApp = angular.module('larogue', [
	    'ngRoute',
	    'laRogueControllers'
	]);

laRogueApp.config(function($routeProvider, $locationProvider) {
	$routeProvider. 
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'ItemListCtrl'
      }).
      when('/i/:id', {
        templateUrl: 'partials/item-details.html',
        controller: 'ItemDetailCtrl'
      }).
      when('/survey', {
        templateUrl: 'partials/survey.html',
        controller: 'SurveyCtrl'
      }).
      when('/thank-you', {
        templateUrl: 'partials/thank-you.html',
        controller: 'ThankYouCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });

    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
})
