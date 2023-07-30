class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    login() {
        console.log(`${this.username} giriş yaptı`);
        return this;
    }
    logout() {

        console.log(`${this.username} çıkış yaptı`);
        return this;
    }
}

class Admin extends User {

}

const can = new User('can', 'can@hotmail.com');
const cem = new User('cem', 'cem@gmail.com');
const admin = new Admin('admininiz', 'admin@gmail.com'); //Eğer ben Admin class'ına constructor vermediysem, burada verdiğim parametreler gider onun türediği sınıftaki constructor'a parametre olarak geçer

console.log(can, cem, admin);
admin.login();