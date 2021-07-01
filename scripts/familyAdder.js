import { addPerson } from "./table.js";


// make an onclick handler
export let onclickNewFM = function () {
    // get name field value
    let name = document.getElementById("person-add-name").value;
    console.log(name);
    if (!validateName(name))
    {
        // display some warning incorrect age
        console.log("Invalid name");
        return;
    }
    

    // get age field value
    let age = document.getElementById("person-add-age").value;
    console.log(age);
    if (!validateAge(age))
    {
        // display some warning incorrect age
        console.log("Invalid age");
        return;
    }
    // get location field value
    let loc = document.getElementById("person-add-location").value;
    console.log(loc);
    if (!validateLoc(loc))
    {
        // display some warning incorrect age
        console.log("Invalid location");
        return;
    }

    // add new entry to family table
    let newEntry = {'name':name, 'age':age, 'location':loc};
    addPerson("genTable", newEntry);
}

let validateAge = function (age) {
    let a = parseInt(age);
    return !(isNaN(a) || a < 0);
};

let validateLoc = function (loc) {
    return true;
};

let validateName = function (name) {
    return true;
};

// assign the handler to the forms



export function NewFM(member)
{
    
}