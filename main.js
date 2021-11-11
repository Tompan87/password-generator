const password = document.getElementById("password");

const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";  
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";  
const numbers = "0123456789";  
const symbol = "~!@#$%^&*()_+=|"; 

const upperEl = document.getElementById("uppercase");  
const lowerEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");


const digits = document.getElementById("length");  



function getUppercase() { 
        return upperLetters[Math.floor(Math.random() * upperLetters.length)];  
}  
function getLowercase() {  
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];  
   }  
function getNumber() {  
    return numbers[Math.floor(Math.random() * numbers.length)];  
   }  
function getSymbol() {  
    return symbol[Math.floor(Math.random() * symbol.length)];  
   }  

//Two or more options need to be checked or else alert



//Generate password
function genPassword() {
    

   const passwordLength = digits.value -1 ;
   let password = "";
   for (var i = 0; i <= passwordLength; i++) {
    const x = generateX();
    password += x;
  }
      document.getElementById("password").value = password;
  
}

//Checkboxes
function generateX() {  
    const xs = [];  
    if (upperEl.checked) {  
     xs.push(getUppercase());  
    }  
    if (lowerEl.checked) {  
     xs.push(getLowercase());  
    }  
    if (numbersEl.checked) {  
     xs.push(getNumber());  
    }  
    if (symbolsEl.checked) {  
     xs.push(getSymbol());  
    }  
    if (xs.length === 0) return "";
    
    return xs[Math.floor(Math.random() * xs.length)];  

   }  
       
// Function Copy Password
function copyPassword(){
    const copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 10);
    document.execCommand("copy");

  if (copyText.value) {
      alert("Copied");
  } else {
    alert("Click Generate");
  }
}

