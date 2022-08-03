module.exports = class Calculator {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	plus() {
		return this.a + this.b;
	}

	multiply() {
		return this.a * this.b;
	}
};
