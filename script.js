let xp = 0;
let level = 1;

function updateUI() {
  document.getElementById("xp").textContent = xp;
  document.getElementById("level").textContent = level;

  const progress = (xp % 50) * 2;
  document.getElementById("progress").style.width = progress + "%";
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = function () {
    li.style.textDecoration = "line-through";

    xp += 10;

    if (xp >= level * 50) {
      level++;
      alert("Level Up! 🎉");
    }

    updateUI();
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

document.getElementById("taskInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") addTask();
});

updateUI();
