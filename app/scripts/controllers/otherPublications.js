'use strict';

/**
 * @ngdoc function
 * @name ofProsePoetryApp.controller:OtherpublicationsCtrl
 * @description
 * # OtherpublicationsCtrl
 * Controller of the ofProsePoetryApp
 */
angular.module('ofProsePoetryApp')
    .controller('OtherpublicationsCtrl', function(otherPublicationsURL, $scope, $http) {
        $scope.links = {};

        $http.get(otherPublicationsURL).success(function(response) {
            $scope.links = response;
        });
    });
