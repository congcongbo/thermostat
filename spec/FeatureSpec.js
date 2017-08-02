'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('starts at 20', function() {
    expect(thermostat._temp).toBe(20);
  });

  it('can increase the temp', function() {
    thermostat.up(1)
    expect(thermostat._temp).toBe(21);
  });

  it('can decrease the temp', function() {
    thermostat.down(3);
    expect(thermostat._temp).toBe(17);
  });

  it('cannot decrease temp below 10', function() {
    expect(function(){ thermostat.down(11); }).toThrowError('Minimum temperature is 10!');
  });

  it('cannot increase temp above 25', function() {
    expect(function(){ thermostat.up(6); }).toThrowError('Maximum temperature is 25!');
  });

  it('has a power saving mode on by default', function() {
    expect(thermostat._isPowerSaving).toBe(true);
  });

  it('can toggle between Power saving on and off', function() {
    thermostat.switchPowerSaving();
    expect(thermostat._isPowerSaving).toBe(false);
  });

  it('when power saving is off max temp is 32', function() {
    thermostat.switchPowerSaving();
    thermostat.up(12)
    expect(thermostat._temp).toBe(32)
  });

  

});
