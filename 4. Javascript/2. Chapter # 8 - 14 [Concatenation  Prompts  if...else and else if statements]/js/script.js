

// Get UserName From User

// let userName = prompt('Enter User Name.');

// document.getElementById('userNameId').innerHTML = userName;

// window.onload = function () {

//     let userName = prompt('Enter User Name.');

//     document.getElementById('showUserName').innerHTML = userName;
// }

// -----------------------------------------------------------

// Concatenate Some String
document.getElementById('concatenateSomeString').onclick = function () {

    let message = "Good day";
    let name = "IbTaSaM"
    let banger = "!"

    let statement = "let message = " + message + ";<br>let name = " + name + ";<br>let banger = " + banger + ";";
    document.getElementById('originalStatement').innerHTML = statement;

    document.getElementById('outputResult').innerHTML = message + " " + name + " " + banger;

    /* document.write */
    // document.write(statement);

    // document.write( "<br><br>" + message + " " + name + " " + banger) 
}

// -----------------------------------------------------------

// Ask Name From User 
document.getElementById('askNameFromUser').onclick = function () {

    let message = "Good Day";
    let firstName = prompt('Enter First Name.');
    let lastName = prompt('Enter Second Name.');
    let banger = "!";

    let fullName = firstName + " " + lastName;

    let statement = "let message = 'Good Day'; <br>let firstName = prompt('" + firstName + "'); <br>let lastName = prompt('" + lastName + "');" + "<br>let fullName = " + firstName + " " + lastName + "; <br>let banger = '!';" + ";";
    document.getElementById('originalStatement').innerHTML = statement;

    document.getElementById('outputResult').innerHTML = message + " " + fullName + " " + banger;
}

// -----------------------------------------------------------

// Comparison Operators
document.getElementById('comparisonOperators').onclick = function () {

    let value1 = +prompt('Enter First Value');
    if (value1 == 0) {
        alert('Please Enter First value');

        let statement = "let value1 = prompt('Enter First Value'); <br> if (Undefine === 0) { <br> alert('Please Enter First Value'); <br> }";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "Please Enter First Value."
        document.getElementById('outputResult').innerHTML = output;

        return;
    }

    let value2 = +prompt('Enter Second Value');
    if (value2 == 0) {
        alert('Please Enter Second Value');

        let statement = "let value2 = prompt('Enter Second Value'); <br> if (" + value1 + " === Undefine) { <br> alert('Please Enter Second Value'); <br> }";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "Please Enter Second Value."
        document.getElementById('outputResult').innerHTML = output;

        return;
    }

    if (value1 === value2) {

        let statement = "let value1 = prompt('Enter First Value'); <br> let value2 = prompt('Enter Second Value'); <br> if ( " + value1 + " === " + value2 + ") { <br> let output = 'Values are equal!' <br> }";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "Values are equal!"
        document.getElementById('outputResult').innerHTML = output;
    }
    else {

        let statement = "let value1 = prompt('Enter First Value'); <br> let value2 = prompt('Enter Second Value'); <br> if ( " + value1 + " !== " + value2 + ") { <br> let output = 'Both values are not equal!' <br> }";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "Both values are not equal!"
        document.getElementById('outputResult').innerHTML = output;
    }
}

// -----------------------------------------------------------

// If Else If
document.getElementById('ifElseIf').onclick = function () {

    let num1 = +prompt('Enter First Number:');
    if (num1 == 0) {

        alert('Please Enter First Number.');

        let statement = "let num1 = +prompt('Enter First Number'); <br> if (Undefine === 0) { <br> alert('Please Enter First Number'); <br> }";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "Please Enter First Number."
        document.getElementById('outputResult').innerHTML = output;

        return;
    }

    let num2 = +prompt('Enter Second Number:');
    if (num2 == 0) {

        alert('Please Enter Second Number.');

        let statement = "let num2 = +prompt('Enter Second Number'); <br> if (" + num1 + " === Undefine) { <br> alert('Please Enter Second Number'); <br> }";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "Please Enter Second Number."
        document.getElementById('outputResult').innerHTML = output;

        return;
    }

    if (num1 === num2) {

        let statement = "let num1 = prompt('Enter First Number'); <br> let num2 = prompt('Enter Second Number'); <br> if ( " + num1 + " === " + num2 + ") { <br> let output = 'Number are equal!' <br> }";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "Number are equal!"
        document.getElementById('outputResult').innerHTML = output;
    }
    else if (num1 >= num2) {

        let statement = "let num1 = prompt('Enter First Number'); <br> let num2 = prompt('Enter Second Number'); <br> if ( " + num1 + " >= " + num2 + ") { <br> let output = 'Numer one greater than and equal to number two.' <br> }";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "Numer one greater than and equal to number two."
        document.getElementById('outputResult').innerHTML = output;
    }
    else if (num1 <= num2) {

        let statement = "let num1 = prompt('Enter First Number'); <br> let num2 = prompt('Enter Second Number'); <br> if ( " + num1 + " <= " + num2 + ") { <br> let output = 'Number one smaller than and equal to number two.' <br> }";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "Number one smaller than and equal to number two."
        document.getElementById('outputResult').innerHTML = output;
    }
    else {
        alert('Number are not equal.')

        let statement = "let num1 = prompt('Enter First Number'); <br> let num2 = prompt('Enter Second Number'); <br> if ( " + num1 + " !== " + num2 + ") { <br> alert('Number are not equal!') <br> let output = 'Number are not equal!' <br> }";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "Number are not equal!"
        document.getElementById('outputResult').innerHTML = output;
    }
}

// -----------------------------------------------------------

// Testing Sets of Conditions
document.getElementById('testSetOfConditions').onclick = function () {

    let age = +prompt("Your Age?");
    if (age == 0) {

        alert("Please Enter you age.");

        let statement = "let age = +prompt('Your Age?'); <br> if (undefined === 0) { <br> alert('Please Enter Your Age.'); <br> }";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "Please Enter Your Age."
        document.getElementById('outputResult').innerHTML = output;

        return;
    }

    let weight = +prompt("Your Weight?");
    if (weight == 0) {
        alert("Please Enter You weight.");

        let statement = "let weight = +prompt('Your Weight?'); <br> if (undefined === 0) { <br> alert('Please Enter Your weight.'); <br> }";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "Please Enter Your weight."
        document.getElementById('outputResult').innerHTML = output;

        return;
    }

    if (age >= 18 && weight <= 70) {

        let statement = "let age = +prompt('Your Age?'); <br> let weight = +prompt('Your Weight?'); <br> if ( " + age + " >= 18 " + " && " + weight + " <= 70 ) { <br> let output = 'You're a smart man.' <br> }";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "You're a smart man."
        document.getElementById('outputResult').innerHTML = output;

    }
    else if (age >= 18 && weight > 70) {

        let statement = "let age = +prompt('Your Age?'); <br> let weight = +prompt('Your Weight?'); <br> else if ( " + age + " >= 18 " + " && " + weight + " > 70 ) { <br> let output = 'You're a fat guy.' <br> }";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "You're a fat guy."
        document.getElementById('outputResult').innerHTML = output;

    }
    // if ( " + age + " < 10 " + " && " + weight + " < 25 )
    else {

        let statement = "let age = +prompt('Your Age?'); <br> let weight = +prompt('Your Weight?'); <br> else { <br> let output = 'You're a baby.' <br> }";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "You're a baby."
        document.getElementById('outputResult').innerHTML = output;
    }
}

// -----------------------------------------------------------

// if Statement Nested
document.getElementById('ifStatementNested').onclick = function () {

    let age = +prompt("Your age?");
    if (age == 0) {
        alert("Please Enter your age.")

        let statement = "let age = +prompt('Your Age?'); <br> if (undefined === 0) { <br> alert('Please Enter Your Age.'); <br> }";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "Please Enter Your Age."
        document.getElementById('outputResult').innerHTML = output;

        return;
    }

    if (age >= 18) {

        let weight = +prompt("Your weight?")

        // Weight = Number (Weight)

        if (weight == 0) {
            alert("Please Enter your weight.")

            let statement = "let weight = +prompt('Your Weight?'); <br> if (undefined === 0) { <br> alert('Please Enter Your weight.'); <br> }";
            document.getElementById('originalStatement').innerHTML = statement;

            let output = "Please Enter Your weight."
            document.getElementById('outputResult').innerHTML = output;

            return;
        }

        if (weight <= 70) {
            // console.log("You're smart man.")

            let statement = "if ( " + weight + " <= 70 ) { <br> let output = 'You're smart man.' <br> }";
            document.getElementById('originalStatement').innerHTML = statement;

            let output = "You're smart man.";
            document.getElementById('outputResult').innerHTML = output;

        }
        else {
            // console.log("You're a fat guy.")

            let statement = "if (weight > 70) { <br> } <br> else { <br> let output = 'You're a fat guy.' <br> }";
            document.getElementById('originalStatement').innerHTML = statement;

            let output = "You're a fat guy.";
            document.getElementById('outputResult').innerHTML = output;

        }
    }
    else {
        // console.log("You're a baby.")

        let statement = "if (age < 18) { <br> } <br> else { <br> let output = 'You're a baby' <br> }";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "You're a baby";
        document.getElementById('outputResult').innerHTML = output;
    }
}

// -----------------------------------------------------------

// Login User
document.getElementById('loginUser').onclick = function () {

    let userName = prompt('Your User Name');
    if (userName === 0) {
        alert('Please Enter Your User Name.')
    }

    let pass = prompt('Your password');
    if (pass === 0) {
        alert('Please Enter Your Password.')
    }

    if (userName === 'ibtasam116.net' && pass === "Jutt116") {

        alert("User Loged In");

        let statement = "let " + userName + " = prompt('Your User Name'); <br> let " + pass + " = prompt('Your password'); <br>" + "if (" + userName + " === 'ibtasam116.net'  &&  " + pass + " === 'Jutt116')";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "User Loged In";
        document.getElementById('outputResult').innerHTML = output;
    }
    else {

        alert("User Name and Password incorrect.")

        let statement = "let " + userName + " = prompt('Your User Name'); <br> let " + pass + " = prompt('Your password'); <br>" + "if (" + userName + " !== 'ibtasam116.net'  &&  " + pass + " !== 'Jutt116')";
        document.getElementById('originalStatement').innerHTML = statement;

        let output = "User Name and Password incorrect. <br> Please Enter Correct UserName and Password.";
        document.getElementById('outputResult').innerHTML = output;

    }

}

// -----------------------------------------------------------

// Clear Original Statement
document.getElementById('clearStatementButton').onclick = function () {

    document.getElementById('originalStatement').innerHTML = " ";
}

// -----------------------------------------------------------

// Clear Output / Results
document.getElementById('clearOutputButton').onclick = function () {

    document.getElementById('outputResult').innerHTML = " ";
}

// -----------------------------------------------------------

// // Using + sign with prompt than the number is added able/
// let a1 = +prompt('Enter Number 1');
// let a2 = +prompt('Enter Number 2');

// console.log(a1 + a2);

// -----------------------------------------------------------

// // without + sign with prompt than the number is concatenate these numbera/
// let b1 = prompt('Enter Number 1');
// let b2 = prompt('Enter Number 2');

// console.log(b1 + b2);

// -----------------------------------------------------------

// // Passing the second parameter in prompt box
// let c1 = prompt('Enter Number1', '10');
// let c2 = prompt('Enter Number2', '20' );

// console.log(c1 + c2);







