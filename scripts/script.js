import * as Table_m from "./table.js";
import * as Family_m from "./familyAdder.js";
import * as FamilyAdder_m from "./familyAdder.js";

// Button related handler

let btnclick = function () {
	let node = document.getElementById("amount");
	if (!node.value) {
		node.value=0;
	}
	node.value = parseInt(node.value,10) + 1;
	console.log(node)
	node.textContent=node.value;
}

let buttonHandler = function () {
	console.log("Assigning button handlers...");
	document.getElementById("btn1").addEventListener(
		"click", btnclick);
	document.getElementById("person-add-forms-submit").addEventListener(
		"click", Family_m.onclickNewFM);
	console.log("Assigned button assignHandlers.");
}

/////////////////////////////////////
// Assign event handlers


let assignHandlers = function () {
	console.log("Assigning handlers...");
	buttonHandler();
	console.log("Finished assigning handlers.");
}


///////////////////////////////////////


// wrapper to call functions
let setup = function () {
	console.log("Setting up...");
	assignHandlers();
	console.log("Adding table...");
	let persons = [
		{'name':"Dylan", 'age':20, 'location':'NY'},
		{'name':'Ryan', 'age':18, 'location':'NH'},
		{'name':'Sarah', 'age':23, 'location':'IN'}
	];
	Table_m.createTable("genTable", persons, "Family");
	console.log("Setting up finished.");
}

setup();
//Array.from(document.getElementsByClassName("btn")).forEach(element => {
//	element.addEventListener("onclick", btnclick)
//});