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

const can = new User('can', 'can@hotmail.com');
const cem = new User('cem', 'cem@gmail.com');

can.login().logout().logout();
