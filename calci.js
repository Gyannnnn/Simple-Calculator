function addby() {
    var num1 = parseFloat(document.getElementById("firstNumber").value);
    var num2 = parseFloat(document.getElementById("secondNumber").value);
    document.getElementById("result").innerHTML = num1+num2;
}

function multiplyBy() {
    var num1 = parseFloat(document.getElementById("firstNumber").value);
    var num2 = parseFloat(document.getElementById("secondNumber").value);
    document.getElementById("result").innerHTML = num1 * num2;
}
