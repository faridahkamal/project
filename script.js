function sayHello() {
    alert("Hello, Welcome to my food blog...Kuchisabishii");
}

// Call function on click of the button
document.getElementById("myBtn").onclick = sayHello;

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "#556B2F";
  } else {
   document.body.style.backgroundColor = "#FCF5E5";
  }
}


var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes