const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('Tıklandı');
// });


//anlattıı.... li için yazdığımız eventi açtık, bu durumda hem bu hem de onun üstünde olan ul için yazılan event çalışıyordu, bunun önüne (asıl element li olduğu için ona yazdık) e.stopPropagation() ekleyerek geçmiş olduk.
//ancaaaak, şimdi burada anladığım kadarıyla, bu iç içe olanların kabarcıklanmasına(bubbling) eventbubbling deniyor

//!!!!!!şu yazıya kesinlike bak. bu dersin konularını net bir şekilde anlatıyor. KISACA ANLADIĞIM KADARIYLA BEN ASLINDA EVENTDELEGATİON OLAYINI BİR ÖNCEKİ COMMİTTE UL ETİKETİNE .REMOVE() YAPTIRARAK YAZMIŞ OLDUM
// https://sinemsungur.medium.com/nedir-bu-event-delegation-bb0ce58f61db



//Bu, önce en içteki eleman tarafından yakalanan ve sonra dış elemanlara yayılan Event Bubbling’tir.

//Kutu-3'e tıkladığımızda önce Kutu-1'i, ardından Kutu-2'yi ve son olarak tıkladığımız elemanı tetikler. Capturing dediğimiz şey, yukarıdan aşağıya (olayı tetiklediğimiz öğe) doğrudur.

//Default olarak Javascript, event yayılımını Bubble olarak ayarlar. Capturing kullanmak istiyorsak, addEventListener methodundaki 3. argümanı true olarak ayarlamamız gerekir.

//Ek bilgi: stopPropagation (), Bubbling ve Capturing aşamalarında geçerli eventin daha fazla yayılmasını önler. Bir elementteki event tetiklendiğinde onun üst elementlerinde de olayın tetiklenmesinin önüne geçmek için kullanabilirsiniz.

// Event delegationın en büyük faydası, yönetmek için daha az fonksiyon kullanırken aynı zamanda hafızada daha az yer kaplamasıdır!(anladığım kadarıyla eventi her li için değil de ul altında yazmamız yani eventi parent'a eklememiz, yukarıdaki linkteki yazıyı incele anlarsın)

//tıklanan elemanın listeden silinmesi
const liElemanlari = document.querySelectorAll('li');
liElemanlari.forEach(liElemani => {
    liElemani.addEventListener('click', e => {
        // console.log(`${liElemani.textContent} tiklandi`); // e yerine () yazınca böyle erişmiştik
        // console.log(e);
        e.stopPropagation();
        console.log(e.target);
        e.target.remove();
    });
});

const ul = document.querySelector('ul');
// ul.remove();
ul.addEventListener('click', e => {
    // console.log(e);
    console.log(e.target);
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