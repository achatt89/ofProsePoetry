'use strict';

/**
 * @ngdoc function
 * @name ofProsePoetryApp.controller:EquinoxCtrl
 * @description
 * # EquinoxCtrl
 * Controller of the ofProsePoetryApp
 */
angular.module('ofProsePoetryApp')
    .controller('EquinoxCtrl', function(commonCalls, $scope) {

        $scope.equinox = {};

        $scope.flipkartLink = "http://www.flipkart.com/equinox/p/itmdwpjnhczssgrg?pid=DGBDX2A7FAVQFKNC&otracker=from-search&srno=t_9&query=equinox&ref=9d4730b8-ef91-4979-a80b-5f69eeb03904";
        $scope.amazonLink = "http://www.amazon.in/Equinox-Madhuri-Maitra/dp/1482816806/ref=sr_1_1?s=books&ie=UTF8&qid=1405488548&sr=1-1&keywords=equinox";
        
        $scope.equinox = commonCalls.equinox();
  });
