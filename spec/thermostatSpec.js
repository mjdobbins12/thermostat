describe('Thermostat', function() {
  var temperature
  var powerSave
  var maxTemp

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default setting of 20 degrees C', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.powerSave).toEqual(true);
  });

  it('has a max temp of 25 C on power saver mode', function() {
    expect(thermostat.maxTemp).toEqual(25);
  });

  it('has an up button that can raise the temperature', function() {
    thermostat.increaseTemp()
    expect(thermostat.temperature).toEqual(21);
  });

  it('has a down button that can decrease the temperature', function() {
    thermostat.decreaseTemp()
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum of 10 degrees C', function() {
    for(i = 1; i <= 10; i++) { thermostat.decreaseTemp() }
    expect(function() {thermostat.decreaseTemp()}).toThrow('MINIMUM TEMP REACHED')
  });

  it('on power saving mode, the max temp is 25 C', function() {
    for(i = 1; i <= 5; i++) { thermostat.increaseTemp() }
    expect(function() {thermostat.increaseTemp()}).toThrow('MAXIMUM TEMP REACHED')
  });

  it('allows power saving mode to be turned off', function() {
    thermostat.powerSaver()
    expect(thermostat.powerSave).toEqual(false);
  });

  it('when power saving mode is turned off, the max temp is 32 C', function() {
    thermostat.powerSaver()
    for(i = 1; i <= 12; i++) { thermostat.increaseTemp() }
    expect(function() {thermostat.increaseTemp()}).toThrow('MAXIMUM TEMP REACHED')
  });

  it('resets the temperature to 20 with a reset function', function() {
    thermostat.increaseTemp()
    thermostat.resetTemp()
    expect(thermostat.temperature).toEqual(20);
  });
});
