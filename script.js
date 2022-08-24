const digits = document.querySelectorAll(".digit")
const x_opr_y = document.querySelector(".x-opr-y")
const result = document.querySelector(".result")
const operators = document.querySelectorAll(".operation")
const equals_btn = document.querySelector(".equals")
let operations = []

digits.forEach(digit => digit.addEventListener("click", () => {
    if (digit.textContent == "AC") {
        x_opr_y.textContent = ""
        operations = [];
        result.textContent = "0";
    } else {
        result.textContent = digit.textContent;
        if (operations.length == 3) {
            operations.pop();
        }
        operations.push(digit.textContent)
    }
}))
operators.forEach(operator => operator.addEventListener("click", () => {
    operations = []
    x_opr_y.textContent = result.textContent + operator.textContent
    operations.push(result.textContent)
    operations.push(operator.textContent)
}))
equals_btn.addEventListener("click", () => {
    if (operations.length == 3) {
        if (operations.includes("*")) {
            let res = String(Number(operations[0]) * Number(operations[2]))
            result.textContent = res;
            operations = []
        } else if (operations.includes("+")) {
            let res = String(Number(operations[0]) + Number(operations[2]))
            result.textContent = res;
            operations = []
        } else if (operations.includes("-")) {
            let res = String(Number(operations[0]) - Number(operations[2]))
            result.textContent = res;
            operations = []
        } else if (operations.includes("/")) {
            let res = String(Number(operations[0]) / Number(operations[2]))
            result.textContent = res;
            operations = []
        }

    }
})