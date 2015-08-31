'use strict';

describe('Service: haikuURL', function () {

  // load the service's module
  beforeEach(module('ofProsePoetryApp'));

  // instantiate service
  var haikuURL;
  beforeEach(inject(function (_haikuURL_) {
    haikuURL = _haikuURL_;
  }));

  it('should do something', function () {
    expect(!!haikuURL).toBe(true);
  });

});
