(function() {
    'use strict';

    angular.module('lection3').constant('some', 'some Value');

    angular
        .module('lection3')
        .controller('MainController', MainController);

    MainController.$inject = [
        '$log',
        '$rootScope',
        '$scope',
        'myService',
        'some'
    ];

    function MainController($log, $rootScope, $scope, myService, some) {
        var vm = this,
            name = 'MainController',
            eventName = 'main';

        vm.broadcast = broadcast;
        vm.emit = emit;

        console.log(some);
        some = 'another';
        console.log(some);

        $scope.$on('lvl1_1Emit', function(event, data) {
            $log.log(name + ': ' + data);
        });

        $scope.$on('lvl1_2Emit', function(event, data) {
            $log.log(name + ': ' + data);
        });

        $scope.$on('lvl2_1Emit', function(event, data) {
            $log.log(name + ': ' + data);
        });

        $scope.$on('lvl2_2Emit', function(event, data) {
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