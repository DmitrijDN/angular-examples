(function() {
	'use strict';

	angular
		.module('lection3')
		.controller('Level2_2Controller', Level2_2Controller);

	Level2_2Controller.$inject = [
		'$log',
		'$scope',
		'myService'
	];

	function Level2_2Controller($log, $scope, myService) {
		var vm  = this,
			name = 'Level2_2Controller',
			eventName = 'lvl2_2';

		vm.broadcast = broadcast;
		vm.emit = emit;

		$scope.$on('lvl1_2Broadcast', function(event, data) {
			$log.info(name + ': ' + data);
		});

		function broadcast() {
			$scope.$broadcast(eventName +  'Broadcast', eventName +  'Broadcast');
		}

		function emit() {
			$scope.$emit(eventName + 'Emit', eventName + 'Emit');
		}
	}
})();