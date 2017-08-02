'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('starts at 20', function() {
    expect(thermostat.temp).toBe(20);
  });

  it('can increses the temp', function() {
    thermostat.up(1)
    expect(thermostat.temp).toBe(21);
  });

});
