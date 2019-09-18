describe('Thermostat', function() {
  var temperature

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default setting of 20 degrees C', function() {
    expect(thermostat.celcius).toEqual(20);
  });
});
