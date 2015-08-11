'use strict';

/**
 * @ngdoc function
 * @name madhuriMaitraApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the madhuriMaitraApp
 */
angular.module('madhuriMaitraApp')
    .controller('equinoxCtrl', function($scope,$http) {

        $scope.equinox = {};

        $scope.flipkartLink = "http://www.flipkart.com/equinox/p/itmdwpjnhczssgrg?pid=DGBDX2A7FAVQFKNC&otracker=from-search&srno=t_9&query=equinox&ref=9d4730b8-ef91-4979-a80b-5f69eeb03904";
        $scope.amazonLink = "http://www.amazon.in/Equinox-Madhuri-Maitra/dp/1482816806/ref=sr_1_1?s=books&ie=UTF8&qid=1405488548&sr=1-1&keywords=equinox";

        function getRandomInt(min, max) {
            var excerptVal = Math.floor(Math.random() * (max - min + 1)) + min;
            return excerptVal;
        }

        var url = '../properties/equinox.json';
        console.log("URL: ", url);
        $http.get(url).then(function(response) {
            var index = getRandomInt(1, response.data.length) - 1;
            $scope.equinox.excerpt = response.data[index].excerpt;
        });
    });
