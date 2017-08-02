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

  it('cannot increase temp above 25 in power saving mode', function() {
    expect(function(){ thermostat.up(6); }).toThrowError('Maximum temperature is exceeded!');
  });

  it('cannot increase temp above 32 with power saving mode off', function() {
    thermostat.switchPowerSaving();
    thermostat.up(12)
    expect(thermostat._temp).toBe(32)
    expect(function(){ thermostat.up(1); }).toThrowError('Maximum temperature is exceeded!')
  });

  it('has a power saving mode on by default', function() {
    expect(thermostat._isPowerSaving).toBe(true);
  });

  it('can toggle between Power saving on and off', function() {
    thermostat.switchPowerSaving();
    expect(thermostat._isPowerSaving).toBe(false);
    expect(thermostat.maxTemp()).toBe(32);
  });

  it('has a reset function that set the temp to 20', function() {
    thermostat.up(5)
    thermostat.reset();
    expect(thermostat._temp).toBe(20)
  });

  it('it returns energy usage based on temp', function() {
    thermostat.switchPowerSaving();
    expect(thermostat.energyUsage()).toEqual('medium-usage');
    thermostat.up(6);
    expect(thermostat.energyUsage()).toEqual('high-usage');
    thermostat.down(9);
    expect(thermostat.energyUsage()).toEqual('low-usage');
  });


});
