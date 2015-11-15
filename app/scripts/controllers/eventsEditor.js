'use strict';

/**
 * @ngdoc function
 * @name ofProsePoetryApp.controller:EventsEditorCtrl
 * @description
 * # EventsEditorCtrl
 * Controller of the ofProsePoetryApp
 */
angular.module('ofProsePoetryApp')
    .controller('EventsEditorCtrl', function(eventsURL, $http, $scope) {
        $scope.events = {};

        $scope.eventType = "Active";
        $scope.active = true;

        $scope.saveButtonActive = false;

        $http.get(eventsURL).success(function(response) {
            $scope.events = response;
        });

        $scope.eventTypeToggle = function() {
        	$scope.saveButtonActive = true;

            if ($scope.eventType === "Active") {
                $scope.eventType = "Inactive";
                $scope.active = false;
            } else {
                $scope.eventType = "Active";
                $scope.active = true;
            }
        }
    });
