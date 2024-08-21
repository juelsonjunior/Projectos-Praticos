const input_task = document.getElementById('input-task')
const list_task = document.querySelector(".list-task")
const tasks = []

const updateList = () => {
    list_task.innerHTML = ""

    if (tasks.length > 0) {
        tasks.forEach((task, index) => {
            list_task.innerHTML += `
            <div class="box-task">
                <p class="task">${task} </p>
    
                <div class="actions-task">
                    <i class="fas fa-trash" onclick="removeTask(${index})"></i>

                    <i class="fas fa-pencil icon-edit" onclick="editTask(${index})"></i>

                    <i class="fas fa-check" data-number="${index}" onclick="taskIsDone(${index})"></i>
                </div>
            </div>`
        })
    } else {
        const p = document.createElement("span")
        p.textContent = "Não existe nenhuma tarefa"
        list_task.appendChild(p)
    }
}
updateList()

const newTask = () => {
    let input_value = input_task.value

    if (input_value != "") {
        tasks.push(input_value)

        input_task.value = ""

        updateList()
    } else {
        alert("Precisa adicionar uma tarefa")
    }
}

const removeTask = (id) => {
    tasks.splice(id, 1)
    updateList()
}

const taskIsDone = (id) => {
    const paragraf = document.querySelectorAll('.task')

    const boxTask = document.querySelectorAll(".box-task")

    const paragrafNumber = document.querySelector(`i[data-number="${id}"]`)

    let id_input = paragrafNumber.dataset.number

    if (id == id_input) {
        const classTask = "task-done"
        paragraf[id].classList.toggle(classTask)

        boxTask[id].classList.toggle("box-task-done")
    } else {
        console.log("Houve algum problema no id")
    }
}

const editTask = (id) => {
    const paragraf = document.querySelectorAll('.task')

    const icon_edit = document.querySelectorAll('.icon-edit')
    icon_edit[id].style.display = "none"

    const paragrafNumber = document.querySelector(`i[data-number="${id}"]`)

    let id_input = paragrafNumber.dataset.number

    if (id == id_input) {
        let valueParagraf = paragraf[id].innerText
        const newInput = document.createElement("input")
        newInput.setAttribute("class", "input-edit-task")
        newInput.style.color = "black"
        newInput.value = valueParagraf
        paragraf[id].appendChild(newInput)

        const input_edit_task = document.querySelector(".input-edit-task")
        input_edit_task.focus()

        input_edit_task.addEventListener("click", () => {
            let value_edit_input = input_edit_task.value
            tasks.splice(id, 1, value_edit_input)
            updateList()
        })
    } else {
        console.log("Erro no id_input")
    }
}

document.getElementById('btn-new-task').addEventListener('click', newTask)


