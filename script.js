li.onclick = function () {
  if (!li.classList.contains("completed")) {
    li.classList.add("completed");

    xp += 10;

    if (xp >= level * 50) {
      level++;
      alert("Level Up! 🎉");
    }

    updateUI();
  }
};
