import { map } from "./bases.js";

export const numberDivision = (input1, input2, base) => {
    if (parseFloat(input2) == 1) {
        return input1;
    }

    let number = "";
    let result = "";

    var i = 0;

    var b = false;

    var comma = false;
    while (!b && i < 10) {
        if (i < input1.length) {
            if (input1[i] == ".") {
                result += ".";
                comma = true;
                i++;
                continue;
            }

            number += "" + input1[i];
        } else {
            if (!comma) {
                if (result == "") {
                    result += "0";
                }
                result += ".";
                comma = true;
            }
            number += "" + 0;
        }

        if (
            number == isBigger(number, input2) ||
            0 == isBigger(number, input2)
        ) {
            let divisor = input2;
            let a = 1;
            let previous = input2;
            while (number == isBigger(number, divisor)) {
                previous = divisor;
                divisor = numberAddition(divisor, input2, base);
                a++;
            }

            if (0 == isBigger(number, divisor)) {
                number = numberSubtraction(number, divisor, base);

                b = true;
            } else {
                number = numberSubtraction(number, previous, base);

                a--;
            }
            number = "" + parseFloat(number);

            result += "" + a;
        }

        i++;
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
