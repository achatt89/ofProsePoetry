'use strict';

describe('Service: otherPublicationsURL', function () {

  // load the service's module
  beforeEach(module('ofProsePoetryApp'));

  // instantiate service
  var otherPublicationsURL;
  beforeEach(inject(function (_otherPublicationsURL_) {
    otherPublicationsURL = _otherPublicationsURL_;
  }));

  it('should do something', function () {
    expect(!!otherPublicationsURL).toBe(true);
  });

});
