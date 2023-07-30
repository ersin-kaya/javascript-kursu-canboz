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
    deleteUser(silinecekUser) {
        users = users.filter(user => user.username !== silinecekUser.username);
    }
}

const can = new User('can', 'can@hotmail.com');
const cem = new User('cem', 'cem@gmail.com');
const admin = new Admin('admininiz', 'admin@gmail.com');

console.log(admin);