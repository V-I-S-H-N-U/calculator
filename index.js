// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
let sumEl = document.getElementById("sum-el")

function add() {
    let num1 = Number(document.getElementById("num1-el").value) 
    let num2 = Number(document.getElementById("num2-el").value) 
    let result = num1 + num2
    sumEl.textContent = "Result "+"("+num1+"+"+num2 +")" +":  "+ result
}

function subtract() {
    let num1 = Number(document.getElementById("num1-el").value) 
    let num2 = Number(document.getElementById("num2-el").value) 
    let result = num1 - num2
    sumEl.textContent = "Result "+"("+num1+"-"+num2 +")" +":  "+ result
}

function divide() {
    let num1 = Number(document.getElementById("num1-el").value) 
    let num2 = Number(document.getElementById("num2-el").value) 
    let result = num1 / num2
    sumEl.textContent = "Result "+"("+num1+"/"+num2 +")" +":  "+ result
}

function multiply() {
    let num1 = Number(document.getElementById("num1-el").value) 
    let num2 = Number(document.getElementById("num2-el").value) 
    let result = num1 * num2
    sumEl.textContent = "Result "+"("+num1+"*"+num2 +")" +":  "+ result
}

