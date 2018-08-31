// First i need to assign values to all my radio buttons
// this function calls the element I called "optionsRadios", 
// I just so happened to name it the same thing. 
// The if statements explains that is if any of the radios have been "checked" before hitting "sumbit"
// the computer will spit out the value That I gave it in the HTML page that is labeled "value"

//
// document.getElementById("myButton").onclick = function () {
//     location.href = "Attribute.html";
// };
function submitForm(){
    var form = new FormData(document.querySelector("#questionaire"));
    console.log(form.get("questionOne"));
    console.log(form.get("questionTwo"));
    console.log(form.get("questionThree"));
    console.log(form.get("questionFour"));
    console.log(form.get("questionFive"));
    var sum = +form.get("questionOne") + +form.get("questionTwo") + +form.get("questionThree") + +form.get("questionFour") + +form.get("questionFive");
    console.log(sum);

       var total = sum;
        var nameInput = document.querySelector("#dummy").value;
     localStorage.setItem("total", total);
    localStorage.setItem("Name", nameInput);
 
    if (total >= 0 && total <= 2) {
        alert("You are Amiable")
      }
       else if (total>= 3 && total <= 5 ) {
        alert("You are Not Amiable")
      }
        else if (total >= 6 && total <= 8) {
            alert("you are probably amiable?")
}
      else {
          alert("you are definetly maybe amiable")
      }
    //window.location.href = "";


    }
