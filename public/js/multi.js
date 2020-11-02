import { addition } from "./add.js";
import { map } from "./bases.js";
import { baseToNumber } from "./baseConverter.js";

export const multi = (input1, input2, base) => {
    let splitted1 = input1.split(".");
    let splitted2 = input2.split(".");

    //let wholePart1 = splitted1[0];
    let decimalPart1 = splitted1[1] || "";

    //let wholePart2 = splitted2[0];
    let decimalPart2 = splitted2[1] || "";

    let shiftNumber = decimalPart2.length + decimalPart1.length;

    let in1 = splitted1.join("");
    let in2 = splitted2.join("");

    let len = in1.length;
    let len2 = in2.length;

    let results = ["0"];
    let carry = 0;
    for (let i = 0; i < len; i++) {
        let numberStr = "";
        for (let j = len2 - 1; j >= 0 || carry !== 0; j--) {
            console.log("Test", map[in1[i]]);
            let calculation =
                (isNaN(in1[i]) ? map[in1[i]] : parseInt(in1[i])) *
                    (isNaN(in2[j]) ? map[in2[j]] || 0 : parseInt(in2[j]) || 0) +
                carry;
            let number = calculation % base;
            number = number >= 10 ? map[number] : number;
            console.log(
                `Calc: ${isNaN(in1[i]) ? map[in1[i]] : parseInt(in1[i])} * ${
                    isNaN(in2[j]) ? map[in2[j]] || 0 : parseInt(in2[j]) || 0
                } + ${carry} = ${calculation}, Result: ${number}, Carry: ${Math.floor(
                    calculation / base
                )}`
            );
            numberStr += number;
            carry = Math.floor(calculation / base);
        }
        results.push(numberStr.split("").reverse().join(""));
    }
    console.log("Before -- Results:", results);
    let zeros = "";
    for (let i = results.length - 1; i >= 0; i--) {
        results[i] = results[i] + zeros;
        zeros += "0";
    }
    console.log("After -- Results:", results);
    let res = addition(results, base);
    console.log(
        "Final Result:",
        baseToNumber(res, base) / base ** shiftNumber
    );
    return baseToNumber(res, base) / base ** shiftNumber;
};
