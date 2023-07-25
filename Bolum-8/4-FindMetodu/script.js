const points = [70, 75, 25, 35, 10, 80, 27];

// id bulmada, bir data geldi içerisinde bir değeri bulmada vs kullanırız

//bunun bir handikapı var, içerisindeki koşul true olduğunda ilkini getirir diğerlerine(sonrakilere) bakmaz bile, sonrasında koşulu sağlayan farklı değerlerde varsa bu sefer sıkıntıya girebilirsiniz find kullanırken. öyle bir değer bulmaya kalktığınızda filter metodundan yararlanabilirsiniz


const highPoint = points.find(point => {
    return point > 70;
});
console.log(highPoint); //75'i bastı, 80'i kaçırmış oldu
// koşulu sağlayan ilk değeri döndürüyor


