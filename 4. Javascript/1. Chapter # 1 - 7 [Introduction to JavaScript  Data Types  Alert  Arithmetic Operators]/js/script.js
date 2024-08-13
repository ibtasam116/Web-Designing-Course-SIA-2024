
// Alert Name
document.getElementById('alertString').onclick = function() {
    
    let nameUser = "Muhammad IbTaSaM"; /* Variable */
    
    alert(nameUser);

    let Statement = "<p class='text-center'>" + "alert ("+ nameUser +");" + "</p>"
    document.getElementById('originalStatement').innerHTML = Statement

    document.getElementById('outputResult').innerHTML = "<p class='text-center'>" + nameUser + "</p>"
}


// Alert Number
document.getElementById('alertNumber').onclick = function() {

    let phoneNumber = "0304-6547211"; /* Variable */
    
    alert(phoneNumber);

    let Statement = "<p class='text-center'>" + "alert ("+ phoneNumber +");" + "</p>"
    document.getElementById('originalStatement').innerHTML = Statement;

    document.getElementById('outputResult').innerHTML = "<p class='text-center'>" + phoneNumber + "</p>"
}


// Variable Name Legal and Illegal
document.getElementById('variableNames').onclick = function() {

    let html = "<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letter, numbers, dollar sign, and underscore</li><li>Though a variable name can't be any of javaScript's keywords, it can contain keyword. For example, <code>userAlert</code> and <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful, Variable name are case sensitive. A <code>rose </code>is not a <code>Rose. </code>If you assign the string Floribundas to the variable <code>rose, </code> and then ask JavaScript for the value assigned to <code>Rose, </code> you'll come up empty.</li></ul>"
    document.getElementById('outputResult').innerHTML = html;

    document.getElementById('originalStatement').innerHTML = html;
}


// CamelCase Example 
document.getElementById('camelCaseExamples').onclick = function() {

    let html = "<h3>Example</h3><ul><li><code>user</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li></ul>"
    document.getElementById('outputResult').innerHTML = html;

    document.getElementById('originalStatement').innerHTML = "";
}


// Sum 2 Numbers
document.getElementById('sum2Numbers').onclick = function() {

    let num1 = 10;
    let num2 = 5;
    let sum = num1 + num2

    let Statement = " <p class='text-center'>" + "let num1 = " + num1 + "; <br>let num2 = " + num2 + "; <br>let sum = " + num1 + " + " + num2 + ";" + "</p>"
    document.getElementById('originalStatement').innerHTML = Statement;
    
    document.getElementById('outputResult').innerHTML =  "<p class='text-center'>" + sum + "</p>"
}


// Subsctract 2 Numbers
document.getElementById('subsctract2Numbers').onclick = function() {

    let num1 = 6;
    let num2 = 4;

    let sub = num1 - num2 ;

    let Statement = "<p class='text-center'>" + "let num1 = " + num1 + "; <br>let num2 = " + num2 + "; <br>let sub = " + num1 + " - " + num2 + ";" + "</p>"
    document.getElementById('originalStatement').innerHTML = Statement;

    document.getElementById('outputResult').innerHTML = "<p class='text-center'>" + sub + "</P>"
    // console.log(sub)
}


// Multiply 2 Numbers
document.getElementById('multiply2Numbers').onclick = function() {

    let num1 = 12;
    let num2 = 2;

    let pro = num1 * num2

    let Statement = "<p class='text-center'>" + "let num1 =" + num1 + "; <br>let num2 = " + num2 + "; <br>let pro = " + num1 + " * " + num2 + ";" + "</p>"
    document.getElementById('originalStatement').innerHTML = Statement

    document.getElementById('outputResult').innerHTML = "<p class='text-center'>" + pro + "</p>"
    // console.log(pro)    
}


// Divided 2 Numbers
document.getElementById('divided2Numbers').onclick = function() {

    let num1 = 6;
    let num2 = 2;

    let avg = num1 / num2;

    let Statement = "<p class='text-center'>" + "let num1 = " + num1 + "; <br>let num2 = " + num2 + "; <br>let avg = " + num1 + " / " + num2 + ";" + "</p>"
    document.getElementById('originalStatement').innerHTML = Statement;

    document.getElementById('outputResult').innerHTML = "<p class='text-center'>" + avg + "</p>";
    console.log(avg)
}


// Calculate Some Numbers

document.getElementById('calculateSomeNumbers').onclick = function() {

    let someCalculations = 36 / 6 * 3 + 2**4 - (3 + 5);
    document.getElementById('originalStatement').innerHTML = "<p class='text-center'>" + "let someCalculation = 36 / 6 * 3 + 2**4 - (3 + 5);" + "</p>";

    document.getElementById('outputResult').innerHTML = "<p class='text-center'>" + someCalculations + "</p>"
}
























// Clear Statement
document.getElementById('clearStatementButton').onclick = function () {
    document.getElementById('originalStatement').innerHTML = " "
}


// Clear Output / Result
document.getElementById('clearOutputButton').onclick = function () {
    document.getElementById('outputResult').innerHTML = " "
}
