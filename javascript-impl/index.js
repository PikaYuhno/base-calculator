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
