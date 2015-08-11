'use strict';

/**
 * @ngdoc function
 * @name madhuriMaitraApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the madhuriMaitraApp
 */
angular.module('madhuriMaitraApp')
    .controller('authorCtrl', function($scope) {
    	$scope.websiteLink = "http://of-prose-and-poetry.com/#/";
    	$scope.imageURL = "../images/madhuri_maitra.jpg";
    });
