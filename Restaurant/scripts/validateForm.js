/*
File: validateForm.js
Creator:  Christopher Aguirre
Date Created:  Dec. 28, 2019
Last Modified: December 30, 2019
*/

function validateForm() {
  clearErrors();

  if (!nameValid()) {
    return false;
  }
  if (!emailValid()){
    return false;
  }
  if (!phoneValid()) {
    return false;
  }

  alert("Information Valid!");
}



function nameValid() {
  var name = document.getElementById("name").value;

  if (name == "") {
    alert("Enter your name.")
    document.getElementById("name").parentElement.className="hasError form-group";
    document.getElementById("name").focus();
    return false;
  }
  return true;
}

function emailValid() {
  var email = document.getElementById("email").value;
  if (email.indexOf("@") == -1 || email[0] == "@" || email[0] == "." || email[email.length-1] == "." || email[email.length-1] == "@"
    || email[email.indexOf("@")+1] == ".") {
    alert("You did not enter a valid email address.");
    document.getElementById("email").parentElement.className="hasError form-group";
    document.getElementById("email").focus();
    return false;
  }
  return true;

}

function phoneValid() {
  var phone = document.getElementById("phone").value;

  if (phone == "" || phone.length<10) {
    alert("Enter a valid phone number with an area code.")
    document.getElementById("phone").parentElement.className="hasError form-group";
    document.getElementById("phone").focus();
    return false;
  }
  return true;
}

function clearErrors() {
  document.getElementById("email").parentElement.className="form-group";
  document.getElementById("name").parentElement.className="form-group";
  document.getElementById("phone").parentElement.className="form-group";
}
