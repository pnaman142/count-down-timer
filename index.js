let countdownInterval = null;

// function to start the countdown timer
function startCountdown(time) {
  let countdown = Math.floor(time);
  document.getElementById("countdown-time").innerText = countdown;

  countdownInterval = setInterval(() => {
    countdown--;
    if (countdown >= 0) {
      document.getElementById("countdown-time").innerText = countdown;
    } else {
      clearInterval(countdownInterval);
      document.getElementById("countdown-time").innerText = "0";
    }
  }, 1000);
}

// function to stop the countdown timer
function stopCountdown() {
  clearInterval(countdownInterval);
  document.getElementById("countdown-time").innerText = "0";
}

// event listener for Enter key press on input field
document.getElementById("input-time").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // get the input value and start the countdown
    const inputTime = parseFloat(event.target.value);
    if (isNaN(inputTime)) {
      startCountdown(0);
    } else {
      startCountdown(Math.floor(inputTime));
    }
    //clear input field
    document.getElementById("input-time").value = "";
  }
});

// event listener for input field change
document.getElementById("input-time").addEventListener("input", () => {
  // stop the countdown if already running
  stopCountdown();
});
