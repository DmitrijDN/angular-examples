(function() {
	'use strict';

	var module = angular.module('studentsRate');

	function listController($http) {
		var vm = this;

		vm.$onInit = function() {
			getStudents().then(function(students) {
				vm.students = students;

			});
		}

		vm.goTo = function(id) {
			vm.$router.navigate(['Details', {
				id: id
			}], '');
		};

		function getStudents() {
			return $http.get('/students.json').then(function(response) {
				return response.data;
			});
		}
	}

	module.component('list', {
		templateUrl: './list.component.html',
		controller: listController,
		controllerAs: 'list',
		$routeConfig: [{
			path: '/list',
			component: 'list'
		}],
		bindings: {
			$router: '<'
		}
	});
})();