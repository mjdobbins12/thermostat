describe('Thermostat', function() {
  var temperature

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default setting of 20 degrees C', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('has an up button that can raise the temperature', function() {
    thermostat.increaseTemp()
    expect(thermostat.temperature).toEqual(21);
  });

  it('has a down button that can decrease the temperature', function() {
    thermostat.decreaseTemp()
    expect(thermostat.temperature).toEqual(19);
  });
});
