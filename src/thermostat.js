
var Thermostat = function(){
  this.temp = 20;
};

Thermostat.prototype.up = function(num){
  this.temp += num;
};

Thermostat.prototype.down = function(num){
  //(temp-num > 10) ? (this.temp -= num); : throw new Error("Minimum temperature is 10!");
  if (this.temp-num <10) {
    throw new Error("Minimum temperature is 10!");
  } else {
    this.temp -= num;
  };
};
