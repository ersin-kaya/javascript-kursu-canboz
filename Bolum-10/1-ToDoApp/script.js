const addForm = document.querySelector('.add');
const listUl = document.querySelector('.todos');

const generateTemplate = toDo => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${toDo}</span>
    <i class="bi bi-trash3 delete"></i>
</li>`;
    return html;
};

addForm.addEventListener('submit', event => {
    event.preventDefault();
    const newToDo = addForm.add.value.trim(); //trimStart() + trimEnd() = trim() //baştaki ve sondaki boşlukları kırpar
    // console.log(newToDo);
    if (newToDo.length) { //length 0 değilse true döner, 0 ise false döner
        listUl.innerHTML += generateTemplate(newToDo);
        addForm.reset();
    }
});

listUl.addEventListener('click', event => {
    // console.log(event.target.classList.contains('delete'));
    // console.log(event.target.parentElement);
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
});