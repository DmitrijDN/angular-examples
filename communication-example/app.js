(function() {
	'use strict';

	angular
		.module('lection3', ['ngRoute', 'lection3.services'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
				.when('/main', {
					templateUrl: './main.html',
					controller: 'MainController',
					controllerAs: 'mainCtrl'
				})
				.when('/moduleCommunication', {
					templateUrl: './moduleCommunication.html',
					controller: 'ModuleCommunicationController',
					controllerAs: 'ctrl'
				})
				.when('/controllerCommunication', {
					templateUrl: './controllerCommunication.html'
				})
				.otherwise({
					redirectTo: '/main'
				});
		}]);
})()