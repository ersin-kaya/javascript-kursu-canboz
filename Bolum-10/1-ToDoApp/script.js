const addForm = document.querySelector('.add');



addForm.addEventListener('submit', event => {
    event.preventDefault();
    const newToDo = addForm.add.value.trim(); //trimStart() + trimEnd() = trim() //baştaki ve sondaki boşlukları kırpar
    console.log(newToDo);
});