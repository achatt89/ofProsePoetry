'use strict';

describe('Controller: ContactmeCtrl', function () {

  // load the controller's module
  beforeEach(module('ofProsePoetryApp'));

  var ContactmeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactmeCtrl = $controller('ContactmeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactmeCtrl.awesomeThings.length).toBe(3);
  });
});
