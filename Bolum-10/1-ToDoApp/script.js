const addForm = document.querySelector('.add');
const listUl = document.querySelector('.todos');
const searchInput = document.querySelector('.search input'); //böyle veya..
// const searchInput2 = document.querySelector('.search').search; //search form'unun altındaki search name'li input fakat bu çok okunaklı değil gibi şu an
// console.log(searchInput.outerHTML);
// console.log(searchInput2.outerHTML);

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

const filterToDos = searchValue => {
    // console.log(searchValue);
    // console.log(listUl.children);
    // console.log(Array.from(listUl.children));
    const listElements = Array.from(listUl.children);
    // console.log(listElements);

    //içermeyenleri gizlemek için
    // console.log(listElements.filter(toDo => !toDo.textContent.includes(searchValue))); //ile içermeyenleri alıyoruz
    listElements.filter(toDo => !toDo.textContent.toLowerCase().includes(searchValue))
        .forEach(toDo => toDo.classList.add('filtered')); //ardından foreach ile bunları dönerek filtered class'ını ekliyoruz //aşağıda not yazıyor, büyük-küçük harf kontrolünü atlatmak için toLowerCase


    //içerenleri göstermek için (örneğin qwertyxyz girdin hepsi gizlendi ama silince gelmiyordu...)
    listElements.filter(toDo => toDo.textContent.toLowerCase().includes(searchValue))
        .forEach(toDo => toDo.classList.remove('filtered')); //aşağıda not yazıyor, büyük-küçük harf kontrolünü atlatmak için toLowerCase

};

searchInput.addEventListener('keyup', () => {
    const searchValue = searchInput.value.trim().toLowerCase(); //büyük-küçük harf kontrolünün önüne geçmek için gönderirkende kontrol ederkende örneğin küçük harf olarak bakacağız o yüzden toLowerCase()
    // console.log(searchValue);
    filterToDos(searchValue);
});