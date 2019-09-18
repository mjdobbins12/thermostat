function Thermostat(celcius = 20) {
  this.temperature = celcius
  // this.powerSave = true
};

Thermostat.prototype.increaseTemp = function() {
  if (this.temperature >= 25) throw 'MAXIMUM TEMP REACHED';
  this.temperature++;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature <= 10) throw 'MINIMUM TEMP REACHED';
  this.temperature--;
};
