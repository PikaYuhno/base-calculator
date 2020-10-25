import { map } from "./bases.js";

export const numberSubtraction = (input1, input2, base) => {
    var tausch = 0;

    let splitted1 = input1.includes(".") ? input1.split(".") : [input1, ""];
    let splitted2 = input1.includes(".") ? input2.split(".") : [input2, ""];

    if (splitted1[1].length < splitted2[1].length) {
        [input1, input2] = [input2, input1];
        tausch++;
        [splitted1, splitted2] = [splitted2, splitted1];
    }

    for (var i = 0; i < splitted1[1].length - splitted2[1].length; i++) {
        input2 += "0";
    }

    if (splitted1[0].length < splitted2[0].length) {
        [input1, input2] = [input2, input1];
        tausch++;
        [splitted1, splitted2] = [splitted2, splitted1];
    }

    for (var i = 0; i < splitted1[0].length - splitted2[0].length; i++) {
        input2 = "0" + input2;
    }

    if (tausch % 2 != 0) {
        [input1, input2] = [input2, input1];
    }

    let result = "";
    let transfer = 0;
    let temp = 0;
    let minus = "";

    if (input2 == isBigger(input1, input2)) {
        [input1, input2] = [input2, input1];
        minus = "-";
    }

    for (var i = input1.length - 1; i >= 0; i--) {
        if (input1[i] == ".") {
            result += ".";
            continue;
        }

        var num1 = isNaN(input1[i]) ? map[input1[i]] : parseInt(input1[i]);
        var num2 = isNaN(input2[i]) ? map[input2[i]] : parseInt(input2[i]);

        if (num1 < num2 + transfer) {
            num1 += base;
            temp = 1;
        }

        result +=
            num1 - (num2 + transfer) < 10
                ? "" + num1 - (num2 + transfer)
                : map[num1 - (num2 + transfer)];
        transfer = temp;
        temp = 0;
    }

    result = result.split("").reverse().join("");

    if (minus == "-") {
        return input1.match(/[A-F]/) || input2.match(/[A-F]/)
            ? minus + result
            : minus + result.substring(1);
    }

    return result;
};

const isBigger = (input1, input2) => {
    if (input1.length == input2.length) {
        for (var i = 0; i < input1.length; i++) {
            if (input1[i] != input2[i]) {
                var num1 = isNaN(input1[i])
                    ? map[input1[i]]
                    : parseInt(input1[i]);
                var num2 = isNaN(input2[i])
                    ? map[input2[i]]
                    : parseInt(input2[i]);

                return num1 > num2 ? input1 : input2;
            }
        }

        return 0;
    }
    return input1.length > input2.length ? input1 : input2;
};
