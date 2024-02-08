const task = document.getElementById('task')
const inserisci = document.getElementById('inserisci')
const button = document.getElementById('button')
let singleTask;
let tasks = [];

inserisci.addEventListener('click', function (e) {
    if (task.value == '') {
        alert('Prima scrivi qualcosa!');
        return;
    }

    e.preventDefault
    aggiungi();
    scriviLista();
    cancellaForm();
});

const aggiungi = () => {
    singleTask = task.value;
    tasks.push(newTask);
    console.log(tasks)
}