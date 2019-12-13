
var decrementEl = document.querySelector("#copy");
var decrementEl = document.querySelector("#pw");
var randompassword = "";

var usrinput = prompt("how long do you wnat your password? Must be between 8 and 128 characters?")
var tonum = parseInt(usrinput)
var insspc = prompt("Do you want special characters?")
var insnumb = prompt("Do you want number?")

var spcchar = ["/", "^", "$", ".", "|", "?", "*", "+", "(", ")", ".", "<", ">",]



// btn, when click password is generated
pw.addEventListener("click", function(){
    event.preventDefault();

if (insspc && insnumb == "yes"){

    document.execCommand("pw");
    randompassword = spcchar[Math.floor(Math.random()*spcchar.length)]+ Math.random().toString(36).substring(2, tonum +1) ;
    spcchar[Math.floor(Math.random()*spcchar.length)];
    var paragraph = document.getElementById("exampleFormControlTextarea1");
    paragraph.textContent += randompassword;

   





}
    
});
   
// btn, when click copy the password and reload the page thus deleting the password
    copy.addEventListener("click", function(){
        event.preventDefault();
        document.getElementById("exampleFormControlTextarea1").select();
    
        document.execCommand("Copy");
    
        alert(" Password copied to clipboard!"+ "\n"  +
            " Page will reload and password destroyed");
    
    });

console.log(randompassword);