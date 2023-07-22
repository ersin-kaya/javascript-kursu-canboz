const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('Tıklandı');
// });

//tıklanan elemanın listeden silinmesi
// const liElemanlari = document.querySelectorAll('li');
// liElemanlari.forEach(liElemani => {
//     liElemani.addEventListener('click', e => {
//         // console.log(`${liElemani.textContent} tiklandi`); // e yerine () yazınca böyle erişmiştik
//         // console.log(e);
//         // console.log(e.target);
//         e.target.remove();
//     });
// });

const ul = document.querySelector('ul');
// ul.remove();
ul.addEventListener('click', e => {
    // console.log(e);
    // console.log(e.target);
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

//ekle butonuna basınca yeni eleman eklenmesi
button.addEventListener('click', e => {
    const li = document.createElement('li');
    li.textContent = 'JavaScript';

    //2 yöntem var: en başına ya da en sonuna ekleyebiliriz
    // ul.append(li); //append sona ekler
    ul.prepend(li); //prepend başa ekler
});