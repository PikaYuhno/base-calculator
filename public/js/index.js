import { addition, add } from "./add.js";
import { numberSubtraction } from "./subs.js";
import { numberDivision } from "./divi.js";
import { multi } from "./multi.js";
import { baseToNumber, numberToBase } from "./baseConverter.js";
import { map } from "./bases.js";

const onSubmit = () => {
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let operator = document.getElementById("operators").value;
    let base = document.getElementById("baseOperator").value;

    if(checkBases(value1,base) || checkBases(value2,base)){
        alert("Die eingegebene Zahl ist nicht enhalten in der Basis!");
        return;
    }

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

    let resultdecimal = baseToNumber(result.toString(), base);

    document.getElementById("BinaryResult").innerText = numberToBase(
        resultdecimal,
        2
    );
    document.getElementById("OctalResult").innerText = numberToBase(
        resultdecimal,
        8
    );
    document.getElementById("DecimalResult").innerText = resultdecimal;
    document.getElementById("HexadecimalResult").innerText = numberToBase(
        resultdecimal,
        16
    );
};

function checkBases(value , base){
    for(var i=0;i<value.length;i++){
        if(value[i]=="."){
            i++;
            continue;
        }

        var letter = isNaN(value[i]) ? map[value[i]] : value[i];
        if(letter > base){
            console.log(i);
            return true;
        }
    }
    return false;
}

const onConversion = () => {
    let base1 = document.getElementById("base1").value;
    let base2 = document.getElementById("base2").value;
    let value = document.getElementById("value").value;

    if(checkBases(value,base1)){
        alert("Die eingegebene Zahl ist nicht enhalten in der Basis!");
        return;
    }
    
    let resultdecimal = baseToNumber(value, base1);

    document.getElementById("CustomBase").innerText = base2;
    document.getElementById("CustomResult").innerText = numberToBase(
        resultdecimal,
        base2
    );
    document.getElementById("BinaryResult").innerText = numberToBase(
        resultdecimal,
        2
    );
    document.getElementById("OctalResult").innerText = numberToBase(
        resultdecimal,
        8
    );
    document.getElementById("DecimalResult").innerText = resultdecimal;
    document.getElementById("HexadecimalResult").innerText = numberToBase(
        resultdecimal,
        16
    );
};

document.getElementById("submit").addEventListener("click", onSubmit);

document
    .getElementById("submitConversion")
    .addEventListener("click", onConversion);
