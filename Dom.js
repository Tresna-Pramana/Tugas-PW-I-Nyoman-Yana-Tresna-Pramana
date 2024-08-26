// Select the input, button, and the task list elements
const newTaskInput = document.getElementById('newTask');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        // Create a new list item element
        const listItem = document.createElement('li');

        // Create a text node with the task text and append it to the list item
        listItem.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'removeTaskButton';

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        newTaskInput.value = '';
    }
}

// Function to remove a task
function removeTask(event) {
    if (event.target.classList.contains('removeTaskButton')) {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    }
}

// Add event listeners
addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);

// Optional: Add task by pressing Enter key
newTaskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});