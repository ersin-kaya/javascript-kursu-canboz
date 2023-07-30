class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    login() {
        // return `${this.username} giriş yaptı`;
        console.log(`${this.username} giriş yaptı`);
        return this;
    }
    logout() {

        console.log(`${this.username} çıkış yaptı`);
        return this;
        // return `${this.username} çıkış yaptı`;
    }
}

const can = new User('can', 'can@hotmail.com');
const cem = new User('cem', 'cem@gmail.com');
// console.log(can.login(), cem.logout());

can.login().logout(); //tabiki çalışmaz...(return string değeri vardı ama sonra değiştiriyoruz ve alttan devam)

console.log(can.login().logout()); //çalıştı, //peki şimdi giriş yaptı mesajınıda verdirelim

can.login().logout().logout(); //çalışıyorr
