'use strict';

describe('Service: readuvenateURL', function () {

  // load the service's module
  beforeEach(module('ofProsePoetryApp'));

  // instantiate service
  var readuvenateURL;
  beforeEach(inject(function (_readuvenateURL_) {
    readuvenateURL = _readuvenateURL_;
  }));

  it('should do something', function () {
    expect(!!readuvenateURL).toBe(true);
  });

});
