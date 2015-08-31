'use strict';

describe('Controller: EquinoxCtrl', function () {

  // load the controller's module
  beforeEach(module('ofProsePoetryApp'));

  var EquinoxCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EquinoxCtrl = $controller('EquinoxCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EquinoxCtrl.awesomeThings.length).toBe(3);
  });
});
