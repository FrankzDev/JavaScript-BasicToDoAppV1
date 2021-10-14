const dateDay = document.getElementById('dateDay');
const dateNumber = document.getElementById('dateNumber');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('en', {day: 'numeric'});
    dateDay.textContent = date.toLocaleString('en', {weekday: 'long'});
    dateMonth.textContent = date.toLocaleString('en', {month: 'short'});
    dateYear.textContent = date.toLocaleString('en', {year: 'numeric'});
};

const addNewTask = event => {
    event.preventDefault();

    const { value } = event.target.taskName;

    if(!value) return;

    const task = document.createElement('div');
    task.classList.add('task', 'round-border');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;

    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const sort = () => {
    const done = [];
    const toDo = [];

    tasksContainer.childNodes.forEach( i => {
        i.classList.contains('done') ? done.push(i) : toDo.push(i);
    });
    return [...toDo, ...done];
};


const clearTasks = () => {
    while (tasksContainer.firstChild) {
        tasksContainer.removeChild(tasksContainer.lastChild);
    }
};


const renderOrderedTasks = () => {
    sort().forEach(i => tasksContainer.appendChild(i));
};


setDate();