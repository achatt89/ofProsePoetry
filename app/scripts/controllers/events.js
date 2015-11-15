'use strict';

/**
 * @ngdoc function
 * @name ofProsePoetryApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the ofProsePoetryApp
 */
angular.module('ofProsePoetryApp')
    .controller('EventsCtrl', function(eventsURL, $scope, $firebaseArray) {

        $scope.events = {};

        var firebaseURL = new Firebase(eventsURL);
        $scope.events = $firebaseArray(firebaseURL);

        console.log($scope.events);
    });
