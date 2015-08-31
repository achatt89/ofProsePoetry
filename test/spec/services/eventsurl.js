'use strict';

describe('Constant: eventsURL', function () {

  // load the service's module
  beforeEach(module('ofProsePoetryApp'));

  // instantiate service
  var eventsURL;
  beforeEach(inject(function (_eventsURL_) {
    eventsURL = _eventsURL_;
  }));

  it('eventsURL constant should return URL: ../properties/events.json', function () {
    expect(eventsURL).toBe('../properties/events.json');
  });

});
