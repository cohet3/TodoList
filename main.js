const todos= JSON.parse(localStorage.getItem('todos')) || [];

const render = () =>{
    const todoList = document.getElementById('todo-list');
    const todosTemplate = todos.map(t => '<li>' + t + '</li>')
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li')
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento)
            todos.splice(i, 1)
            actualizaTodos()
            render()
        })
    })
}
const actualizaTodos = () => {
        const todoStrings = JSON.stringify(todos)
        localStorage.setItem('todos',todoStrings)
}
window.onload = () => {
    render()
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        actualizaTodos()
        render()
    }
}
const timestamp = Date.now();
const dateObject = new Date(timestamp);

const year = dateObject.getFullYear();
const month = dateObject.getMonth() + 1; // Months are zero-indexed
const day = dateObject.getDate();
const hours = dateObject.getHours();
const minutes = dateObject.getMinutes();
const seconds = dateObject.getSeconds();

const currentDate = new Date();
const formattedDate = currentDate.toLocaleString();

console.log(formattedDate)

const dateElement = document.getElementById('current-date-time');

// Update the element's content with the formatted date and time
dateElement.textContent = formattedDate;

