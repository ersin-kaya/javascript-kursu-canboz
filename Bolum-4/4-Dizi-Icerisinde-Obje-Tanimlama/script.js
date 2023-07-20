// const dersler = [
//     { isim: 'matematik', puan: 90 },
//     { isim: 'fizik', puan: 89 },
//     { isim: 'kimya', puan: 88 }
// ]


let ogrenci = {
    ad: 'Can',
    yas: 29,
    email: 'cnboz@hotmail.com',
    sinif: 12,
    dersler: [{ isim: 'matematik', puan: 90 },
    { isim: 'fizik', puan: 89 },
    { isim: 'kimya', puan: 88 }],
    login: function () {
        console.log('ogrenci giris yapti');
    },
    logout() {
        console.log('ogrenci cikis yapti');
    },
    printLessons() {
        console.log(this.dersler)
        // console.log(this);
        this.dersler.forEach(ders => { console.log(ders.isim, ders.puan) });
    }
};

// console.log(this);
ogrenci.printLessons();
// ogrenci.login();
// ogrenci.logout();

