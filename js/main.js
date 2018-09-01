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
    
    if (total >= 0 && total <= 60) {
        alert("You failed")
      }
       else if (total>=61  && total <= 70 ) {
        alert("Pass")
      }
        else if (total >= 76 && total <= 89) {
            alert("Great Job! You Pass")
}
      else {
          alert("You got an A!!")
      }
    }

      

    //window.location.href = 