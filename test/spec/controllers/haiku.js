'use strict';

describe('Controller: HaikuCtrl', function () {

  // load the controller's module
  beforeEach(module('ofProsePoetryApp'));

  var HaikuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HaikuCtrl = $controller('HaikuCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HaikuCtrl.awesomeThings.length).toBe(3);
  });
});
