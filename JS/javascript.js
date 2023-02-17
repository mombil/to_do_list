{
    const tasks = [
        {
            content : " Pograj w Cs'a",
            done : true,
        },
        {
            content : "Poucz się programować",
            done: false,
        }
    ]

    const addNewContent = (newTask) => {
        tasks.push({
            content : newTask,
        }) 
    }

    const render = () => {
        let htmlString = ""
        for (const task of tasks) {
            htmlString += `
            <li class="list__item ${task.done ? "list__item--done" : ""}">
            ${task.content}
            </li>
            `          
        }
        document.querySelector(".js-listTasks").innerHTML = htmlString
    }

    const onFormSubmit = (event) => {
        event.preventDefault()

        newTask = document.querySelector(".js-addTaskInput").value.trim()
        
        if (!newTask){
            return
        }

        addNewContent(newTask)
        
   
        
        render()
    }

    const addNewTask = () => {
        form = document.querySelector(".js-form")

        form.addEventListener("submit", (event) => {
            onFormSubmit(event)
        })
    } 

    const init = () => {
        addNewTask()
        render()
    }

    init()
}