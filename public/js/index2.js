import { addition, add } from "./add.js";
import { numberSubtraction } from "./subs.js";
import { numberDivision } from "./divi.js";
import { multi } from "./multi.js";
import { baseToNumber, numberToBase } from "./baseConverter.js"; 

document.getElementById("submit").addEventListener("click", () => {
    onSubmit();
});

document.getElementById("submitConversion").addEventListener("click", () => {
    onConversion();
});

const onSubmit = () => {
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let operator = document.getElementById("operators").value;
    let base = document.getElementById("baseOperator").value;

    console.log(value1);

    let result = 0;
    switch (operator) {
        case "+":
            result = addition([value1, value2], base);
            break;
        case "-":
            result = numberSubtraction(value1, value2, base);
            break;
        case "/":
            result = numberDivision(value1, value2, base);
            break;
        case "*":
            result = multi(value1, value2, base);
            break;
    }



    console.log(result);

    document.getElementById("CustomBase").innerText = base;
    document.getElementById("CustomResult").innerText = result;

    let resultdecimal = baseToNumber(result,base);

    document.getElementById("BinaryResult").innerText = numberToBase(resultdecimal,2);
    document.getElementById("OctalResult").innerText = numberToBase(resultdecimal,8);
    document.getElementById("DecimalResult").innerText = resultdecimal;
    document.getElementById("HexadecimalResult").innerText = numberToBase(resultdecimal,16);
};

const onConversion = () => {
    let base1 = document.getElementById("base1").value;
    let base2 = document.getElementById("base2").value;
    let value = document.getElementById("input").value;

    let resultdecimal = baseToNumber(value,base1);

    document.getElementById("CustomBase").innerText = base2;
    document.getElementById("CustomResult").innerText = numberToBase(resultdecimal,base2);
    document.getElementById("BinaryResult").innerText = numberToBase(resultdecimal,2);
    document.getElementById("OctalResult").innerText = numberToBase(resultdecimal,8);
    document.getElementById("DecimalResult").innerText = resultdecimal;
    document.getElementById("HexadecimalResult").innerText = numberToBase(resultdecimal,16);
};
