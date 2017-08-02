
var Thermostat = function(){
  this._temp = 20;
  this._isPowerSaving = true;
  this._maxTemp = 25;
};

Thermostat.prototype.up = function(num){
  if (this._temp+num > this._maxTemp) {
    throw new Error("Maximum temperature is 25!")
  } else {
  this._temp += num;
  }
};

Thermostat.prototype.down = function(num){
  //(temp-num > 10) ? (this.temp -= num); : throw new Error("Minimum temperature is 10!");
  if (this._temp-num <10) {
    throw new Error("Minimum temperature is 10!");
  } else {
    this._temp -= num;
  };
};

Thermostat.prototype.switchPowerSaving = function(){
  var change = this._isPowerSaving;
  change = !change;
  return this._isPowerSaving = change;
};

Thermostat.prototype.changeMaxTemp = function(){};
