// First i need to assign values to all my radio buttons
// this function calls the element I called "optionsRadios", 
// I just so happened to name it the same thing. 
// The if statements explains that is if any of the radios have been "checked" before hitting "sumbit"
// the computer will spit out the value That I gave it in the HTML page that is labeled "value"


function submitForm(){
    var form = new FormData(document.querySelector("#questionaire"))
    console.log(form.get("questionOne"));
    console.log(form.get("questionTwo"));
    console.log(form.get("questionThree"));
    console.log(form.get("questionFour"));
    console.log(form.get("questionFive"));
    var sum = +form.get("questionOne") + +form.get("questionTwo") + +form.get("questionThree") + +form.get("questionFour") + +form.get("questionFive");
    console.log(sum);
}