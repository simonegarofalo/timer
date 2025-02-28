document.addEventListener("DOMContentLoaded", () => {
    let seconds = 0;
    let timerInterval = null;
    const display = document.getElementById("display");
    const startButton = document.getElementById("startButton");
  
    function updateDisplay() {
      let hours = Math.floor(seconds / 3600);
      let minutes = Math.floor((seconds % 3600) / 60);
      let secs = seconds % 60;
  
      display.textContent = 
        String(hours).padStart(2, "0") + ":" + 
        String(minutes).padStart(2, "0") + ":" + 
        String(secs).padStart(2, "0");
    }
  
    function add() {
      seconds += 60;
      updateDisplay();
    }
  
    function remove() {
      if (seconds >= 60) {
        seconds -= 60;
        updateDisplay();
      }
    }
  
    function toggleTimer() {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        startButton.textContent = "Start";
        startButton.classList.remove("pause");
      } else {
        timerInterval = setInterval(() => {
          if (seconds > 0) {
            seconds--;
            updateDisplay();
          } else {
            clearInterval(timerInterval);
            timerInterval = null;
            startButton.textContent = "Start";
            startButton.classList.remove("pause");
          }
        }, 1000);
        startButton.textContent = "Pause";
        startButton.classList.add("pause");
      }
    }
  
    function reset() {
      seconds = 0;
      updateDisplay();
      clearInterval(timerInterval);
      timerInterval = null;
  
      startButton.textContent = "Start";
      startButton.classList.remove("pause");
    }
  
    updateDisplay();
  
    document.getElementById("startButton").addEventListener("click", toggleTimer);
    document.getElementById("resetButton").addEventListener("click", reset);
    document.getElementById("addButton").addEventListener("click", add);
    document.getElementById("removeButton").addEventListener("click", remove);
  });
  