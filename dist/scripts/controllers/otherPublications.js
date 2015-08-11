'use strict';

/**
 * @ngdoc function
 * @name madhuriMaitraApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the madhuriMaitraApp
 */
angular.module('madhuriMaitraApp')
    .controller('otherPublicationsCtrl', function(otherPublicationsURL, $scope, $http) {

        $scope.links = {};

        $http.get(otherPublicationsURL).success(function(response) {
        	$scope.links = response;
        });

    });
