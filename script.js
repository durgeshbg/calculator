const display = document.querySelector('.display');

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

const updateText = (text) => {
	display.textContent += text;
};

document.querySelectorAll('.digit').forEach((button) =>
	button.addEventListener('click', (e) => {
		updateText(e.target.textContent);
	})
);

document.querySelectorAll('.operator').forEach((button) =>
	button.addEventListener('click', (e) => {
		updateText(` ${e.target.textContent} `);
	})
);
