{
	let tasks = [];
	let hideDoneTasks = false;

	const taskRemove = index => {
		tasks.splice(index, 1);
		tasks = [...tasks.slice(0, index), ...tasks.slice(index)];
		render();
	};

	const taskToggleDone = index => {
		let targetIndex = index
			tasks = tasks.map((task, index) => {
			if (index === targetIndex) {
				return { ...task, done: !task.done };
			} else {
				return task;
			}
		  });
		  
		render();
	};

	const addNewContent = newTask => {
		tasks = [{ content: newTask, done: false }, ...tasks];
		render();
	};

	const bindDoneEvents = () => {
		doneButtons = document.querySelectorAll(".js-toggleDone");

		doneButtons.forEach((doneButtons, index) => {
			doneButtons.addEventListener("click", () => {
				taskToggleDone(index);
			});
		});
	};

	const bindRemoveEvents = () => {
		removeButtons = document.querySelectorAll(".js-remove");

		removeButtons.forEach((removeButtons, index) => {
			removeButtons.addEventListener("click", () => {
				taskRemove(index);
			});
		});
	};

	const renderTasks = () => {
		let htmlString = "";
		for (let task of tasks) {
			htmlString += `
				<li class="list__item 
				${hideDoneTasks && task.done ? "list__item--hide" : ""}">
				<button class="js-toggleDone list__button list__button--done">
					${task.done ? "✔" : ""}
				</button>
				<span class="${task.done ? " list__text" : ""}">
					${task.content}
				</span>
				<button class="js-remove list__button list__button--remove">
					🗑
				</button>
				</li>
			`;
		}
		document.querySelector(".js-listTasks").innerHTML = htmlString;
	};

	const chekDone = () => tasks.every(({ done }) => done == true);

	const renderButtons = () => {
		if (tasks.length >= 1) {
			let htmlString = "";
			htmlString += `
	 			<button class="js-buttons js-hideDoneButton buttons__button">
					${hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
				</button>
				<button class="js-buttons js-finishAll buttons__button"
				${chekDone() ? "disabled" : ""}
				>
					Ukończ wszystkie
				</button>
				`;
			document.querySelector(".js-buttons").innerHTML = htmlString;
		} else {
			document.querySelector(".js-buttons").innerHTML = "";
		}
	};

	toggleHideTasks = () => {
		if (document.querySelector(".js-hideDoneButton")) {
			let hideDoneButton = document.querySelector(".js-hideDoneButton");
			hideDoneButton.addEventListener("click", () => {
				hideDoneTasks = !hideDoneTasks;
				render();
			});
		}
	};

	const finishAllTasks = () => {
		if (document.querySelector(".js-finishAll")) {
			let finishAllButton = document.querySelector(".js-finishAll");
			finishAllButton.addEventListener("click", () => {
				tasks = tasks.map(task => ({
					...task,
					done: true,
				}));
				render();
			});
		}
	};

	const bindButtonsEvents = () => {
		toggleHideTasks();

		finishAllTasks();
	};

	const render = () => {
		renderTasks();
		renderButtons();

		bindButtonsEvents();
		bindRemoveEvents();
		bindDoneEvents();
	};

	const cleanInput = () => {
		document.querySelector(".js-addTaskInput").value = "";
	};
	const autoFocus = () => {
		document.querySelector(".js-addTaskInput").focus();
	};

	const onFormSubmit = event => {
		event.preventDefault();

		newTask = document.querySelector(".js-addTaskInput").value.trim();

		autoFocus();

		if (!newTask) {
			return;
		}

		addNewContent(newTask);
		cleanInput();
		render();
	};

	const addNewTask = () => {
		form = document.querySelector(".js-form");

		form.addEventListener("submit", event => {
			onFormSubmit(event);
		});
	};

	const init = () => {
		addNewTask();
		render();
	};

	init();
}
