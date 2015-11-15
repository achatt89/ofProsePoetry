'use strict';

describe('Controller: EventscreatorCtrl', function () {

  // load the controller's module
  beforeEach(module('ofProsePoetryApp'));

  var EventscreatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventscreatorCtrl = $controller('EventscreatorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventscreatorCtrl.awesomeThings.length).toBe(3);
  });
});
