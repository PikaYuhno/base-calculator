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
    let number = "";
    while (input > base) {
        number += input % base;
        input = Math.floor(input / base);
    }
    number += input % base;

    return number.split("").reverse().join("");
};
