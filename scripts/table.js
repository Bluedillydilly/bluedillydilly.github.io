

let Table = function () {
	let table = document.createElement("table");
	return table;
}

let addCaption = function (table, name) {
	let tcap = document.createElement("caption")
	let tcapName = document.createTextNode(name);
	tcap.appendChild(tcapName);
	table.appendChild(tcap);
}

let addHeaders = function (table, entry) {
	console.log("Entry: ", entry);
	let row = document.createElement("tr");
	for (let key in entry) {
		let th = document.createElement("th")
		let thText = document.createTextNode(key);
		th.append(thText);
		row.appendChild(th);
	}
	table.appendChild(row);

}

// gets values of a dict
// list of values
let valuesOf = function(d){
	return Object.keys(d).map(function(k){return d[k]})
}

let Row = function (entry) {
	let row = document.createElement("tr");
	for ( var value in valuesOf(entry) ) {
		let cell = row.insertCell();
		let cellText = document.createTextNode(value);
		cell.appendChild(cellText);
	}
	return row;
}

let addRows = function (table, entries) {
	for (var entry in entries) {
		table.appendChild( Row(entry) );
	}
}


// data in the form of:
// [{ 'name':'Dylan', 'age':'20', ...  }, ...]
export function createTable (entries, name="table") {
	if (!entries) {
		//errorLog(createTable, "no valid table entries provided", "provided: "+entries);
	}
	else {
		console.log("Entries: ",entries);
	}
	let table = Table();
	table = document.querySelector("table");
	// table caption
	addCaption(table, name);
	// create table headers
	addHeaders(table, entries[0]);
	// create table rows
	addRows(table, entries);
	// add the table to the document
	document.appendChild(table);
}