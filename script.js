const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Enter a task.");
    return;
  }

  // Create list item
  const li = document.createElement("li");

  // Toggle complete
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.textContent = taskText;

  // Create remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", (f) => {
    f.stopPropagation(); // Prevent toggling completed
    taskList.removeChild(li);
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = ""; // Clear input
});
