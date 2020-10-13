//TODO: Change the name to something more appropriate.
let map = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
};

/**
 * This function adds input1 to input2 in any base that is smaller than 17
 * @param {string} input1 - The input1.
 * @param {string} input2 - The input2.
 * @param {number} base - The base.
 */
let add = (input1, input2, base) => {
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

const addition = (inputs, base) => {
    let oldResult = add(inputs[0], inputs[1], base);
    console.log(`${inputs[0]} + ${inputs[1]} = ${oldResult}`);
    for (let i = 2; i < inputs.length; i++) {
        let cache = oldResult;
        oldResult = add(oldResult, inputs[i], base);
        console.log(`${cache} + ${inputs[i]} = ${oldResult}`);
    }
    return oldResult;
};

//console.log(add("002", "001", 10));

module.exports = {
    addition,
};
//console.log(addition(["15.2", "15.2", "15.2", "15.2"], 10));
console.log(addition(["6E0", "6E"], 16));
