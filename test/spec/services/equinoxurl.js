'use strict';

describe('Constant: equinoxURL', function () {

  // load the service's module
  beforeEach(module('ofProsePoetryApp'));

  // instantiate service
  var equinoxURL;
  beforeEach(inject(function (_equinoxURL_) {
    equinoxURL = _equinoxURL_;
  }));

  it('equinoxURL constant should return URL: ../properties/equinox.json', function () {
    expect(equinoxURL).toBe('../properties/equinox.json');
  });

});
