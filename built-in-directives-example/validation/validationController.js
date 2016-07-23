(function() {
    'use strict';

    angular
        .module('directivesExample')
        .controller('ValidationController', ValidationController);

    ValidationController.$inject = [
        '$scope'
    ];

    function ValidationController($scope) {
        $scope.submitAction = function(data, form) {
            console.log(form);
            if (form.$valid) {
                alertify.success('Form is valid');
            } else {
            	alertify.error('Form is incorrect');
            	form.email.$setTouched();
            	form.count.$setTouched();
            	form.name.$setTouched();
            }
        };
    }
})();