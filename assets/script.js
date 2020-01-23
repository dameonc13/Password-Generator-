
var decrementEl = document.querySelector("#copy");
var decrementEl = document.querySelector("#pw");
var randompassword = "";
var random = "";
var randompw = "";

var usrinput = prompt("how long do you wnat your password? Must be between 8 and 128 characters?")

for (i = 7; i < 8; i++) {
if (usrinput < 8 || usrinput == "" ){

    usrinput = prompt("Password character must be  8 or greater")
    var tonum = parseInt(usrinput - 1)
     i = tonum;

}
}

var tonum = parseInt(usrinput - 1)
var insUpper = prompt("Do you want uppercase characters?")
var insLower = prompt("Do you want lowercase characters?")
var insSpc = prompt("Do you want special characters?")
var insNumb = prompt("Do you want number?")

/*if (insUpper || insLower || insSpc || insNumb == "" ){

    
}  */
var spcchar = "/^$.,|?*+().<>"
var capschar = "ABCDEFGHIJKLMNOPQRSTUVWZYZ"
var lowerchar = "abcdefghijklmnopqrstuvwxyz"
var numb = "1234567890"
var password = "";


// Function generates password based on user preference 
function generatepassword() {
    
    
    
    
    
    if (insLower == "yes") {
      
        
        for (var i = 0; i <= tonum / 2; i++) {

            password = password + lowerchar.charAt(Math.floor(Math.random() * Math.floor(lowerchar.length)));

        }
    }

    if (insUpper == "yes") {
        for (var i = 0; i <= tonum / 2; i++) {

            randompassword = randompassword + capschar.charAt(Math.floor(Math.random() * Math.floor(capschar.length)));

        }
    }

    if (insSpc == "yes") {
        for (var i = 0; i <= tonum / 2; i++) {

            random = random + spcchar.charAt(Math.floor(Math.random() * Math.floor(spcchar.length)));

        }
    }

    if (insNumb == "yes") {
        for (var i = 0; i <= tonum / 2; i++) {

            randompw = randompw + numb.charAt(Math.floor(Math.random() * Math.floor(numb.length)));


        }
    }

    

// takes all the characters and randomize it then writes to the document 
    var genpw = "";
    var pass = "";
    genpw = password + randompassword + randompw + random
    for (var i = 0; i <= tonum; i++) {
        pass = pass + genpw.charAt(Math.floor(Math.random() * Math.floor(genpw.length)));
    }


    var paragraph = document.getElementById("exampleFormControlTextarea1");
    paragraph.textContent = pass;




}





// btn, when click password is generated
pw.addEventListener("click", (event) => {

    event.preventDefault();
    generatepassword();

});

// btn, when click copy the password and reload the page thus deleting the password
copy.addEventListener("click", function () {
    event.preventDefault();
    document.getElementById("exampleFormControlTextarea1").select();

    document.execCommand("Copy");

    alert(" Password copied to clipboard!");

});

