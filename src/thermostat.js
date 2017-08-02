
var Thermostat = function(){
  this.temp = 20;
};
  

Thermostat.prototype.up = function(num){
  this.temp += num;
};
