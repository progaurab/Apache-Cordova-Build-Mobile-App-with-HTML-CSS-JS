document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  const newTaskInput = document.getElementById("newTask");
  const addTaskButton = document.getElementById("addTask");
  const taskGroups = document.getElementById("taskGroups");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  renderTasks();

  addTaskButton.addEventListener("click", addTask);

  function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
      const today = new Date().toLocaleDateString();
      tasks.unshift({ text: taskText, date: today, done: false });
      localStorage.setItem("tasks", JSON.stringify(tasks));
      newTaskInput.value = "";
      renderTasks();
    }
  }

  function renderTasks() {
    taskGroups.innerHTML = "";
    const groupedTasks = groupTasksByDate(tasks);

    for (const date in groupedTasks) {
      const taskGroup = document.createElement("div");
      taskGroup.classList.add("task-group");

      const dateHeader = document.createElement("h2");
      dateHeader.textContent = date;
      taskGroup.appendChild(dateHeader);

      const ul = document.createElement("ul");
      ul.classList.add("list-group");
      groupedTasks[date].forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add(
          "list-group-item",
          "d-flex",
          "justify-content-between",
          "align-items-center" // Removed clickable class from li
        );
  
        // Immediately add the 'done' class if the task is done
        if (task.done) li.classList.add("done");
  
        li.innerHTML = `
              <div class="form-check"> 
                <input type="checkbox" class="form-check-input done-checkbox" data-index="${index}" ${task.done ? "checked" : ""}>
                    <label class="form-check-label clickable" for="doneCheckbox${index}">${task.text}</label> 
                  </div>
                `;
  
        // Add event listener only to the label
        const label = li.querySelector('.form-check-label');
        label.addEventListener("click", () => editTask(li, task, date, index));
  
        ul.appendChild(li);
      });
  
      taskGroup.appendChild(ul);
      taskGroups.appendChild(taskGroup);
    }

    const doneCheckboxes = taskGroups.querySelectorAll(".done-checkbox");
    doneCheckboxes.forEach((checkbox) =>
      checkbox.addEventListener("change", toggleTaskDone)
    );
  }

  function groupTasksByDate(tasks) {
    const grouped = {};
    tasks.forEach((task) => {
      if (!grouped[task.date]) grouped[task.date] = [];
      grouped[task.date].push(task);
    });
    return grouped;
  }

  function deleteTask(task, date) {
    tasks = tasks.filter((t) => !(t === task));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }

  function editTask(liElement, task, date, index) {
    const newText = prompt("Edit task: (Leave blank to delete)", task.text);
    if (newText !== null) {
      if (newText.trim() === "") {
        deleteTask(task, date);
      } else {
        task.text = newText.trim();
        localStorage.setItem("tasks", JSON.stringify(tasks));
        liElement.querySelector('label').textContent = newText.trim(); // Update label text
      }
    }
  }

  function toggleTaskDone(event) {
    const checkbox = event.target;
    const li = checkbox.closest("li");
    const label = li.querySelector('label');

    const ul = checkbox.closest('ul');
    const date = ul.previousElementSibling.textContent;
    const taskIndex = Array.from(ul.children).indexOf(li);
    const task = tasks.find(
      (t) => t.date === date && tasks.indexOf(t) === taskIndex
    );

    task.done = checkbox.checked;
    
    // Update local storage immediately
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    // Update the label's class and the li element's class immediately
    label.classList.toggle("done", task.done);
    li.classList.toggle("done", task.done);

    renderTasks(); // Re-render the tasks after toggle
  }
}

