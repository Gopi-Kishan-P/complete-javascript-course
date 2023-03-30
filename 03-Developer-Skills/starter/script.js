// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const hi = 'Hi World ok'
console.log(hi);


// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const getAmplitude = (temp) => {
	let min = temp[0];
	let max = temp[0];

	for (let i = 1; i < temp.length; i++) {
		if (typeof temp[1] === 'number') {
			if (min > temp[i]) min = temp[i];
			if (max < temp[i]) max = temp[i];
		}
	}
	console.log(min, max);
	return max - min
}

const amplitude = getAmplitude(temperatures)
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps
const getAmplitude2 = (temp1, temp2) => {
	let temp = temp1.concat(temp2)
	let min = temp[0];
	let max = temp[0];

	for (let i = 1; i < temp.length; i++) {
		if (typeof temp[1] === 'number') {
			if (min > temp[i]) min = temp[i];
			if (max < temp[i]) max = temp[i];
		}
	}
	console.log(min, max);
	return max - min
}

const amplitude2 = getAmplitude2([3, 5, 1], [9, 0, 5])
console.log(amplitude2);

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console
*/
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
