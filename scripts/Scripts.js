this.document.getElementById("input1").setAttribute('oninput', "ex1(this.value)");
this.document.getElementById("input2").setAttribute('oninput', "ex2(this.value)");
this.document.getElementById("input3").setAttribute('oninput', "ex3(this.value)");
this.document.getElementById("button1").setAttribute('onclick', "ex4(document.getElementById('input4').value)");
this.document.getElementById("button2").setAttribute('onclick', "ex5([Number(document.getElementById('num1_n').value), Number(document.getElementById('num1_i').value), Number(document.getElementById('num2_n').value), Number(document.getElementById('num2_i').value),], document.getElementById('op').options[document.getElementById('op').selectedIndex].value)");
this.document.getElementById("input5").setAttribute('oninput', "ex7(this.value)");
this.document.getElementById("button3").setAttribute('onclick', "ex6()");
this.document.getElementById("button4").setAttribute('onclick', "ex9(document.getElementById('input6').value)");
this.document.getElementById("button5").setAttribute('onclick', "ex8(document.getElementById('input7').value)");
this.document.getElementById("input8").setAttribute('oninput', "Number(ex10(this.value))");
this.document.getElementById("button6").setAttribute('onclick', "ex11(Number(document.getElementById('num3_a').value),Number(document.getElementById('num3_b').value))");
//ex1
function ex1(str) {
    if (str.length > 0)
        this.document.getElementById("output1").innerHTML = reverse(str);
    else
        this.document.getElementById("output1").innerHTML = "Answer";
}
function reverse(str) {
    var reversal = "";
    for (var i = 0; i < str.length; i++) {
        reversal = reversal + str[str.length - i - 1];
    }
    return reversal;
}
//ex2
function ex2(str) {
    if (str.length > 0)
        this.document.getElementById("output2").innerHTML = recReverse(str);
    else
        this.document.getElementById("output2").innerHTML = "Answer";
}
function recReverse(str) {
    return str === '' ? '' : recReverse(str.slice(1)) + str[0];
}
//ex3
function ex3(str) {
    if (str.length >= 1) {
        if (isPalindrome(str))
            this.document.getElementById("output3").innerHTML = "This is a palindrome!";
        else
            this.document.getElementById("output3").innerHTML = "This is not a palindrome!";
    }
    else
        this.document.getElementById("output3").innerHTML = "Answer";
}
function isPalindrome(str) {
    if (str.toLowerCase() === reverse(str).toLowerCase())
        return true;
    return false;
}
//ex4
function ex4(str) {
    var array = str.split(",").map(Number);
    this.document.getElementById("output4").innerHTML = "The index of the maximum element = " + maxPos(array);
}
function maxPos(array) {
    var max = 0;
    for (var i = 1; i < array.length; i++) {
        if (array[max] < array[i])
            max = i;
    }
    return max;
}
//ex5
function ex5(array, operation) {
    var result = complexCalc(array[0], array[1], array[2], array[3], operation);
    this.document.getElementById("output5").innerHTML = result[0] + " + " + result[1] + "i";
}
function complexCalc(a, b, c, d, operation) {
    var result = [0, 0];
    switch (operation) {
        case '+':
            result[0] = a + c;
            result[1] = b + d;
            return result;
        case '-':
            result[0] = a - c;
            result[1] = b - d;
            return result;
        case '*':
            result[0] = a * c - b * d;
            result[1] = a * d + b * c;
            return result;
        case '/':
            result[0] = parseFloat(((a * c + b * d) / (c * c + d * d)).toFixed(2));
            result[1] = parseFloat(((b * c - a * d) / (c * c + d * d)).toFixed(2));
            return result;
    }
}
//ex6
function ex6(cellSeparator) {
    console.log(stringMultiplicationTable("\n", "============="));
    this.document.getElementById("output7").innerHTML = "Check console!";
}
function stringMultiplicationTable(rowSeparator, cellSeparator) {
    var result = "Multiplication table\n====================\n";
    for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
            result += i + " * " + j + " = " + (i * j) + rowSeparator;
        }
        result += cellSeparator + "\n";
    }
    return result;
}
//ex7
function ex7(str) {
    if (str.length >= 3)
        this.document.getElementById("output6").innerHTML = stringReduction(str);
    else
        this.document.getElementById("output6").innerHTML = "Answer";
}
function stringReduction(str) {
    var amt = str.length - 2;
    var result = str[0] + amt + str[str.length - 1];
    return result;
}
//ex8
function ex8(str) {
    var array = str.split(",").map(Number);
    this.document.getElementById("output9").innerHTML = "Maximum non-descending sequence = " + ascendingSequence(array);
}
function ascendingSequence(array) {
    var maxSequence = 1;
    var thisSequence = 1;
    for (var i = 1; i < array.length; i++) {
        if (array[i] >= array[i - 1]) {
            thisSequence++;
            if (maxSequence < thisSequence)
                maxSequence = thisSequence;
        }
        else
            thisSequence = 0;
    }
    return maxSequence;
}
//ex9
function ex9(str) {
    var array = str.split(",").map(Number);
    if (compare(array))
        this.document.getElementById("output8").innerHTML = "Arithmetic average of elements exceeds their amount";
    else
        this.document.getElementById("output8").innerHTML = "Arithmetic average of elements doesn't exceed their amount";
}
function compare(array) {
    var average = 0;
    for (var i = 0; i < array.length; i++)
        average += array[i];
    average = average / array.length;
    return average > array.length ? true : false;
}
//ex10
function ex10(num) {
    if (num > 0) {
        if (num > 100)
            this.document.getElementById("output10").innerHTML = "I CAN'T COUNT PAST ONE HUNDRED!";
        else if (isPrime(num))
            this.document.getElementById("output10").innerHTML = "A PRIME NUMBER WE HAVE HERE!";
        else
            this.document.getElementById("output10").innerHTML = "A PRIME NUMBER WE HAVE HERE NOT!";
    }
    else
        this.document.getElementById("output10").innerHTML = "Answer";
}
function isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++)
        if (num % i == 0)
            return false;
    return true;
}
//ex11
function ex11(a, b) {
    this.document.getElementById("output11").innerHTML = "Result: " + executeBinaryOp(secondaryOp(a, b), a, b) + ", executeBinaryOp type is the same as the passed function type, otherwise there will be a type mismatch.";
}
function secondaryOp(a, b) {
    return a + b;
}
function executeBinaryOp(func, a, b) {
    return func;
}
