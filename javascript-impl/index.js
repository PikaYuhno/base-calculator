//TODO: Change the name to something more appropriate.
let map = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
};
/**
 * This function converts any base that is smaller than 10 to a number.
 * @param {number} input - The input number.
 * @param {number} base - The base.
 */
const baseToNumber = (input, base) => {
    const splitted = input.split(".");
    const characteristicPart = splitted[0];
    const mantissaPart = splitted[1] || "";

    const shiftedInput = characteristicPart + mantissaPart;
    let number = 0;
    for (let i = 0; i < shiftedInput.length; i++) {
        if (isNaN(shiftedInput[i])) {
            number +=
                map[shiftedInput[i]] * base ** (shiftedInput.length - i - 1);
            continue;
        }
        number += shiftedInput[i] * base ** (shiftedInput.length - i - 1);
    }

    return number / base ** mantissaPart.length;
};

/**
 * This function converts a number to any base that is smaller than 10.
 * @param {number} input - The input number.
 * @param {number} base - The base.
 */
//TODO
// + Convert number with decimal part.
const numberToBase = (input, base) => {
    let characteristicPart = Math.floor(input);
    let mantissaPart = input - Math.floor(input);

    let number = "";
    while (characteristicPart >= base) {
        number += characteristicPart % base;
        characteristicPart = Math.floor(characteristicPart / base);
    }
    number += characteristicPart % base;

    let secnumber = "";
    while (mantissaPart % 1 != 0) {
        mantissaPart *= base;
        secnumber += Math.floor(mantissaPart);
        mantissaPart = mantissaPart - Math.floor(mantissaPart);
    }
    secnumber += Math.floor(mantissaPart);

    number = number.split("").reverse().join("");
    return number + "." + secnumber;
};

const numberAddition = (input1,input2,base) => {
    let splitted1 = input1.split(".");
    let splitted2 = input2.split(".");

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

        var num1=parseInt(input1[i]);
        var num2=parseInt(input2[i]);

        result+=""+((num1+num2+transfer)%base);
        transfer=Math.floor((num1+num2+transfer)/base);
    }

    if(transfer!=0){
        result+=""+transfer;
    }

    return result.split("").reverse().join("");
};

const NumberSubtraction = (input1,input2,base) => {
    let copy1=input1;

    let splitted1 = input1.split(".");
    let splitted2 = input2.split(".");

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

    if(!input1.includes(copy1)){
        [input1,input2] = [input2,input1];
    }

    let result="";
    let transfer=0;
    let temp=0;
    let minus="";

    if(parseFloat(input1)<parseFloat(input2)){
        [input1,input2] = [input2,input1];
        minus="-";
    }

    for(var i=input1.length-1;i>=0;i--){
        if(input1[i]=="."){
            result+=".";
            continue;
        }

        var num1=parseInt(input1[i]);
        var num2=parseInt(input2[i]);

        if(num1<num2+transfer){
            num1+=base;
            temp=1;
        }

        result+=""+num1-(num2+transfer);
        transfer=temp;
        temp=0;
    }

    result=result.split("").reverse().join("");

    if(minus=="-"){
        return minus+result.substring(1);
    }
    return result;
};

const numberDivision = (input1,input2,base) => {

    let number="";
    let result="";

    for(var i=0;i<input1.length;i++){
        number+=""+input1[i];

        if(input1[i]=="."){
            result+=".";
            continue;
        }


        if(parseFloat(number)>=input2){
            let divisor=input2;
            let a=1;
            let previous=input2;
            while(parseFloat(number)>divisor){
                previous=divisor;
                divisor=numberAddition(divisor+".",input2+".",base);
                a++;
            }
            number=numberSubtraction(number+".",previous+".",base);
    
            result+=""+a;
        }
    }


    return result;
};
