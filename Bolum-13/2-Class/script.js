class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    login() {
        return `${this.username} giriş yaptı`;
    }
    logout() {
        return `${this.username} çıkış yaptı`;
    }
}

const can = new User('can', 'can@hotmail.com');
const cem = new User('cem', 'cem@gmail.com');
console.log(can.login(), cem.logout());