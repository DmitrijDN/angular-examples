(function() {
	'use strict';

	angular
		.module('directivesExample', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
				.when('/main', {
					templateUrl: './main.html',
					controller: 'MainController'
				})
				.when('/notmain', {
					templateUrl: './notmain.html',
					controller: 'NotMainController'
				})
				.when('/validation', {
					templateUrl: './validation/form.html',
					controller: 'ValidationController'
				})
				.otherwise({
					redirectTo: '/main'
				});
		}]);
})()