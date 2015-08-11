'use strict';

/**
 * @ngdoc function
 * @name madhuriMaitraApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the madhuriMaitraApp
 */
angular.module('madhuriMaitraApp')
    .controller('mainCtrl', function($scope, $http, $firebaseArray) {

        $scope.readuvenate = {};

        function getRandomInt(min, max) {
            var excerptVal = Math.floor(Math.random() * (max - min + 1)) + min;
            return excerptVal;
        }

        var haikuURL = '../properties/haiku.json';
        var equinoxURL = '../properties/equinox.json';
        var eventsURL = '../properties/events.json';

        $scope.haiku = {};
        $scope.equinox = {};

        var firebaseURL = new Firebase("https://of-prose-and-poetry.firebaseio.com/readuvenate");
        var ref = firebaseURL.endAt().limit(1);
        $scope.readuvenate = $firebaseArray(ref);

        $http.get(haikuURL).then(function(response) {
            var index = getRandomInt(1, response.data.length) - 1;

            $scope.haiku.excerptHeading = response.data[index].heading;
            $scope.haiku.excerptLine1 = response.data[index].excerptLine1;
            $scope.haiku.excerptLine2 = response.data[index].excerptLine2;
            $scope.haiku.excerptLine3 = response.data[index].excerptLine3;
            $scope.haiku.excerptLine4 = response.data[index].excerptLine4;
        });

        $http.get(equinoxURL).then(function(response) {
            var index = getRandomInt(1, response.data.length) - 1;
            $scope.equinox.excerpt = response.data[index].excerpt;
        });

        $http.get(eventsURL).then(function(response) {
            var index = response.data.length - 1;
            $scope.latestEventDetails = response.data[index].event;
            $scope.latestEventDate = response.data[index].date;
        });
    });
