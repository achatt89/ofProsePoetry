'use strict';

/**
 * @ngdoc function
 * @name ofProsePoetryApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the ofProsePoetryApp
 */
angular.module('ofProsePoetryApp')
    .controller('EventsCtrl', function(eventsURL, $http, $scope) {

        $scope.events = {};
        $scope.quantity = 2;

        $http.get(eventsURL).success(function(response) {
            $scope.events = response;
        });
    });
