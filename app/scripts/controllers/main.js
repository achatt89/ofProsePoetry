'use strict';

/**
 * @ngdoc function
 * @name madhuriMaitraApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the madhuriMaitraApp
 */
angular.module('madhuriMaitraApp')
    .controller('mainCtrl', function(commonCalls, $scope) {

        $scope.readuvenate = {};
        $scope.haiku = {};
        $scope.equinox;
        $scope.eventsDetails = {};

        $scope.readuvenate = commonCalls.readuvenate();

        $scope.haiku = commonCalls.haiku();

        $scope.equinox = commonCalls.equinox();

        $scope.eventsDetails = commonCalls.latestEvent();
    }); 
