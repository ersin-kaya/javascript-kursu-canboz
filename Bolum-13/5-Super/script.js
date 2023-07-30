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
    constructor(username, email, title) {
        super(username, email); //3. parent'ın içerisindeki constructor'ı çağırabilmek için super keyword'u ile bunları yollama gerekiyor, super'ın mantığı bu diyor...
        this.title = title; //2. constructor'ın içinde sadece bu satır yazarken hata alıyoruz ve şunu diyor: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    } //4. bunun mantığı ne? şimdi ben sub classta herhangi bir constructor kullanmazsam, 2 tane parametre yolladığımda otomatikmen türediği class'ın constructor'ı çalışır. fakat ekstra parametre kullanmak istiyorsam yani sub classa spesifik bir parametre tanımlamak istiyorsam, (ve bunu türettiğim yerden gönderiyorsam arkadaşlar parametreyi diyor...?) parent class'ın içerisine göndermem gereken parametreleri super ile parent'ın içerisindeki constructor'a yolluyorum, super tam olarak bu işe yarıyor. sub'dan parent'a super ile...

    deleteUser(silinecekUser) {
        users = users.filter(user => user.username !== silinecekUser.username);
    }
}

const can = new User('can', 'can@hotmail.com');
const cem = new User('cem', 'cem@gmail.com');
const admin = new Admin('admininiz', 'admin@gmail.com', 'YÖNETİCİ');

console.log(admin);

//1. şimdi ekstra olarak User'ın içerisinde bulunmayan bir property tanımlamak ve bunu parametre olarak yollamak istediğimde ne yapacağım?