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
            <li class="list__item ${task.done ? "list__item--done" : ""}">
            <button class="js-done">zrobione</button>
            ${task.content}
            <button class="js-remove">usuń</button>
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