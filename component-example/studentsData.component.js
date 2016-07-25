(function() {
	'use strict';

	var module = angular.module('studentsRate');

	studentsDataController.$inject = [];

	function studentsDataController() {
		var vm = this;

		console.log(vm.$router);
	}

	module.component('studentsData', {
		templateUrl: './studentsData.component.html',
		controller: studentsDataController,
		controllerAs: 'student',
		$routeConfig: [{
			path: '/list',
			component: 'list',
			name: 'List'
		}, {
			path: '/detail/:id/...',
			component: 'studentDetail',
			name: 'Details'
		}, {
			path: '/**',
			redirectTo: ["List", ""]
		}]
	});
})();