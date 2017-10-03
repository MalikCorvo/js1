var name = prompt("What is your name?", "John Smith");

function myFunction(){
var color = prompt("What's your favorite color? Type either: Red, Yellow, Blue, Green, White, Black, Purple, Pink, Orange, or Brown");

if (color === "Red" || color === "red" ) {
  alert("The color of power, " + name + " >:D");
}

else if (color === "Yellow" || color === "yellow") {
  alert("The color of happiness, " + name + " :]");
}

else if (color === "Blue" || color === "blue") {
  alert("The color of placidity, " + name + " ^^");
}

else if (color === "Green" || color === "green") {
  alert("The color of nature, " + name + " ~^_^~");
}

else if (color === "White" || color === "white") {
  alert("All the colors, " + name + "!");
}

else if (color === "Black" || color === "black") {
  alert("The absence of color, " + name + ".");
}

else if (color === "Purple" || color === "purple") {
  alert("Such a regal color, "+ name + " *.*");
}

else if (color === "Pink" || color === "pink") {
  alert("Cute, " + name + " :3");
}

else if (color === "Orange" || color === "orange") {
  alert("Orange you glad you picked this one, " + name + "??");
}

else if (color === "Brown" || color === "brown") {
  alert("Yum, I crave chocolate now... Thanks, " + name)
}

else {
  alert("Not a valid answer, " + name);
  myFunction();

  // continue;
}
}
myFunction();

/* Or...
var correct = false;
var name = prompt("Name?", "herp Derp");
var color = prompt("what color?", "colors");
color = color.toString();
switch(color) {
case "blue":
alert(name + ", your favorite color is " + color);
break;
defeault:
alert("you're wrong");
break;
}

correct ? "You did it!" : "Try again, kiddo ):"
*/
