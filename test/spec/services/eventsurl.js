'use strict';

describe('Service: eventsURL', function () {

  // load the service's module
  beforeEach(module('ofProsePoetryApp'));

  // instantiate service
  var eventsURL;
  beforeEach(inject(function (_eventsURL_) {
    eventsURL = _eventsURL_;
  }));

  it('should do something', function () {
    expect(!!eventsURL).toBe(true);
  });

});
