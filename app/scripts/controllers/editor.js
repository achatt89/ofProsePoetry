'use strict';

/**
 * @ngdoc function
 * @name ofProsePoetryApp.controller:EditorCtrl
 * @description
 * # EditorCtrl
 * Controller of the ofProsePoetryApp
 */
angular.module('ofProsePoetryApp')
    .controller('EditorCtrl', function($scope, $http, $firebaseArray) {

        $scope.wysiwygBody;
        $scope.wysiwygTitle;
        $scope.section;
        $scope.articleExcerpt;

        $scope.wysiwygBodyMenu = [
            ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
            ['format-block'],
            ['font'],
            ['font-size'],
            ['font-color', 'hilite-color'],
            ['remove-format'],
            ['ordered-list', 'unordered-list', 'outdent', 'indent'],
            ['left-justify', 'center-justify', 'right-justify'],
            ['code', 'quote', 'paragraph'],
            ['link', 'image']
        ];
        $scope.wysiwygTitleMenu = [
            ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
            ['font'],
            ['font-size'],
            ['font-color', 'hilite-color'],
            ['remove-format']
        ];

        var firebaseURL = new Firebase("https://of-prose-and-poetry.firebaseio.com/readuvenate");
        $scope.messages = $firebaseArray(firebaseURL);

        $scope.submit = function() {
            if (($scope.wysiwygTitle != null) || ($scope.wysiwygBody != null) || ($scope.articleExcerpt != null)) {
                $scope.messages.$add({
                    title: $scope.wysiwygTitle,
                    excerpt: $scope.articleExcerpt,
                    body: $scope.wysiwygBody
                });

                $("#confirmModal").modal();
                $scope.value="";

            }
            else {
                $("#errorModal").modal();
            }
        }
    });