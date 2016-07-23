(function() {
	'use strict';

	angular
		.module('lection3')
		.controller('Level1_2Controller', Level1_2Controller);

	Level1_2Controller.$inject = [
		'$log',
		'$scope',
		'myService'
	];

	function Level1_2Controller($log, $scope, myService) {
		var vm = this,
			name = 'Level1_2Controller',
			eventName = 'lvl1_2';

		vm.broadcast = broadcast;
		vm.emit = emit;


		$scope.$watch('lvlCtrl', function(newValue, oldValue) {

		});


		$scope.$on('mainBroadcast', function(event, data) {
			$log.log(name + ': ' + data);
		});

		$scope.$on('lvl1_1Broadcast', function(event, data) {
			$log.log(name + ': ' + data);
		});

		$scope.$on('lvl2_1Emit', function(event, data) {
			event.stopPropagation();
			$log.log(name + ': ' + data);
		});

		$scope.$on('lvl2_2Emit', function(event, data) {
			event.stopPropagation();
			$log.log(name + ': ' + data);
		});

		function broadcast() {
			$scope.$broadcast(eventName + 'Broadcast', eventName + 'Broadcast');
		}

		function emit() {
			$scope.$emit(eventName + 'Emit', eventName + 'Emit');
		}
	}
})();