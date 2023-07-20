const yeniSifre = "asdfasdfs!dfs"

if (yeniSifre.length >= 12 && yeniSifre.includes('!')) {
    console.log("Şifre bayağı güçlü")
} else if (yeniSifre.length >= 8) {
    console.log("Şifre yeterli")
} else {
    console.log("Şifre en az 8 karakter olmalıdır")
}

const control = false;
if (!control) {
    console.log('Kontrol başarılı')
}