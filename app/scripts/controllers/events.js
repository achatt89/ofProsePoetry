'use strict';

/**
 * @ngdoc function
 * @name madhuriMaitraApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the madhuriMaitraApp
 */
angular.module('madhuriMaitraApp')
    .controller('eventsCtrl', function($scope, $http) {
        
        $scope.events = {};
    
        var url = '../properties/events.json';

        $http.get(url).then(function(response) {
            $scope.events=response.data;
        });
    });
