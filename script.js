const checked = document.getElementById("checked");
const copy = document.getElementById("copy");


const passwordBox = document.getElementById("password");
const length = 12;

// const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "!@#$%^^&*()_+~|}{[]<>/-=?.,";

const allChars = upperCase + lowerCase + numbers + symbol;

const createPassword = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length>password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}


const copyPassword = () => {
    passwordBox.select();
    document.execCommand("copy");
    copy.style.display = "none";
    checked.style.display = "block";
    setTimeout(()=>{
        checked.style.display = "none";
        copy.style.display = "block";
    }, 3000)
}