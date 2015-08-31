'use strict';

describe('Constant: otherPublicationsURL', function () {

  // load the service's module
  beforeEach(module('ofProsePoetryApp'));

  // instantiate service
  var otherPublicationsURL;
  beforeEach(inject(function (_otherPublicationsURL_) {
    otherPublicationsURL = _otherPublicationsURL_;
  }));

  it('otherPublicationsURL constant should return URL: ../properties/publication.json', function () {
    expect(otherPublicationsURL).toBe('../properties/publication.json');
  });

});
