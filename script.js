var cursor = document.getElementById("cursor");
var fakeOutput = document.getElementById("fakeOutput");
var realtimeOutput = document.getElementById("realtimeOutput");
var latencyInput = document.getElementById("latencyInput");

document.documentElement.addEventListener("mousemove", function(e) {
  var fakeLatency = parseInt(latencyInput.value, 10);

  // Move the circle with user-defined latency
  setTimeout(function() {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }, fakeLatency);
});

document.addEventListener("keydown", function(event) {
  var key = event.key;
  var fakeLatency = parseInt(latencyInput.value, 10);

  // Display the pressed key with latency
  setTimeout(function() {
    fakeOutput.innerHTML = "Fake Latency Key pressed: " + key;
  }, fakeLatency);
});

document.addEventListener("keyup", function(event) {
  var key = event.key;

  // Display the pressed key in real-time
  realtimeOutput.innerHTML = "Realtime Key pressed: " + key;
});
