'use strict';

describe('Service: equinoxURL', function () {

  // load the service's module
  beforeEach(module('ofProsePoetryApp'));

  // instantiate service
  var equinoxURL;
  beforeEach(inject(function (_equinoxURL_) {
    equinoxURL = _equinoxURL_;
  }));

  it('should do something', function () {
    expect(!!equinoxURL).toBe(true);
  });

});
