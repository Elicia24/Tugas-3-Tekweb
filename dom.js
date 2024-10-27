function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        li.addEventListener("click", () => {
            if (confirm("Are you sure you want to delete this task?")) {
                taskList.removeChild(li);
            }
        });

        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a valid task!");
    }
}

function changeFontSize(size) {
    document.body.style.fontSize = size + "px";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function changeFontStyle() {
    const currentFont = document.body.style.fontFamily;
    document.body.style.fontFamily = currentFont === "Arial, Helvetica" ? "Courier New, monospace" : "Arial, Helvetica";
}

function changeBackgroundColor() {
    const color = prompt("Enter a background color (e.g., 'lightblue', '#ffcc00'):");

    const isColorValid = /^#([0-9A-F]{3}){1,2}$/i.test(color) || /^[a-zA-Z]+$/.test(color);
    if (color && isColorValid) {
        document.body.style.backgroundColor = color;
    } else if (color) {
        alert("Invalid color format! Please enter a valid color.");
    }
}