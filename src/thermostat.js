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
  if (this.powerSave === false) {this.maxTemp = 32;}
  else {this.maxTemp = 25;}
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {return 'low'}
  if (this.temperature >= 25) {return 'high'}
  return 'medium';
};

Thermostat.prototype._displayMode = function() {
  if (this.powerSave === true) {return "Turn Power Save Off"}
  return "Turn Power Save On";
};
