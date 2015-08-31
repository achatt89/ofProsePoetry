'use strict';

/**
 * @ngdoc function
 * @name ofProsePoetryApp.controller:ReaduvenateCtrl
 * @description
 * # ReaduvenateCtrl
 * Controller of the ofProsePoetryApp
 */
angular.module('ofProsePoetryApp')
    .controller('ReaduvenateCtrl', function($scope, $firebaseArray) {

        $scope.events = {};
        $scope.articleIndex;

        var firebaseURL = new Firebase("https://of-prose-and-poetry.firebaseio.com/readuvenate");
        var ref = firebaseURL.endAt().limit(1);
        $scope.readuvenate = $firebaseArray(firebaseURL);
        $scope.latestPost = $firebaseArray(ref);

        $scope.archiveIndex = function(index) {
            $scope.articleIndex = index;
        };
    });

