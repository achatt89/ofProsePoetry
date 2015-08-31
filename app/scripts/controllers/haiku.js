'use strict';

/**
 * @ngdoc function
 * @name ofProsePoetryApp.controller:HaikuCtrl
 * @description
 * # HaikuCtrl
 * Controller of the ofProsePoetryApp
 */
angular.module('ofProsePoetryApp')
    .controller('HaikuCtrl', function(commonCalls, $scope) {

        $scope.haiku = {};

        $scope.amazonLink = "http://www.amazon.in/haiku-other-micropoetry-madhuri-maitra-ebook/dp/B00IJUPH88/ref=sr_1_1?ie=UTF8&qid=1405259110&sr=8-1&keywords=haiku+and+other+micropoetry";

        $scope.haiku = commonCalls.haiku();
  });
