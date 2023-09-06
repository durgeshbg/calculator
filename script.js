const display = document.querySelector('.display');

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divison = (a, b) => a / b;
const multiply = (a, b) => a * b;

const operate = (a, op, b) => {
	a = parseInt(a);
	b = parseInt(b);
	let result = 0;
	switch (op) {
		case '+':
			result = add(a, b);
			break;
		case '-':
			result = subtract(a, b);
			break;
		case '/':
			result = divison(a, b);
			break;
		case '*':
			result = multiply(a, b);
			break;
		default:
			break;
	}
	clearText();
	updateText(result);
};

const clearText = () => {
	display.textContent = '';
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
		let values = display.textContent.split(' ');
		if (values.length === 3) operate(...values);
		updateText(` ${e.target.textContent} `);
	})
);

document.querySelector('.calculate').addEventListener('click', (e) => {
	let values = display.textContent.split(' ');
	if(values.length === 3) operate(...values);
});

document.querySelector('.clear').addEventListener('click', clearText);
