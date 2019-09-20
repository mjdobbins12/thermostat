$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  // $("#currentTemp").text(Current Temerature )
  $("#powerSaveButton").text(thermostat._displayMode())


  $("#upButton").click(function() {
    thermostat.increaseTemp();
    updateTemperature();
  })

  $("#downButton").click(function() {
    thermostat.decreaseTemp();
    updateTemperature();
  })

  $("#resetButton").click(function() {
    thermostat.resetTemp();
    updateTemperature();
  })

  $("#powerSaveButton").click(function() {
    thermostat.powerSaver();
    $("#powerSaveButton").text(thermostat._displayMode());
  })

  function updateTemperature() {
    $("#temp").text(thermostat.temperature);
    $("#temp").attr("class", thermostat.energyUsage());
  };
});
