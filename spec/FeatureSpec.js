'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('starts at 20', function() {
    expect(thermostat.temp).toBe(20);
  });

  it('can increase the temp', function() {
    thermostat.up(1)
    expect(thermostat.temp).toBe(21);
  });

  it('can decrease the temp', function() {
    thermostat.down(3);
    expect(thermostat.temp).toBe(17);
  });

  it('cannot decrease temp below 10', function() {
    expect(function(){ thermostat.down(11); }).toThrowError('Minimum temperature is 10!');
  });

});
