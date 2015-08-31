'use strict';

/**
 * @ngdoc overview
 * @name ofProsePoetryApp
 * @description
 * # ofProsePoetryApp
 *
 * Main module of the application.
 */
angular
    .module('ofProsePoetryApp', [
        'ngAria',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'wysiwyg.module',
        'firebase'
    ])
    .run(function($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function(ev, data) {
            if (data.$$route && data.$$route.controller) {
                $rootScope.controller = data.$$route.controller;
            }
        });
    })
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/author', {
                templateUrl: 'views/author.html',
                controller: 'AuthorCtrl',
            })
            .when('/books', {
                templateUrl: 'views/books.html',
                controller: 'BooksCtrl'
            })
            .when('/books/haiku', {
                templateUrl: 'views/books/haiku.html',
                controller: 'HaikuCtrl'
            })
            .when('/books/equinox', {
                templateUrl: 'views/books/equinox.html',
                controller: 'EquinoxCtrl'
            })
            .when('/contactMe', {
                templateUrl: 'views/contactme.html',
                controller: 'ContactMeCtrl'
            })
            .when('/editor', {
                templateUrl: 'views/editor.html',
                controller: 'EditorCtrl'
            })
            .when('/events', {
                templateUrl: 'views/events.html',
                controller: 'EventsCtrl'
            })
            .when('/otherPublications', {
                templateUrl: 'views/otherpublications.html',
                controller: 'OtherpublicationsCtrl'
            })
            .when('/readuvenate', {
                templateUrl: 'views/readuvenate.html',
                controller: 'ReaduvenateCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
