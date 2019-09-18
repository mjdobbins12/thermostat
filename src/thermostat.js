function Thermostat(celcius = 20) {
  this.temperature = celcius
};

Thermostat.prototype.increaseTemp = function() {
  this.temperature++;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature <= 10) throw 'MINIMUM TEMP REACHED';
  this.temperature--;
};
