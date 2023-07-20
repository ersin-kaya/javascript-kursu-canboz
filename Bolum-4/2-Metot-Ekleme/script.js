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
};

ogrenci.login();
ogrenci.logout();

