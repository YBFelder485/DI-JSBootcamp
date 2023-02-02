const form = document.getElementById("form");
const ul = document.getElementById("list-tasks");

form.addEventListener("submit", handleSubmit);
const tasks = [];

function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData(form);
    const task = formData.get("task");
    if (task === "") return;
    tasks.push(task);
    renderTasks(tasks);
    form.reset();
}

function renderTasks(tasks){
    ul.innerHTML = "";
    for(const task of tasks){
        const li = generateLi(task)
        ul.append(li);
    }
}

function generateLi(task){
    const li = document.createElement("li");
    const xMark = document.createElement("i");
    xMark.classList.add("fa-solid", "fa-xmark");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const span = document.createElement("label");
    span.innerText = task; 

    li.append(xMark, checkbox, span);
    return li;
}