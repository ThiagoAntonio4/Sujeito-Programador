let listElement = document.querySelector("#app ul")
let buttonElement = document.querySelector("#app button")
let inputElement = document.querySelector("#app input")
tarefas = [];

function renderTask(){
    listElement.innerHTML = ""
    tarefas.map((task)=>{
        let taskElement = document.createElement('li')
        let taskText = document.createTextNode(task + " ")
        let taskBtnDelete = document.createElement("button")
        let taskBtnText = document.createTextNode("Excluir")
        let taskIndex = tarefas.indexOf(task)
        taskElement.appendChild(taskText)
        listElement.appendChild(taskElement)
        taskElement.appendChild(taskBtnDelete)
        taskBtnDelete.appendChild(taskBtnText)
        taskBtnDelete.setAttribute("onclick",`deleteTask(${taskIndex})`)
    })
}
function addTask(){
    if(inputElement.value === ""){
        alert("Digite uma tarefa")
    } else{
        tarefas.push(inputElement.value)
        inputElement.value = ""
        renderTask()
    }
}

function deleteTask(index){
    console.log(index)
    tarefas.splice(index,1)
    renderTask()
}

buttonElement.onclick = addTask