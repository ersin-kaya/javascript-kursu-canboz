let ogrenci = {
    ad: 'Can',
    yas: 29,
    email: 'cnboz@hotmail.com',
    sinif: 12,
    dersler: ['matematik', 'fizik', 'kimya'],
    login: function () {
        console.log('ogrenci giris yapti');
    },
    logout() {
        console.log('ogrenci cikis yapti');
    },
    printLessons() {
        console.log(this.dersler)
        // console.log(this);
        this.dersler.forEach(ders => { console.log(ders) });
    }
};

// console.log(this);
ogrenci.printLessons();
// ogrenci.login();
// ogrenci.logout();

