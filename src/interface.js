$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $("#currentTemp").text(_currentTemp())
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

  function _currentTemp() {
    var currentTemp =  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    })
    return currentTemp
  }
});
