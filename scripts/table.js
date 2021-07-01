

function Table () {
	let table = document.createElement("table");
	return table;
}

let addCaption = function (table, name) {
	let tcap = table.createCaption();
	let tcapName = document.createTextNode(name);
	tcap.appendChild(tcapName);
};

let addHeaders = function (table, headerList) {
	console.log(`Adding header '${headerList}' to table`);
	let headers = table.createTHead();
	let row = headers.insertRow();
	headerList.forEach(h => {
		let th = document.createElement("th");
		let thText = document.createTextNode(h);
		th.appendChild(thText);
		row.appendChild(th);
	});
	table.appendChild(row);

};

let addRows = function (table, entries) {
	entries.forEach(entry => Row(table, entry));
};

let Row = function (table, entry) {
	let row = table.insertRow();
	valuesOf(entry).forEach( v => {
		let cell = row.insertCell();
		let cellText = document.createTextNode(v);
		cell.appendChild(cellText);
	});
};

// gets values of a dict
// list of values
let valuesOf = (d) => Object.keys(d).map( k => d[k]);



// data in the form of:
// [{ 'name':'Dylan', 'age':'20', ...  }, ...]
export function createTable (id, entries, name="default table") {
	if (!entries) {
		//errorLog(createTable, "no valid table entries provided", "provided: "+entries);
	}
	else {
		console.log("Entries: ",entries);
	}
	let table = document.getElementById(id);
	// table caption
	addCaption(table, name);
	// create table headers
	addHeaders(table, Object.keys(entries[0]));
	// create table rows
	addRows(table, entries);
}

export function addPerson(tableId, entry)
{
	let table = document.getElementById(tableId);
	addRows(table, [entry]);
}