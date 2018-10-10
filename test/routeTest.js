var Route = require('../route');
var expect = require('chai').expect;
var route = new Route();

describe("Route", function() {

  describe('gives the fastest route', function() {
    it('from A to B', function() {
      expect(route.traveltime('Bank', 'Waterloo')).to.be.a('number')
    });
  });
});
