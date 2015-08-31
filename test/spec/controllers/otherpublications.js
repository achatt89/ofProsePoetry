'use strict';

describe('Controller: OtherpublicationsCtrl', function () {

  // load the controller's module
  beforeEach(module('ofProsePoetryApp'));

  var OtherpublicationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OtherpublicationsCtrl = $controller('OtherpublicationsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OtherpublicationsCtrl.awesomeThings.length).toBe(3);
  });
});
