
var Thermostat = function(){
  this._temp = 20;
  this._isPowerSaving = true;
};

Thermostat.prototype.up = function(num){
  if (this._temp+num > this.maxTemp()) {
    throw new Error("Maximum temperature is exceeded!")
  } else {
  this._temp += num;
  }
};

Thermostat.prototype.down = function(num){
  //(this.temp-num > 10) ? (this.temp -= num) : throw new Error("Minimum temperature is 10!");
  if (this._temp-num <10) {
    throw new Error("Minimum temperature is 10!");
  } else {
    this._temp -= num;
  };
};

Thermostat.prototype.switchPowerSaving = function(){
  this._isPowerSaving = !this._isPowerSaving;
  this.maxTemp();
};

Thermostat.prototype.maxTemp = function(){
  if (this._isPowerSaving === false) {
   return this._maxTemp = 32;
  } else {
   return this._maxTemp = 25;
  };
};

thermostat = new Thermostat;
thermostat.switchPowerSaving();
console.log(thermostat);
