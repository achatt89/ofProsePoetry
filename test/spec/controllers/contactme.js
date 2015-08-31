'use strict';

describe('Controller: ContactMeCtrl', function() {

    // load the controller's module
    beforeEach(module('ofProsePoetryApp'));

    var $controller;
    var $scope = {};

    // Initialize the controller and a mock scope
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
        var ContactMeCtrl = $controller('ContactMeCtrl', {
            $scope: $scope
        });

    }));


    it('should attach a list of awesomeThings to the scope', function() {
        expect(true).toBe(true);
    });
});
