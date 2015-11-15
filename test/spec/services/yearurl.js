'use strict';

describe('Service: yearURL', function () {

  // load the service's module
  beforeEach(module('ofProsePoetryApp'));

  // instantiate service
  var yearURL;
  beforeEach(inject(function (_yearURL_) {
    yearURL = _yearURL_;
  }));

  it('should do something', function () {
    expect(!!yearURL).toBe(true);
  });

});
