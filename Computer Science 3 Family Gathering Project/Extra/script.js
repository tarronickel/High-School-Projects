/* Nicole Tarrol | 12/13/23 | This the the Javascript code for the invitation for the family gathering. */
let input = document.getElementById("input");
let error = document.getElementById("error");
function check(inputtxt) {
  var numbers = /^[0-9]+$/;
  if (inputtxt.value.match(numbers)) {
    inputtxt.value = "";
    error.innerHTML = "Please insert characters only";
  }
}

