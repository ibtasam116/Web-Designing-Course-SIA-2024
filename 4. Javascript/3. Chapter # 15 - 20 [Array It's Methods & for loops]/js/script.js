// Pop      = Add end of array
// Push     = Remove end of array
// Shift    = Remove start of array
// Unshift  = Add start of array
// Slice    = Add center which select by user of array
// Splice   = Remove center which select by user of array

// // Array

let cities = [
  "Faisalabad",
  "Lahore",
  "karachi",
  "Islamabad",
  "Burewala",
  "Sheihupura",
  "Sheihupura",
  "Sheihupura",
  "Sheihupura",
  "Sheihupura",
  "Kashmir",
];

// var name1 = "Haroon";
// document.getElementById("id1").innerHTML = cities;

// for(inilization ; condition; increment/decrement)

for (let i = 0; i < cities.length; i++) {
  let num = i + 1;

  document.getElementById("originalTextBox").innerHTML +=
    num + ") " + cities[i] + "&nbsp;&nbsp;&nbsp;";
}

// console.log(cities)
// console.log(cities[2])

// cities[4] = "Burewala"
// cities[5] = "Sheikhupura"

// // We can not take the jump in Array (Add the values at the last of the array)

// cities[8] = "Kashmir"

// console.log(cities[0])
// console.log(cities[1])
// console.log(cities[2])
// console.log(cities[3])
// console.log(cities[4])
// console.log(cities[5])
// console.log(cities[6])
// console.log(cities[7])
// console.log(cities[8])

// --------------------------------------------------------------------------------------------------------------------------------------

// we can add the values at the last of the array (By using the {Push Method})
// Push = Add values last of the array

// let cities1 = ["Faisalabad","Lahore","karachi","Islamabad"]

// cities1.push("Burewala", "Sheikhupura", "Kashmir")

// console.log(cities1)

// --------------------------------------------------------------------------------------------------------------------------------------

// we can remove the values at the last of the array (By using the {Pop Method})
// Pop = Remove values last of the array

// let cities1 = ["Faisalabad","Lahore","karachi","Islamabad"]

// cities1.pop()

// console.log(cities1)

// --------------------------------------------------------------------------------------------------------------------------------------

// we can remove the values at the start of the array (By using the {shift Method})
// shift = Remove values start of the array

// let cities1 = ["Faisalabad","Lahore","karachi","Islamabad"]

// cities1.shift()
// cities1.shift()

// console.log(cities1)

// --------------------------------------------------------------------------------------------------------------------------------------

// // we can add the values at the start of the array (By using the {unshift Method})
// // unshift = Add values start of the array

// let cities1 = ["Faisalabad","Lahore","karachi","Islamabad"]

// cities1.unshift("Burewala", "Kashmir")

// console.log(cities1)

// --------------------------------------------------------------------------------------------------------------------------------------

// Splice   = Remove center which select by user of array

// let cities1 = ["Faisalabad","Lahore","karachi","Islamabad", "Burewala", "Sheikhupura", "Kashmir"]

// cities1.splice(5)
// cities1.splice(1, 4)

// After remove selected data and enter new data in 3rd parameter of array

// cities1.splice(1,3, "Numan", "Umer", "Hassan")

// Without remove  data and enter new data in 3rd parameter of array

// cities1.splice(1, 0, "Numan", "Umer", "Hassan")

// console.log(cities1)

// --------------------------------------------------------------------------------------------------------------------------------------

// Slice    = Add center which select by user of array

// let cities1 = ["Faisalabad","Lahore","karachi","Islamabad", "Burewala", "Sheikhupura", "Kashmir"]

// let newCities = cities1.slice() /* For copy the array from original array */

// newCities.splice(2, 3, "Ahmad", "Hamza")

// // This method is only used for coying the array
// console.log("cities1 =>", cities1)
// console.log("newCities =>", newCities)

// --------------------------------------------------------------------------------------------------------------------------------------

// For Loop

// let cities1 = ["Faisalabad", "Lahore", "karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"]

// // console.log(cities1.length)

// for (let i = 0; i < cities1.length; i++) {
//     console.log(i, cities1[i]);
// }

// for (let i = 0; i <= cities1.length; i++) {
//     console.log("With using this sign '<=' | ", i, cities1[i], "  |'Undefine showing at last'");
// }

// --------------------------------------------------------------------------------------------------------------------------------------

// Assignment Start

// Simple Alert

function simpleAlert() {
  prompt("Hello");
  alert("Muhammad IbTaSaM Jutt");

  document.getElementById("outputResult").innerHTML = "Muhammad IbTaSaM Jutt";
}

// Print My Name

function printMyName() {
  let myName = document.getElementById("inputText").value;

  if (!myName) {
    alert("Please Type Your Name.");

    document.getElementById("outputResult").innerHTML =
      "Please Type Your Name.";
    return;
  }

  document.getElementById("outputResult").innerHTML = myName;
}

// Print All Cities
function printAllCities() {
  document.getElementById("outputResult").innerHTML = "";

  for (let i = 0; i < cities.length; i++) {
    let num = i + 1;

    document.getElementById("outputResult").innerHTML +=
      num + ")" + cities[i] + "<br>";
  }
}

// Add Your City In List
function addYourCityInList() {
  // document.getElementById('outputResult').innerHTML = "";

  let City = document.getElementById("inputText").value;

  if (!City) {
    alert("Please Enter City Name.");
    return;
  }

  // let addNewCity = cities1.slice();   Error for copy the array

  cities.push(City);

  document.getElementById("outputResult").innerHTML =
    '<span style="Color: green; font-size: 14px;"> "' +
    City +
    '"</Span>' +
    " has been successfully added into list.";
}

// Generate Table

function generateTable() {
  document.getElementById("outputResult").innerHTML = "";

  let tableNumber = document.getElementById("inputText").value;

  if (!tableNumber) {
    alert("Please Enter Table Number");
    return;
  }

  let limit = +prompt("Give a limit of Table:");

  for (let i = 1; i <= limit; i++) {
    document.getElementById("outputResult").innerHTML +=
      tableNumber + " * " + i + " = " + tableNumber * i + "<br>";
  }
}

// Clear Input
const clearInput = () => {
  document.getElementById("inputText").value = "";
};

// Clear Output / Result

function clearOutput() {
  let output = "";

  document.getElementById("outputResult").innerHTML = output;
}

// Show Output
function showOutput(output) {
  document.getElementById("output").innerHTML = output;
}
