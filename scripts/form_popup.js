// JavaScript Document
// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('form_popup').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('form_popup').style.display = "none";
}
