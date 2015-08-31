'use strict';

describe('Constant: haikuURL', function () {

  // load the service's module
  beforeEach(module('ofProsePoetryApp'));

  // instantiate service
  var haikuURL;
  beforeEach(inject(function (_haikuURL_) {
    haikuURL = _haikuURL_;
  }));

  it('haikuURL constant should return URL: ../properties/haiku.json', function () {
    expect(haikuURL).toBe('../properties/haiku.json');
  });

});
