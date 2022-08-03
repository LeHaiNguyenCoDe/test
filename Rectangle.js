const Calculator = require("./Calculator");

module.exports = class Rectangle {
	constructor(length, width) {
		this.length = length;
		this.width = width;
	}

	area() {
		const calculator = new Calculator(this.length, this.width);
		return calculator.multiply();
	}

	perimeter() {
		const calculator = new Calculator(this.length, this.width);
		return 2 * calculator.plus();
	}
};
