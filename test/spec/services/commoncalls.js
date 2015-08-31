'use strict';

describe('Service: commonCalls', function () {

  // load the service's module
  beforeEach(module('ofProsePoetryApp'));

  // instantiate service
  var commonCalls;
  beforeEach(inject(function (_commonCalls_) {
    commonCalls = _commonCalls_;
  }));

  it('should do something', function () {
    expect(!!commonCalls).toBe(true);
  });

});
