"use strict";
const computeSumOfSquares = (nums) => {
	return nums.reduce(
		(x,y) => x + y*y, 0
	)
}

console.log(computeSumOfSquares([1,2,3]))
