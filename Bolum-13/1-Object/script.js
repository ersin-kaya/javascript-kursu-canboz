const userOne = {
    username: 'Can',
    email: 'can@hotmail.com',
    login() {
        console.log('Can Boz giriş yaptı');
    },
    logout() {
        console.log('Can Boz çıkış yaptı');
    },
};

console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = {
    username: 'Cem',
    email: 'cem@hotmail.com',
    login() {
        console.log('Cem giriş yaptı');
    },
    logout() {
        console.log('Cem çıkış yaptı');
    },
};


console.log(userTwo.email, userTwo.username);
userTwo.login();


const userThree = new User('Can', 'can@hotmail.com'); //User diye bir class tanımlayıp, bu şekilde kullanmak istiyoruz