// LOGIN
function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "admin" && pass === "123") {
    document.getElementById("login").style.display = "none";
    document.querySelector(".container").style.display = "block";
  } else {
    alert("Login inválido");
  }
}

// TAREFAS
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value;

  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  li.onclick = () => li.remove();

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// TIMER
let time = 1500;
let interval;

function updateTimer() {
  const min = Math.floor(time / 60);
  const sec = time % 60;

  document.getElementById("timer").textContent =
    min + ":" + (sec < 10 ? "0" : "") + sec;
}

function startTimer() {
  if (interval) return;

  interval = setInterval(() => {
    if (time > 0) {
      time--;
      updateTimer();
    } else {
      clearInterval(interval);
      interval = null;

      // SOM 🔊
      document.getElementById("alarm").play();

      alert("Tempo finalizado!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  time = 1500;
  updateTimer();
}
