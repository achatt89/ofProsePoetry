'use strict';

/**
 * @ngdoc function
 * @name madhuriMaitraApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the madhuriMaitraApp
 */
angular.module('madhuriMaitraApp')
    .controller('otherPublicationsCtrl', function($scope,$http) {
        
        $scope.links = {};

        var url = '../properties/publication.json';

        $http.get(url).then(function(response) {
            $scope.links = response.data;
        });
    });
