document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("taskInput");
    const addButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addButton.addEventListener("click", () => {
        const taskText = input.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);

        input.value = "";
    });
});
