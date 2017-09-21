var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");

console.log(firstName);
alert(lastName);

{
  var dateString = prompt("When were you born? (MM/DD/YYYY)");
  var birthDate = new Date(dateString);
  var today = new Date();
  var age = today.getFullYear() - birthDate.getFullYear();
  alert("You're " + age + " this year. :D");
}
