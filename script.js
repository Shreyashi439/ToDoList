// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const countDisplay = document.getElementById("count");

let count = 0;

// Function to update task count
function updateCount() {
  countDisplay.textContent = count;
}

// Add new task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Please enter a task!");

  // Create task element
  const li = document.createElement("li");
  li.className = "task";
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <button class="delete">Delete</button>
    </div>
  `;

  // Mark as completed on click
  li.addEventListener("click", (e) => {
    if (!e.target.classList.contains("delete")) {
      li.classList.toggle("completed");
    }
  });

  // Delete task
  li.querySelector(".delete").addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    count--;
    updateCount();
  });

  // Append to list
  taskList.appendChild(li);
  count++;
  updateCount();

  // Clear input
  taskInput.value = "";
});
