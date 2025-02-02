
const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
    "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z"
];

const numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
    "~","`","!","@","#","$","%","^","&","*","(",")",
    "_","-","+","=","}","]",",","|",":",";","<",">",".","?","/"
];

// let password1El = document.getElementById('pass1-el')
// let password2El = document.getElementById('pass2-el')

let mainBoxEl = document.getElementById('main-box')

console.log(mainBoxEl)

function generatePass() {
    let randChar = Math.floor(Math.random() * characters.length);
    let randNumb = Math.floor(Math.random() * numbers.length);
    let randSymb = Math.floor(Math.random() * symbols.length);
    
    console.log(randChar, randNumb, randSymb)
}