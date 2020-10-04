let add = (input1, input2, base) => {
    const rev = (s) => s.split("").reverse().join("");
    const calc = (input1, input2, oldCarry, base) => {
        let number = (parseInt(input1) + parseInt(input2) + oldCarry) % base;
        let carry = Math.floor(
            (parseInt(input1) + parseInt(input2) + oldCarry) / base
        );
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
        //console.log(`${n1} + ${n2} + ${carry2} = ${n}`);
        carry = r.carry;
    }
    //console.log("-----------------------");

    let wholePart = "";
    for (let i = 0; i < numLen; i++) {
        let n1 = num1[i] || 0;
        let n2 = num2[i] || 0;
        let r = calc(n1, n2, carry, base);
        wholePart += r.number;
        //console.log(`${n1} + ${n2} + ${carry} = ${n}`);
        carry = r.carry;
    }
    if (carry != 0) wholePart += carry;

    return `${rev(wholePart)}.${rev(decimalPart)}`;
};

const addition = (inputs, base) => {
    let oldResult = add(inputs[0], inputs[1], base);
    for (let i = 2; i < inputs.length; i++) {
        oldResult = add(oldResult, inputs[i], base);
    }
    return oldResult;
};

console.log(addition(["15.2", "15.2", "15.2", "15.2"], 10));
