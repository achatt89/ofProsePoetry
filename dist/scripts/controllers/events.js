'use strict';

/**
 * @ngdoc function
 * @name madhuriMaitraApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the madhuriMaitraApp
 */
angular.module('madhuriMaitraApp')
    .controller('eventsCtrl', function(eventsURL, $http, $scope) {

        $scope.events = {};
        $scope.quantity = 2;

        $http.get(eventsURL).success(function(response) {
            $scope.events = response;
        });
    });
