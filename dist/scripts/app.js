'use strict';

/**
 * @ngdoc overview
 * @name madhuriMaitraApp
 * @description
 * # madhuriMaitraApp
 *
 * Main module of the application.
 */
angular
    .module('madhuriMaitraApp', [
        'ngRoute',
        'ngSanitize',
        'wysiwyg.module',
        'firebase'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'mainCtrl'
            })
            .when('/author', {
                templateUrl: 'views/author.html',
                controller: 'authorCtrl'
            })
            .when('/books', {
                templateUrl: 'views/books.html',
                controller: 'booksCtrl'
            })
            .when('/events', {
                templateUrl: 'views/events.html',
                controller: 'eventsCtrl'
            })
            .when('/otherpublications', {
                templateUrl: 'views/otherpublications.html',
                controller: 'otherPublicationsCtrl'
            })
            .when('/readuvenate', {
                templateUrl: 'views/readuvenate.html',
                controller: 'readuvenateCtrl'
            })
            .when('/books/equinox', {
                templateUrl: 'views/books/equinox.html',
                controller: 'equinoxCtrl'
            })
            .when('/books/haiku', {
                templateUrl: 'views/books/haiku.html',
                controller: 'haikuCtrl'
            })
            .when('/editor', {
                templateUrl: 'views/editor.html',
                controller: 'editorCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .filter('reverseAnything', function() {
        return function(items) {
            if (typeof items === 'undefined') {
                return;
            }
            return angular.isArray(items) ?
                items.slice().reverse() : // If it is an array, split and reverse it
                (items + '').split('').reverse().join(''); // else make it a string (if it isn't already), and reverse it
        };
    })
    .run(function($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function(ev, data) {
            if (data.$$route && data.$$route.controller)
                $rootScope.controller = data.$$route.controller;
        })
    })
    .constant('readuvenateURL', 'https://of-prose-and-poetry.firebaseio.com/readuvenate')
    .constant('otherPublicationsURL', '../properties/publication.json')
    .constant('haikuURL', '../properties/haiku.json')
    .constant('equinoxURL', '../properties/equinox.json')
    .constant('eventsURL', '../properties/events.json');

bootstrapApplication();
//fetchData();

/*function fetchData() {
    var initInjector = angular.injector(["ng"]);
    var $http = initInjector.get("$http");

    return $http.get("https://of-prose-and-poetry.firebaseio.com/readuvenate").then(function(response) {
        madhuriMaitraApp.constant("config", response.data);
    }, function(errorResponse) {
        // Handle error case
    });
}*/

function bootstrapApplication() {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ["madhuriMaitraApp"]);
    });
}
