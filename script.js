const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divison = (a, b) => a / b;
const multiply = (a, b) => a * b;

const operate = (a, op, b) => {
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '/':
            return divison(a, b);
        case '*':
            return multiply(a, b);
        default:
            break;
    }
};
