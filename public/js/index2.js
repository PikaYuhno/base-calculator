import { addition, add } from "./add.js";
import { numberSubtraction } from "./subs.js";
import { numberDivision } from "./divi.js";
import { multi } from "./multi.js";
import { baseToNumber, numberToBase } from "./baseConverter.js"; 

document.getElementById("submit").addEventListener("click", onSubmit());

const onSubmit = () => {
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let operator = document.getElementById("operatorsInput").value;
    let base = document.getElementById("baseOperator").value;

    let result = 0;
    switch (operator) {
        case "+":
            result = addition([value1, value2], base);
            break;
        case "-":
            result = numberSubtraction(value1, value2, base);
            break;
        case "/":
            result = numberDivision(input1, input2, base);
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
    document.getElementById("HexadecimalResult").innerText = numberToBase(resultdecimal,16);
};