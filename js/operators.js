var name = prompt("What is your name?", "John Smith");

var color = prompt("What's your favorite color? Type either: Red, Yellow, Blue, Green, White, Black, Purple, Pink, Orange, or Brown");

if (color === "Red" || color === "red" ) {
  alert("The color of power, " + name + " >:D");
  // break;
}

else if (color === "Yellow" || color === "yellow") {
  alert("The color of happiness, " + name + " :]");
  // break;
}

else if (color === "Blue" || color === "blue") {
  // break;
  alert("The color of placidity, " + name + " ^^");
}

else if (color === "Green" || color === "green") {
  alert("The color of nature, " + name + " ~^_^~");
  // break;
}

else if (color === "White" || color === "white") {
  alert("All the colors, " + name + "!");
  // break;
}

else if (color === "Black" || color === "black") {
  alert("The absence of color, " + name + ".");
  // break;
}

else if (color === "Purple" || color === "purple") {
  alert("Such a regal color, "+ name + " *.*");
  // break;
}

else if (color === "Pink" || color === "pink") {
  alert("Cute, " + name + " :3");
  // break;
}

else if (color === "Orange" || color === "orange") {
  alert("Orange you glad you picked this one, " + name + "??");
  // break;
}

else if (color === "Brown" || color === "brown") {
  alert("Yum, I crave chocolate now... Thanks, " + name)
  // break;
}

else {
  alert("Not a valid answer, " + name);
  // continue;
}
