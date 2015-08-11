'use strict';

/**
 * @ngdoc function
 * @name madhuriMaitraApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the madhuriMaitraApp
 */
angular.module('madhuriMaitraApp')
    .controller('haikuCtrl', function($scope,$http,$rootScope) {

        $scope.haiku = {};

        $scope.amazonLink = "http://www.amazon.in/haiku-other-micropoetry-madhuri-maitra-ebook/dp/B00IJUPH88/ref=sr_1_1?ie=UTF8&qid=1405259110&sr=8-1&keywords=haiku+and+other+micropoetry";

        function getRandomInt(min, max) {
            var excerptVal = Math.floor(Math.random() * (max - min + 1)) + min;
            return excerptVal;
        }

        var url = '../properties/haiku.json';
        console.log("URL: ", url);
        $http.get(url).then(function(response) {
            var index = getRandomInt(1, response.data.length) - 1;

            $scope.haiku.excerptHeading = response.data[index].heading;
            $scope.haiku.excerptLine1 = response.data[index].excerptLine1;
            $scope.haiku.excerptLine2 = response.data[index].excerptLine2;
            $scope.haiku.excerptLine3 = response.data[index].excerptLine3;
            $scope.haiku.excerptLine4 = response.data[index].excerptLine4;
        });

        $rootScope.haikuExcerpt = $scope.haiku;
    });
