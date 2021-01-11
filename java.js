// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event listeners
todoButton.addEventListener('click',addToDo);
todoList.addEventListener('click', deleteCheck);

// Functions
function addToDo(event){
    // Prevent browser from refreshing
    event.preventDefault();
    // Create todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create li
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);
    // Create check button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    // Create trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append the todoDiv to todoList
    todoList.appendChild(todoDiv);
    // Clear input value
    todoInput.value = "";
}

function deleteCheck(event){
    const item = event.target;
    //Delete todo
    if(item.classList[0] === 'trash-btn'){
        const toDoItem = item.parentElement;
        toDoItem.remove();
    }
    if(item.classList[0] === 'complete-btn'){
        const toDoItem = item.parentElement;
        toDoItem.classList.toggle('completed');
    }
}