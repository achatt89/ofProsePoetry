'use strict';

describe('Constant: readuvenateURL', function () {

  // load the service's module
  beforeEach(module('ofProsePoetryApp'));

  // instantiate service
  var readuvenateURL;
  beforeEach(inject(function (_readuvenateURL_) {
    readuvenateURL = _readuvenateURL_;
  }));

  it('readuvenateURL constant should return URL: https://of-prose-and-poetry.firebaseio.com/readuvenate', function () {
    expect(readuvenateURL).toBe('https://of-prose-and-poetry.firebaseio.com/readuvenate');
  });

});
