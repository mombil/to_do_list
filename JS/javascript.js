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

    const taskRemove = (index) => {
        tasks.splice(index, 1)
    render()
    }
    
    const taskDone = (index) =>{
        tasks[index].done = !tasks[index].done
        render()
    } 

    const addNewContent = (newTask) => {
        tasks.push({
            content : newTask,
        }) 
    }

    const render = () => {
        let htmlString = ""
        for (const task of tasks) {
            htmlString += `
            <li class="list__item ">
            <button class="js-done list__button list__button--done">${task.done ? "✔" : ""}</button>
            <span class="${task.done ? "list__item--done" : ""}">${task.content}</span>
            <button class="js-remove list__button list__button--remove">🗑</button>
            </li>
            `          
        }
        document.querySelector(".js-listTasks").innerHTML = htmlString

        removeButtons = document.querySelectorAll(".js-remove")
        
        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
                
                taskRemove(index)

            })
        });

        doneButtons = document.querySelectorAll(".js-done")
        
        doneButtons.forEach((doneButtons, index) => {
            doneButtons.addEventListener("click", () => {
                taskDone(index)

            })
        });
    }

    const onFormSubmit = (event) => {
        event.preventDefault()

        newTask = document.querySelector(".js-addTaskInput").value.trim()
        
        if (!newTask){
            return
        }

        addNewContent(newTask)
        
        document.querySelector(".js-addTaskInput").value = ""
        document.querySelector(".js-addTaskInput").focus()

        
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