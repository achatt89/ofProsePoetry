'use strict';

describe('Controller: AuthorCtrl', function() {

    // load the controller's module
    beforeEach(module('ofProsePoetryApp'));

    var $controller;
    var $scope = {};

    // Initialize the controller and a mock scope
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
        var AuthorCtrl = $controller('AuthorCtrl', {
            $scope: $scope
        });

    }));

    it('$scope.websiteLink to have a URL : http://of-prose-and-poetry.com/#/', function() {
        expect($scope.websiteLink).toEqual('http://of-prose-and-poetry.com/#/');
    });
    it('$scope.imageURL to have a relative path: ../images/madhuri_maitra.jpg', function() {
        expect($scope.imageURL).toEqual('../images/madhuri_maitra.jpg');
    });
});
