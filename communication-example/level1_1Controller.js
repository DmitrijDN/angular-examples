(function() {
	'use strict';

	angular
		.module('lection3')
		.controller('Level1_1Controller', Level1_1Controller);

	Level1_1Controller.$inject = [
		'$log',
		'$scope',
		'myService',
		'some'
	];

	function Level1_1Controller($log, $scope, myService, some) {
		var vm = this,
			name = 'Level1_1Controller',
			eventName = 'lvl1_1';

		vm.broadcast = broadcast;
		vm.emit = emit;

		console.log('LVL1CTRL: ', some);

		$scope.$on('mainBroadcast', function(event, data) {
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