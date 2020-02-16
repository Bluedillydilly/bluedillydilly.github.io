import * as Table_m from "./table.js";

// Button related handler

let btnclick = function () {
	if (!this.value) {
		this.value=0;
	}
	this.value= parseInt(this.value,10) +1;
	console.log(this.value);
	console.log(this)
	this.innerText=this.value;
}

let buttonHandler = function () {
	console.log("Assigning button handlers...");
	let button = document.querySelector("#btn1");
	button.addEventListener("click", btnclick);
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
	console.log("Adding table...");
	let persons = [{'name':"Dylan", 'age':20, 'location':'NY'},
			{'name':'Ryan', 'age':18, 'location':'NH'},
			{'name':'Sarah', 'age':23, 'location':'IN'}];
	Table_m.createTable(persons,"People");
	console.log("Setting up finished.");
}

setup();
//document.getElementById("btn").addEventListener("onclick", btnclick);