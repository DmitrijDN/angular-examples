(function() {
	'use strict';

	angular
		.module('lection3')
		.factory('myService', myService);

	myService.$inject = [

	];

	function myService() {
		var service = {
				listenEvents: listenEvents,
				raiseEvent: raiseEvent
			},
			eventNames = [];

		(function() {})();

		function raiseEvent($scope, eventName) {
			$scope.$broadcast(eventName + 'Broadcast', eventName + 'Broadcast');
			$scope.$emit(eventName + 'Emit', eventName + 'Emit');

			if (eventName.indexOf(eventName) === -1) {
				eventNames.push(eventName);
			}
		}

		function listenEvents($scope) {
			/* BROADCAST LISTENER*/
			$scope.$on('level1_1Broadcast', function(event, data) {
				console.log(data);
			});

			$scope.$on('level1_2Broadcast', function(event, data) {
				console.log(data);
			});

			$scope.$on('level2_1Broadcast', function(event, data) {
				console.log(data);
			});

			$scope.$on('level2_2Broadcast', function(event, data) {
				console.log(data);
			});

			$scope.$on('MainBroadcast', function(event, data) {
				console.log(data);
			});


			/*EMIT LISTENER*/
			$scope.$on('level1_1Emit', function(event, data) {
				console.log(data);
			});

			$scope.$on('level1_2Emit', function(event, data) {
				console.log(data);
			});

			$scope.$on('level2_1Emit', function(event, data) {
				console.log(data);
			});

			$scope.$on('level2_2Emit', function(event, data) {
				console.log(data);
			});

			$scope.$on('MainEmit', function(event, data) {
				console.log(data);
			});
		}

		return service;
	}
})();