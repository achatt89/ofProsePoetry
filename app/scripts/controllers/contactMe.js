'use strict';

/**
 * @ngdoc function
 * @name madhuriMaitraApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the madhuriMaitraApp
 */
angular.module('madhuriMaitraApp')
  .controller('contactMeCtrl', function ($scope, mailService) {
  		$scope.form = {};
  		$scope.contactForm = {};
  		$scope.contactFormError = false;

  		$scope.facebookURL = 'https://www.facebook.com/madhuri.unrhymed';
  		$scope.twitterURL = 'https://twitter.com/madhuri_maitra';
  		$scope.emailAddress = 'madhurimaitra2008@gmail.com';

  		$scope.send = function () {
  			if ($scope.form.contactForm.$invalid === true) {
  				$scope.contactFormError = true;
  			}
  			else {
  				$scope.contactFormError = false;
  				console.log ($scope.contactForm);

          var to = $scope.emailAddress;
          var from = $scope.contactForm.email;
          var subject = $scope.contactForm.subject;
          var message = $scope.contactForm.message;

          $scope.mailStatus = mailService.sendMail(to,from,subject,message);

          console.log ("TADAA", $scope.mailStatus);

  			}
  		
  		}
  });
