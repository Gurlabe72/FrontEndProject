// First i need to assign values to all my radio buttons
// this function calls the element I called "optionsRadios", 
// I just so happened to name it the same thing. 
// The if statements explains that is if any of the radios have been "checked" before hitting "sumbit"
// the computer will spit out the value That I gave it in the HTML page that is labeled "value"

//
// document.getElementById("myButton").onclick = function () {
//     location.href = "Attribute.html";
// };

function isChecked (){
    var questionOne = document.getElementsByName('questionOne').checked;
    var questionTwo = document.getElementsByName('questionTwo').checked;
    var questionThree = document.getElementsByName('questionThree').checked;
    var questionFour = document.getElementsByName('questionFour').checked;

    if ("questionOne"== false && "questionTwo"==false && "questionThree"== false && "questionFour"==false) {
        alert('Please check to see if you answered all the question');
        return false;

    }
    else {
        return true;
    }
}
//This function pinpoints data from the #questionaire 
function submitForm(){
    //form variable accesses the form data for every question.
    var form = new FormData(document.querySelector("#questionaire"));
    //sum variable utilizes the form and pinpoints what value it would like to add 
    var sum = +form.get("questionOne") + +form.get("questionTwo") + +form.get("questionThree") + 
                +form.get("questionFour") + +form.get("questionFive");
    //Output variable 
    var total = sum;
    //Our Local Storage variable 
    var nameInput = document.querySelector("#dummy").value;
                     localStorage.setItem("total", total);
                    localStorage.setItem("Name", nameInput);

//This 'if' statement will analyze the outcome of the function and alert you with your personality 
//Highest score you can receive in this this assessment is 15. So I split the score ranges into
//four different categories. 
    if (total >= 0 && total <= 4 {
        alert("You are Analytical")
      }
       else if (total>=5  && total <= 8) {
        alert("You ar a driver")
      }
        else if (total >= 8 && total <= 12) {
            alert("You are amiable")
}
      else {
          alert("You are expressive")
      }
    }

      

    //window.location.href =