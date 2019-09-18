function Thermostat(celcius = 20) {
  this.temperature = celcius
};

Thermostat.prototype.increaseTemp = function() {
  this.temperature++;
};

Thermostat.prototype.decreaseTemp = function() {
  this.temperature--;
};
