'use strict';

/**
 * @ngdoc service
 * @name ofProsePoetryApp.commonCalls
 * @description
 * # commonCalls
 * Factory in the ofProsePoetryApp.
 */
angular.module('ofProsePoetryApp')
  .factory('commonCalls', function(readuvenateURL, haikuURL, equinoxURL, eventsURL, otherPublicationsURL, $http, $firebaseArray) {
        var factory = {};

        function getRandomInt(min, max) {
            var returnVal = Math.floor(Math.random() * (max - min + 1)) + min;
            return returnVal;
        }

        factory.readuvenate = function() {
            var firebaseURL = new Firebase(readuvenateURL);
            var ref = firebaseURL.endAt().limit(1);
            var readuvenate = $firebaseArray(ref);

            return readuvenate;
        };


        factory.haiku = function() {
            var haikuResponse = {};
            $http.get(haikuURL).then(function(response) {
                var index = getRandomInt(1, response.data.length) - 1;

                haikuResponse.excerptHeading = response.data[index].heading;
                haikuResponse.excerptLine1 = response.data[index].excerptLine1;
                haikuResponse.excerptLine2 = response.data[index].excerptLine2;
                haikuResponse.excerptLine3 = response.data[index].excerptLine3;
                haikuResponse.excerptLine4 = response.data[index].excerptLine4;
            });

            return haikuResponse;
        };

        factory.equinox = function() {
            var equinoxExcerpt = {};
            $http.get(equinoxURL).then(function(response) {
                var index = getRandomInt(1, response.data.length) - 1;
                equinoxExcerpt.excerpt = response.data[index].excerpt;
            });

            return equinoxExcerpt;
        };

        factory.latestEvent = function() {
            var eventDetails = {};
            $http.get(eventsURL).then(function(response) {
                var index = response.data.length - 1;
                eventDetails.eventName = response.data[index].event;
                eventDetails.eventVenue = response.data[index].venue;
                eventDetails.eventDate = response.data[index].date;
            });

            return eventDetails;
        };

        return factory;

    });

