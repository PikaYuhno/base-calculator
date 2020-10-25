import { addition, add } from "./add.js";
import { numberSubtraction } from "./subs.js";
import { numberDivision } from "./divi.js";
import { multi } from "./multi.js";

window.onload = () => {
    init();
};
const init = () => {
    let dropdown = document.getElementById("hosting-plan");
    for (let i = 2; i <= 64; i++) {
        let option = document.createElement("option");
        option.innerText = i;
        dropdown.appendChild(option);
    }
};

document.getElementById("submit").addEventListener("click", () => {
    onSubmit();
});
const onSubmit = () => {
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let operator = document.getElementById("operatorsInput").value;
    let base = document.getElementById("baseOperator").value;

    let result = 0;
    switch (operator) {
        case "+":
            result = addition([value1, value2], base);
            break;
        case "-":
            result = numberSubtraction(value1, value2, base);
            break;
        case "/":
            result = numberDivision(input1, input2, base);
            break;
        case "*":
            result = multi(value1, value2, base);
            break;
    }

    console.log(result);
};
