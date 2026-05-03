// LOGIN
function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "admin" && pass === "123") {
    document.getElementById("login").style.display = "none";

    const app = document.querySelector(".container");
    app.style.display = "block";
    app.style.animation = "fadeIn 0.8s";

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

  setTimeout(() => {
    li.style.opacity = "1";
    li.style.transition = "0.5s";
  }, 10);

  li.onclick = () => {
    li.style.opacity = "0";
    setTimeout(() => li.remove(), 300);
  };

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
