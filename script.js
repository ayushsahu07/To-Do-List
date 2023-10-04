
const taskInput = document.getElementById('taskInput');
const tasksContainer = document.getElementById('tasks');

taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    }
});

function addTask(taskText) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
                <span>${taskText}</span>
                <button onclick="deleteTask(this)">Delete</button>
            `;
    tasksContainer.appendChild(taskElement);
}

function deleteTask(button) {
    const taskElement = button.parentElement;
    tasksContainer.removeChild(taskElement);
}
