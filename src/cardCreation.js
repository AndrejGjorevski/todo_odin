function getPriorityColor(priority) {
    switch(priority) {
        case "urgent":
            return "red";
        case "upcoming":
            return "blue";
        case "nonurgent":
            return "yellow";
        default:
            return "white";
    }
}

function createTodoCard(title, dueDate, priority) {
    const cardGrid = document.getElementById("grid-container");
    const cardDiv = document.createElement("div");
    const cardTitle = document.createElement("h3");
    const cardBodyDiv = document.createElement("div");
    const cardDueDate = document.createElement("p");
    const cardPriorityDiv = document.createElement("div");

    cardDiv.classList.add("card");
    cardTitle.classList.add("card-title");
    cardBodyDiv.classList.add("card-body");
    cardDueDate.classList.add("card-due-date");
    cardPriorityDiv.classList.add("priority-color");

    cardTitle.innerText = title;
    cardDueDate.innerText = dueDate;
    cardPriorityDiv.style.backgroundColor = getPriorityColor(priority);

    cardDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardDueDate);
    cardBodyDiv.appendChild(cardPriorityDiv);
    cardDiv.appendChild(cardBodyDiv);

    cardGrid.appendChild(cardDiv);
}

function createProjectCard(title, description, numTodo) {
    const cardGrid = document.getElementById("grid-container");
    const cardDiv = document.createElement("div");
    const cardTitle = document.createElement("div");
    const cardBodyDiv = document.createElement("div");
    const cardDescription = document.createElement("p");
    const cardTodoNumber = document.createElement("p");

    cardDiv.classList.add("card");
    cardTitle.classList.add("card-title");
    cardBodyDiv.classList.add("card-body");
    cardDescription.classList.add("card-description");
    cardTodoNumber.classList.add("card-todo-number");

    cardTitle.innerText = title;
    cardDescription.innerText = description;
    cardTodoNumber.innerText = "Tasks remaining: " + numTodo;

    cardDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardDescription);
    cardBodyDiv.appendChild(cardTodoNumber);
    cardDiv.appendChild(cardBodyDiv);

    cardGrid.appendChild(cardDiv);
}

export { createTodoCard, createProjectCard }