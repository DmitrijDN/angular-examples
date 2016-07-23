angular
	.module('lection3.services', [])
	.factory('someService', someService);

someService.$inject = [
	'$log'
];

function someService($log) {
	var service = {
		writeMessage: writeMessage
	};

	function writeMessage(msg) {
		$log.info(msg);
	}

	return service;
}