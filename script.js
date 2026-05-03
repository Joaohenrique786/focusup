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
  if (!input.value) return;

  const li = document.createElement("li");
  li.textContent = input.value;

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
      document.getElementById("alarm").play();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  time = 1500;
  updateTimer();
}

/* ESTRELAS */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 120; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    s: Math.random() * 0.5
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#a855f7";

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();

    star.y += star.s;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(draw);
}

draw();
