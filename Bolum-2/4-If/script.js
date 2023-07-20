const yas = 20;

if (yas > 18) {
    console.log("18 yaşından büyüktür.");
}

const isimler = ['can', 'tolga', 'cem'];

if (isimler.length > 2) {
    console.log("İşte benim öğrencilerim");
}

const sifre = "abcdk";

if (sifre.length >= 8) {
    console.log("Şifre yeterince uzun");
} else {
    console.log("Şifre en az 8 karakter olmalıdır");
}

const yeniSifre = "asdfasdfasdf"

if (yeniSifre.length >= 12) {
    console.log("Şifre güçlü")
} else if (yeniSifre.length >= 8) {
    console.log("Şifre yeterli")
} else {
    console.log("Şifre en az 8 karakter olmalıdır")
}

