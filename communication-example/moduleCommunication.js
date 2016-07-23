(function() {
	'use strict';

	angular
		.module('lection3')
		.controller('ModuleCommunicationController', ModuleCommunicationController);

	ModuleCommunicationController.$inject = [
		'someService'
	];

	function ModuleCommunicationController(someService) {
		var vm = this;

		vm.logMsg = logMsg;

		function logMsg(msg) {
			someService.writeMessage(msg);
		}
	}
})();



