
    // Define UI Vars
// const posetiveForm = document.querySelector('#posetiveForm');
// const posetiveInput = document.querySelector('#posetive');
// const posetiveItemsList = document.querySelector('.posetiveItemsList');
// const clearBtn = document.querySelector('.clear-tasks');

const form = document.querySelector('#posetiveForm');
const taskInput = document.querySelector('#posetive');
const taskList = document.querySelector('.posetiveItemsList');


// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
 
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);

  // Add task event
  form.addEventListener('submit', addTask);

  // Remove task event
  taskList.addEventListener('click', removeTask);

  // Clear task
//   clearBtn.addEventListener('click', clearTask);

}

// Get Tasks from LS
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {

    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'list-group-item d-flex align-items-center';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create i element
    const i = document.createElement('i');
    // Add class
    i.className = 'fas fa-times text-danger mr-auto delete-item';
    // Append the i to li
    li.appendChild(i);

    // Append li to ul
    taskList.appendChild(li);

  });
}

// Add task
function addTask(e) {
  if (taskInput.value === '') {
    alert('برای افزودن تسک در ابتدا تسک را وارد کنید');
  } else {
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'list-group-item d-flex align-items-center';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create i element
    const i = document.createElement('i');
    // Add class
    i.className = 'fas fa-times text-danger mr-auto delete-item';
    // Append the i to li
    li.appendChild(i);

    // Append li to ul
    taskList.appendChild(li);

    // Store in LS
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';

    e.preventDefault();

  }

}

// Store Task
function storeTaskInLocalStorage(task) {
  // console.log(task);

  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task
function removeTask(e) {

  if (e.target.classList.contains('delete-item')) {
    if (confirm('آيا مطمن هستی برای حذف تسک')) {
      e.target.parentElement.remove();
      // Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement);
    }
  }

}

//  Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear task
function clearTask() {
  taskList.innerHTML = '';
  // Clear from LS
  clearTasksFromLocalStorage();
}


// Clear Tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}
