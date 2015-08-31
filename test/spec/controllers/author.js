'use strict';

describe('Controller: AuthorCtrl', function () {

  // load the controller's module
  beforeEach(module('ofProsePoetryApp'));

  var AuthorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthorCtrl = $controller('AuthorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('$scope.websiteLink to have a URL : http://of-prose-and-poetry.com/#/', function () {
    expect(websiteLink).toBe('http://of-prose-and-poetry.com/#/');
  });
});
