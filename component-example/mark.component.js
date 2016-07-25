(function() {
	'use strict';

	var module = angular.module('studentsRate');

	function markController() {
		var vm = this;

		vm.$onInit = function() {
			vm.markArr = new Array(vm.value);
		};

		vm.$onChanges = function() {
			vm.markArr = new Array(vm.value);
		};
	}

	module.component('studentMark', {
		templateUrl: './mark.component.html',
		controller: markController,
		controllerAs: 'mark',
		transclude: true,
		bindings: {
			value: '<'
		},
	});
})();