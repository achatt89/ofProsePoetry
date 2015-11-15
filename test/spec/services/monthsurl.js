'use strict';

describe('Service: monthsURL', function () {

  // load the service's module
  beforeEach(module('ofProsePoetryApp'));

  // instantiate service
  var monthsURL;
  beforeEach(inject(function (_monthsURL_) {
    monthsURL = _monthsURL_;
  }));

  it('should do something', function () {
    expect(!!monthsURL).toBe(true);
  });

});
