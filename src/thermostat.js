function Thermostat(celcius = 20) {
  this.temperature = celcius
  this.powerSave = true
  this.maxTemp = 25
};

Thermostat.prototype.increaseTemp = function() {
  if (this.temperature >= this.maxTemp) throw 'MAXIMUM TEMP REACHED';
  this.temperature++;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature <= 10) throw 'MINIMUM TEMP REACHED';
  this.temperature--;
};

Thermostat.prototype.powerSaver = function() {
  this.powerSave = !this.powerSave
  if (this.powerSave === false) {
    this.maxTemp = 32;
  } else {
    this.maxTemp = 25;
  }
};
