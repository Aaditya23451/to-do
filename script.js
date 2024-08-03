document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Handle task addition
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get the task name from the input field
        const taskName = taskInput.value.trim();
        
        // Only add non-empty tasks
        if (taskName) {
            // Create a new list item
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskName}</span>
                <div class="task-buttons">
                    <button class="completeBtn">Complete</button>
                    <button class="deleteBtn">Delete</button>
                </div>
            `;
            
            // Append the new task to the task list
            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = '';
        }
    });

    // Handle task completion
    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('completeBtn')) {
            const task = event.target.closest('li');
            const taskText = task.querySelector('span');
            taskText.classList.toggle('completed');
        }
    });

    // Handle task deletion
    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('deleteBtn')) {
            const task = event.target.closest('li');
            task.remove();
        }
    });
});
