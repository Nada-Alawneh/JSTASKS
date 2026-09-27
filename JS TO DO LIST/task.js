let inputText = document.getElementById("inputText");
let addButton = document.getElementById("addButton");
let listTask = document.getElementById("listTask");

let arr = JSON.parse(localStorage.getItem("task")) || [];

// display the previous tasks
for (let i = 0; i < arr.length; i++) {
    listTask.innerHTML += "<p>" + arr[i] + "<button onclick='deleteTask(this)'>Delete</button>" + "</p>";
}

// add new task
addButton.onclick = function() {
    let task = inputText.value.trim();
    if (task === "") return; 

    arr.push(task);
    localStorage.setItem("task", JSON.stringify(arr));
    listTask.innerHTML += "<p>" + task + "<button onclick='deleteTask(this)'>Delete</button>" + "</p>";
    inputText.value = "";
};


// delete task
function deleteTask(button) {
    
    let taskName = button.parentElement.childNodes[0].textContent.trim();
    
    
    let realIndex = arr.indexOf(taskName);

    if (realIndex !== -1) {
        arr.splice(realIndex, 1);
        localStorage.setItem("task", JSON.stringify(arr));
    }

    button.parentElement.remove();
}
