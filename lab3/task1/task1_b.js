"use strict";
const printOddNumbersOnly = function (nums) {
		return nums.filter(i => i % 2 === 1)
	}


console.log(printOddNumbersOnly([1,2,3,4,5,6]))
