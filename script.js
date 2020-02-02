// Write the current date to the document
//let writeDate = function () {
//	let today = new Date();
//	document.write("<p>Document accessed on: "+ today.toString()+ "</p>");	
//	document.createElement("button");
//}

// Button related handler

let btnclick = function () {
	if (!this.value) {
		this.value=0;
	}
	this.value+=1;
	console.log(this.value);
	console.log(this)
	this.innerText=this.value;
}

let click2 = function () {
	if (!this.value) { 
		this.value=0;
	}
	this.value+=1;
	console.log("Value: ",this.value);
	this.innerText=this.value;
	console.log("Text content:", this.innerHTML);
}

let buttonHandler = function () {
	console.log("Assigning button handlers...")
	let buttons = document.getElementsByTagName("BUTTON");
	console.log("Buttons:",buttons);
	for (let btn of buttons) {
		console.log("btn:",btn.id);
		btn.addEventListener("click", btnclick);
	}
	console.log("Assigned button assignHandlers.");
}


/////////////////////////////////////


// Assign event handlers
let assignHandlers = function () {
	console.log("Assigning handlers...");
	buttonHandler();
	console.log("Finished assigning handlers.");
}

// wrapper to call functions
let setup = function () {
	console.log("Setting up...");
	assignHandlers();
	console.log("Setting up finished.");
}

//setup();
//document.getElementById("btn").addEventListener("onclick", btnclick);