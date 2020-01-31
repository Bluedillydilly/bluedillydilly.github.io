// Write the current date to the document
let writeDate = function () {
	let today = new Date();
	document.write("<p>Document accessed on: "+ today.toString()+ "</p>");	
}

// Opens a new document and writes 'Hello World!' to it
let hello = function () {
	let w = window.open();
	let d = w.document; // get the document of the window
	d.write("<h1>Hello world!</h1>"); // write to the document
	d.close();
}

// change the background color of the document
let changeBG = function () {
	document.bgColor = "#DEADDC";
}


// writes the URL to the document
let writeURL = function () {
	document.write("Location of this document: ", document.URL);
}

// Assign event handlers
let assignHandlers = function () {
	console.log("HELLO");
	var score = document.getElementById("a1");
	console.log("Score:"+score.textContent);
	score.addEventListener("onclick", function(e) {console.log(e)});
	var mydiv = document.getElementById("mydiv");
	mydiv.addEventListener("mousedown", function () {alert(a1.value)});
}


////////////////////////////////

// wrapper to call functions
let setup = function () {
	writeDate();
	//hello();
	changeBG();
	writeURL();
	assignHandlers();
}
//assignHandlers();

function onclick () {
	console.log("Button was clicked!");
}
