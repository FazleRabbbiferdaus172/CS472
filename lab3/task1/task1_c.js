"use strict"
function* fibGeneration(a,b) {
	yield a;
	yield b;

	while (true) {
		b = a + b;
		a = b - a;
		yield b; 
	}
}

const printFibo = (n, a, b) => {
		const fibGen = fibGeneration(a,b)
		for (let i = 0; i < n; i++) console.log(fibGen.next().value)
	}

printFibo(10, 0, 1)
