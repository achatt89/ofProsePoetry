'use strict';

describe('Filter: reverseAnything', function () {

  // load the filter's module
  beforeEach(module('ofProsePoetryApp'));

  // initialize a new instance of the filter before each test
  var reverseAnything;
  beforeEach(inject(function ($filter) {
    reverseAnything = $filter('reverseAnything');
  }));

  it('should return the input prefixed with "reverseAnything filter:"', function () {
    var text = 'angularjs';
    expect(reverseAnything(text)).toBe('reverseAnything filter: ' + text);
  });

});
