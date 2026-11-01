const checkboxes = document.querySelectorAll(
  '.today-tasks input[type="checkbox"]',
);

const totalCount = document.querySelector("#total-count");
const completedCount = document.querySelector("#completed-count");
const pendingCount = document.querySelector("#pending-count");

// Select the task form elements
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector(".today-tasks ul");

function updateStats() {
  let completed = 0;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      completed++;
    }
  });

  totalCount.textContent = checkboxes.length;
  completedCount.textContent = completed;
  pendingCount.textContent = checkboxes.length - completed;
}

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    updateStats();
  });
});

// Update the numbers when the page first loads
updateStats();
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  console.log(taskText);
});
