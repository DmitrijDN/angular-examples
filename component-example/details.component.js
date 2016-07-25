(function() {
	'use strict';

	var module = angular.module('studentsRate');

	function studentDetailsController() {
		var vm = this;

		// vm.$routerOnActivate = function(next, previous) {
		// 	console.log('\nnext: ', next);
		// 	console.log('\nprevious: ', previous);
		// 	vm.id = next.params.id;
		// }

		vm.goTo = function(route) {
			vm.$router.navigate('Details', {}, route);
		}
	}

	module.component('studentDetail', {
		templateUrl: './details.component.html',
		controller: [studentDetailsController],
		controllerAs: 'details',
		// $canActivate: function() {
		// 	return true;
		// },
		$routeConfig: [{
			path: '/subjects',
			component: 'studentSubjects',
			name: 'Subjects',
			useAsDefault: true
		}, {
			path: '/overview',
			component: 'studentOverview',
			name: 'Overview'
		}],
		bindings: {
			$router: '<'
		}
	});

	// module.component('studentSubjects', {
	// 	template: '<h2>SUBJECT</h2>'
	// });
})();