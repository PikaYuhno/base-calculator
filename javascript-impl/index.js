/**const binToDec = (input) => {
    let splitted = input.split(".");
    if (splitted.length === 1) {
        let decimal = 0;
        let arr = input.split("");
        for (let i = 0; i < arr.length; i++) {
            decimal += arr[i] * 2 ** i;
        }
        return decimal;
    }

    let positiv = splitted[0];
    let negativ = splitted[1];

    let positivDec = 0;
    let negativDec = 0;
    for (let i = 0; i < positiv.length; i--) {
        positivDec += positiv[i] * 2 ** (positiv.length - i - 1);
    }
    for (let i = 0; i < negativ.length; i++) {
        negativDec += negativ[i] * 2 ** ((i + 1) * -1);
    }
    return positivDec + negativDec;
};*/

const baseToNumber = (input, base) => {
    const splitted = input.split(".");
    const characteristicPart = splitted[0];
    const mantissaPart = splitted[1] || "";

    const shiftedInput = characteristicPart + mantissaPart;
    let number = 0;
    for (let i = 0; i < shiftedInput.length; i++) {
        number += shiftedInput[i] * base ** (shiftedInput.length - i - 1);
    }

    return number / base ** mantissaPart.length;
};

console.log(baseToNumber("101111", 2));

const DecToBin = (input) => {
    let splitted = input.split(".");
    const characteristicPart = splitted[0];
    const mantissaPart = splitted[1] || "";

    let binary = "";
    while (input != 1) {
        binary += input % 2;
        input = Math.floor(input / 2);
    }
    binary += input % 2;

    return binary.split("").reverse().join("");
};

//console.log(binToDec("11011011"));
//eonsole.log(DecToBin(598));
