import { addition } from "./add.js";

console.log(addition(["10", "10"], 10));
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

console.log(map);
console.log(baseToNumber("++", 64));

/**
 * This function converts a number to any base that is smaller than 10.
 * @param {number} input - The input number.
 * @param {number} base - The base.
 */
const numberToBase = (input, base) => {
    let characteristicPart = Math.floor(input);
    let mantissaPart = input - Math.floor(input);

    let number = "";
    while (characteristicPart >= base) {
        number += (characteristicPart % base)<10 ? characteristicPart % base : map[characteristicPart % base];
        characteristicPart = Math.floor(characteristicPart / base);
    }
    number += (characteristicPart % base)<10 ? characteristicPart % base : map[characteristicPart % base];

    let secnumber = "";
    while (mantissaPart % 1 > 0.05) {
        mantissaPart *= base;
        secnumber += Math.floor(mantissaPart)<10 ? Math.floor(mantissaPart) : map[Math.floor(mantissaPart)];
        mantissaPart = mantissaPart - Math.floor(mantissaPart);
    }

    number = number.split("").reverse().join("");
    
    return number=="" || secnumber=="" ? number=="" && secnumber=="" ? 0 : number=="" ? "0."+secnumber : number : number+"."+secnumber;
};

const numberAddition = (input1,input2,base) => {

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

const numberSubtraction = (input1,input2,base) => {
    var tausch = 0;
    
    let splitted1 = input1.includes(".") ? input1.split(".") : [input1,""];
    let splitted2 = input1.includes(".") ? input2.split(".") : [input2,""];

    if(splitted1[1].length<splitted2[1].length){
        [input1,input2] = [input2,input1];
        tausch++;
        [splitted1,splitted2] = [splitted2,splitted1];
    }

    for(var i=0;i<splitted1[1].length-splitted2[1].length;i++){
        input2+="0";
    }

    if(splitted1[0].length<splitted2[0].length){
        [input1,input2] = [input2,input1];
        tausch++;
        [splitted1,splitted2] = [splitted2,splitted1];
    }

    for(var i=0;i<splitted1[0].length-splitted2[0].length;i++){
        input2 = "0" + input2;
    }

    if(tausch%2!=0){
        [input1,input2] = [input2,input1];
    }

    let result="";
    let transfer=0;
    let temp=0;
    let minus="";

    if(input2 == isBigger(input1,input2)){
        [input1,input2] = [input2,input1];
        minus="-";
    }


    for(var i=input1.length-1;i>=0;i--){
        if(input1[i]=="."){
            result+=".";
            continue;
        }

        var num1= isNaN(input1[i]) ? map[input1[i]] : parseInt(input1[i]);
        var num2= isNaN(input2[i]) ? map[input2[i]] : parseInt(input2[i]);

        if(num1<num2+transfer){
            num1+=base;
            temp=1;
        }

        result+= (num1-(num2+transfer))<10 ? ""+num1-(num2+transfer) : map[num1-(num2+transfer)];
        transfer=temp;
        temp=0;
    }

    result=result.split("").reverse().join("");

    if(minus=="-"){
        return input1.match(/[A-z\\\+]/) || input2.match(/[A-z\\\+]/) ? minus+result : minus+result.substring(1);
    }
    
    return result;
};

const numberDivision = (input1,input2,base) => {

    if(parseFloat(input2) == 1){
        return input1;
    }

    let number="";
    let result="";

    var i=0;

    var b=false;

    var comma=false;
    while(!b && i<10){

        if(i<input1.length){

            if(input1[i]=="."){
                result+=".";
                comma=true;
                i++;
                continue;
            }

            number+=""+input1[i];
        }
        else{
            if(!comma){
                if(result==""){
                    result+="0";
                }
                result+=".";
                comma=true;
            }
            number+=""+0;
        }
        
        if(number == isBigger(number,input2) || 0 == isBigger(number,input2)){ 
            let divisor=input2;
            let a=1;
            let previous=input2;
            while(number == isBigger(number,divisor)){
                previous=divisor;
                divisor=numberAddition(divisor,input2,base);
                a++;
            }

            if(0 == isBigger(number,divisor)){
                number=numberSubtraction(number,divisor,base);

                b=true;
            }
            else{
                number=numberSubtraction(number,previous,base);

                a--;
            }
            number=""+parseFloat(number);
    
            result+=""+a;
        }

        i++;
    }
    
     return result;
};

const isBigger = (input1,input2) => {
    if(input1.length==input2.length){
        for(var i=0;i<input1.length;i++){
            if(input1[i]!=input2[i]){
                var num1= isNaN(input1[i]) ? map[input1[i]] : parseInt(input1[i]);
                var num2= isNaN(input2[i]) ? map[input2[i]] : parseInt(input2[i]);

                return num1>num2 ? input1 : input2;
            }
        }

        return 0;
    }
    return input1.length>input2.length ? input1 : input2;
};
