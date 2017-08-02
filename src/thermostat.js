
var Thermostat = function(){
  this._temp = 20;
  this._isPowerSaving = true;
  this._maxTemp = 25;
};

Thermostat.prototype.up = function(num){
  if (this._temp+num > this._maxTemp) {
    throw new Error("Maximum temperature is exceeded!")
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
  return this._isPowerSaving = !this._isPowerSaving;
  //changeMaxTemp();
};

Thermostat.prototype.changeMaxTemp = function(){
  if (this._isPowerSaving === false) {
    return this._maxTemp = 32;
  } else {
    return this._maxTemp = 25;
  };
};

// thermostat = new Thermostat;
// thermostat.switchPowerSaving();
// //thermostat.changeMaxTemp();
// console.log(thermostat);
