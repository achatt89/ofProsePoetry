'use strict';

/**
 * @ngdoc function
 * @name madhuriMaitraApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the madhuriMaitraApp
 */
angular.module('madhuriMaitraApp')
    .controller('haikuCtrl', function(commonCalls, $scope) {

        $scope.haiku = {};

        $scope.amazonLink = "http://www.amazon.in/haiku-other-micropoetry-madhuri-maitra-ebook/dp/B00IJUPH88/ref=sr_1_1?ie=UTF8&qid=1405259110&sr=8-1&keywords=haiku+and+other+micropoetry";

        $scope.haiku = commonCalls.haiku();
    });
