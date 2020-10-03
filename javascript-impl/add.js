let add = (input1, input2, base) => {
    const rev = (s) => s.split("").reverse().join("");
    //Input1 = 125124.124
    //Input2 =   2131.2
    let splitted1 = input1.split(".");
    let splitted2 = input2.split(".");

    let num1 = rev(splitted1[0]);
    let num2 = rev(splitted2[0]);
    let decimal1 = splitted1[1] || "";
    let decimal2 = splitted2[1] || "";

    let len = num1.length > num2.length ? num1.length : num2.length;
    let decLen =
        decimal1.length > decimal2.length ? decimal1.length : decimal2.length;

    console.log(`Num1: ${num1}, Dec1: ${decimal1}`);
    console.log(`Num2: ${num2}, Dec2: ${decimal2}`);

    let carry2 = 0;
    let result2 = "";
    for (let i = decLen - 1; i >= 0; i--) {
        let n1 = decimal1[i] || 0;
        let n2 = decimal2[i] || 0;
        let n = (parseInt(n1) + parseInt(n2) + carry2) % base;
        result2 += n;
        console.log(`${n1} + ${n2} + ${carry2} = ${n}`);
        carry2 = Math.floor((parseInt(n1) + parseInt(n2) + carry2) / base);
    }
    console.log("-----------------------");

    let carry = carry2;
    let result = "";
    for (let i = 0; i < len; i++) {
        let n1 = num1[i] || 0;
        let n2 = num2[i] || 0;
        let n = (parseInt(n1) + parseInt(n2) + carry) % base;
        result += n;
        console.log(`${n1} + ${n2} + ${carry} = ${n}`);
        carry = Math.floor((parseInt(n1) + parseInt(n2) + carry) / base);
    }
    if (carry != 0) result += carry;

    result = rev(result);
    result2 = rev(result2);

    return `${result}.${result2}`;
};
