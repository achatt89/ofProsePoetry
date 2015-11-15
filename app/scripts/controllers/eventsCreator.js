'use strict';

/**
 * @ngdoc function
 * @name ofProsePoetryApp.controller:EventsCreatorCtrl
 * @description
 * # EventsCreatorCtrl
 * Controller of the ofProsePoetryApp
 */
angular.module('ofProsePoetryApp')
    .controller('EventsCreatorCtrl', function(eventsURL, monthsURL, yearURL, $http, $scope, $firebaseArray) {
        $scope.events = {};

        $http.get(monthsURL).success(function(response) {
            $scope.monthsName = response;
        });

        $http.get(yearURL).success(function(response) {
            $scope.years = response;
        });

        var firebaseURL = new Firebase(eventsURL);
        $scope.messages = $firebaseArray(firebaseURL);

        /*$scope.submit = function() {
            if (($scope.wysiwygTitle !== null) || ($scope.wysiwygBody !== null) || ($scope.articleExcerpt !== null)) {
                $scope.messages.$add({
                    title: $scope.wysiwygTitle,
                    excerpt: $scope.articleExcerpt,
                    body: $scope.wysiwygBody
                });

                $("#confirmModal").modal();
                $scope.value = "";

            } else {
                $("#errorModal").modal();
            }
        };*/

        $scope.eventSubmit = function() {
            if ($scope.eventVenue === '' || $scope.eventVenue === undefined) {
                $scope.eventVenue=" ";
            }
            
            $scope.messages.$add({
                eventTitle: $scope.eventTitle,
                eventVenue: $scope.eventVenue,
                eventDate: $scope.eventMonth + ' ' + $scope.eventYear,
                eventType: $scope.eventType
            });
        }
    });
