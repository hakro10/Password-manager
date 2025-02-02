const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f",
    "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",
    "w","x","y","z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];

// let useCharsIsChecked = true;
let addSymbolsNumbers = false;
let password1El = document.getElementById("pass1-el");
let password2El = document.getElementById("pass2-el");
document.querySelector("#add-el").style.backgroundColor = "grey";
let dayThemeLogo = '🌞'
let nightThemeLogo = '🌜'
let btnDarkEl = document.getElementById("btnDark-el");
let btnLightEl = document.getElementById("btnLight-el");

function add() {
    if (addSymbolsNumbers === false) {
        addSymbolsNumbers = true;       
        document.querySelector("#add-el").style.backgroundColor = "#10B981";
        // console.log(addSymbolsNumbers);
    } else {
        addSymbolsNumbers = false;        
        document.querySelector("#add-el").style.backgroundColor = "grey";
        // console.log(addSymbolsNumbers);
    }
}

function generatePass() {

    getPass();

    function getPass() {
        let passwd = "";
        for (let i = 0; i < 15; i++) {
            if (addSymbolsNumbers) {
                let newCharList = characters + "," + numbers + "," + symbols;
                let newRandNumb = Math.floor(Math.random() * newCharList.length);
                passwd += newCharList[newRandNumb];
            } else {
                let randChar = Math.floor(Math.random() * characters.length);
                passwd += characters[randChar];
            }
    
            // password1El.textContent = passwd
        }
        return passwd



    // console.log(randChar, randNumb)
}
password1El.textContent = getPass()
password2El.textContent = getPass()

    // console.log(passwd);
}


function day() {
    document.querySelector('#h1').style.color = "black";
    document.querySelector('#main-box').style.backgroundColor = "#ECFDF5";
    document.querySelector('#btnLight-el').style.backgroundColor = "#ECFDF5";
    document.querySelector('.p1').style.color = '#6B7280';
    document.querySelector('footer').style.color = '#6B7280';
    document.querySelector('#main-box').style.boxShadow = "0 0 10px 10px #6B7280";
}

function night() {
    document.querySelector('#h1').style.color = "white";
    document.querySelector('#main-box').style.backgroundColor = "#1F2937";
    document.querySelector('#btnLight-el').style.backgroundColor = "#ECFDF5";
    document.querySelector('.p1').style.color = '#D5D4D8';
    document.querySelector('footer').style.color = '#D5D4D8';
    document.querySelector('#main-box').style.boxShadow = "0 0 10px 10px #6B7280";
}

