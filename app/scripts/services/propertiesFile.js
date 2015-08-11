'use strict';
angular.module('madhuriMaitraApp')
    .service('propertiesFile', function($https) {

        var readuvenate;
        this.getPropertiesFile = function() {
            var firebaseURL = new Firebase("https://of-prose-and-poetry.firebaseio.com/readuvenate");
            readuvenate = $firebaseArray(firebaseURL);
            console.log("SERVICE CALL", readuvenate.length);

            return readuvenate;

        };
    });
