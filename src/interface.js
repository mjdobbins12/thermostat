<script src="./src/thermostat.js"></script>

<script>
$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
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
</script>
