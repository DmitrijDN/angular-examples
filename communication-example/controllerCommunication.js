(function() {
	'use strict';

	angular
		.module('lection3')
		.factory('sharedService', sharedService);

	function sharedService() {
		var service = {
			variable: 'Init variable state'
		};

		return service;
	}
})();

(function() {
	'use strict';

	angular
		.module('lection3')
		.controller('Controller1', Controller1);

	Controller1.$inject = ['$scope', 'sharedService'];

	function Controller1($scope, sharedService) {
		$scope.variable = sharedService.variable;
		sharedService.variable = 'Changed in Controller 1';
	}
})();

(function() {
	'use strict';

	angular
		.module('lection3')
		.controller('Controller2', Controller2);

	Controller2.$inject = ['$scope', 'sharedService'];

	function Controller2($scope, sharedService) {
		$scope.variable = sharedService.variable;
	}
})();



