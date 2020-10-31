import { map } from "./bases.js";
/**
 * This function adds input1 to input2 in any base that is smaller than 17
 * @param {string} input1 - The input1.
 * @param {string} input2 - The input2.
 * @param {number} base - The base.
 */
export let add = (input1, input2, base) => {
    const rev = (s) => s.split("").reverse().join("");
    const calc = (input1, input2, oldCarry, base) => {
        input1 = isNaN(input1) ? map[input1] : parseInt(input1);
        input2 = isNaN(input2) ? map[input2] : parseInt(input2);
        let number = (input1 + input2 + oldCarry) % base;
        number = number >= 10 ? map[number] : number;
        let carry = Math.floor((input1 + input2 + oldCarry) / base);
        return { number, carry };
    };
    let splitted1 = input1.split(".");
    let splitted2 = input2.split(".");

    let num1 = rev(splitted1[0]);
    let num2 = rev(splitted2[0]);
    let decimal1 = splitted1[1] || "";
    let decimal2 = splitted2[1] || "";

    let numLen = Math.max(num1.length, num2.length);
    let decLen = Math.max(decimal1.length, decimal2.length);

    let carry = 0;

    let decimalPart = "";
    for (let i = decLen - 1; i >= 0; i--) {
        let n1 = decimal1[i] || 0;
        let n2 = decimal2[i] || 0;
        let r = calc(n1, n2, carry, base);
        decimalPart += r.number;
        console.log(`${n1} + ${n2} + ${carry} = ${r.number}`);
        carry = r.carry;
    }
    console.log("-----------------------");

    let wholePart = "";
    for (let i = 0; i < numLen; i++) {
        let n1 = num1[i] || 0;
        let n2 = num2[i] || 0;
        let r = calc(n1, n2, carry, base);
        wholePart += r.number;
        console.log(`${n1} + ${n2} + ${carry} = ${r.number}`);
        carry = r.carry;
    }
    if (carry != 0) wholePart += carry;

    return `${rev(wholePart)}.${rev(decimalPart)}`;
};

export const addition = (inputs, base) => {
    let oldResult = add(inputs[0], inputs[1], base);
    console.log(`${inputs[0]} + ${inputs[1]} = ${oldResult}`);
    for (let i = 2; i < inputs.length; i++) {
        let cache = oldResult;
        oldResult = add(oldResult, inputs[i], base);
        console.log(`${cache} + ${inputs[i]} = ${oldResult}`);
    }
    return oldResult;
};

export const numberAddition = (input1,input2,base) => {

    let splitted1 = input1.includes(".") ? input1.split(".") : [input1,""];
    let splitted2 = input1.includes(".") ? input2.split(".") : [input2,""];

    if(splitted1[1].length<splitted2[1].length){
        [input1,input2] = [input2,input1];
        [splitted1,splitted2] = [splitted2,splitted1];
    }

    for(var i=0;i<splitted1[1].length-splitted2[1].length;i++){
        input2+="0";
    }

    if(splitted1[0].length<splitted2[0].length){
        [input1,input2] = [input2,input1];
        [splitted1,splitted2] = [splitted2,splitted1];
    }

    for(var i=0;i<splitted1[0].length-splitted2[0].length;i++){
        input2 = "0" + input2;
    }

    let result="";
    let transfer=0;
    for(var i=input1.length-1;i>=0;i--){
        if(input1[i]=="."){
            result+=".";
            continue;
        }

        var num1= isNaN(input1[i]) ? map[input1[i]] : parseInt(input1[i]);
        var num2= isNaN(input2[i]) ? map[input2[i]] : parseInt(input2[i]);

        result+= ((num1+num2+transfer)%base)<10 ? ""+((num1+num2+transfer)%base) : map[((num1+num2+transfer)%base)];
        transfer=Math.floor((num1+num2+transfer)/base);
    }

    if(transfer!=0){
        result+=""+transfer;
    }

    return result.split("").reverse().join("");
};