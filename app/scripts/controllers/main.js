'use strict';

/**
 * @ngdoc function
 * @name ofProsePoetryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ofProsePoetryApp
 */
angular.module('ofProsePoetryApp')
  .controller('MainCtrl', function(commonCalls, $scope) {

        $scope.readuvenate = {};
        $scope.haiku = {};
        $scope.equinox;
        $scope.eventsDetails = {};

        $scope.readuvenate = commonCalls.readuvenate();

        $scope.haiku = commonCalls.haiku();

        $scope.equinox = commonCalls.equinox();

        $scope.eventsDetails = commonCalls.latestEvent();
  });
