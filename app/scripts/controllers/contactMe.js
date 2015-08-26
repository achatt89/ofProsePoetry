'use strict';

/**
 * @ngdoc function
 * @name madhuriMaitraApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the madhuriMaitraApp
 */
angular.module('madhuriMaitraApp')
    .controller('contactMeCtrl', function($scope, $http) {
        $scope.form = {};
        $scope.contactForm = {};
        $scope.mailDeliveredMsg = '';
        $scope.mailDelivered = false;
        $scope.mailDeliveredStatus = false;

        $scope.facebookURL = 'https://www.facebook.com/madhuri.unrhymed';
        $scope.twitterURL = 'https://twitter.com/madhuri_maitra';
        $scope.contactForm.to = 'madhurimaitra2008@gmail.com';

        $scope.send = function() {
            if ($scope.form.contactForm.$invalid === true) {
                $scope.mailDelivered = true;
                $scope.mailDeliveredStatus = false;
                $scope.mailDeliveredMsg = 'Error! Please fill all the fields..';
            } else {
                $http({
                    method: 'POST',
                    url: '../scripts/php/mail.php',
                    data: $.param($scope.contactForm),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }).success(function(data, status, headers, config) {
                    if (data) {
                        $scope.mailDelivered = true;
                        $scope.mailDeliveredStatus = true;
                        $scope.mailDeliveredMsg = 'Email sent successfully. Thank you for contacting.';
                        setPristine();
                    } else {
                        $scope.mailDelivered = true;
                        $scope.mailDeliveredStatus = false;
                        $scope.mailDeliveredMsg = 'Error! Please try again after sometime. Sorry for inconvenience.';
                    }
                }).error(function(data, status) {
                    $scope.mailDelivered = true;
                    $scope.mailDeliveredStatus = false;
                    $scope.mailDeliveredMsg = 'Error! Please try again after sometime. Sorry for inconvenience.';
                });

            }

        };

        if (($scope.form.$dirty || $scope.form.$touched) && ($scope.mailDelivered === true))
        {
          $scope.mailDelivered = false;
          $scope.mailDeliveredStatus = false;
          $scope.mailDeliveredMsg = '';
        }

        var setPristine = function() {
          $scope.form.contactForm.$setPristine();
          $scope.contactForm = {};
        };

    });
