const q1_array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]
const q1_arrayStr = [1, "2", "3", 2];


//Q1: We gonna trying to organize the above arrays into individual array that is ascending ordred.

function cleanArray(array) {
	let sortedArray = array.sort((a, b) => a - b);
	let temp = []; //where the
	let subArray = [];
	let cleanArray = [];
	let numArray = sortedArray.filter(item => typeof item === "number");
	let strArray = sortedArray.filter(item => typeof item === "string");

	for(i = 0; i < numArray.length; i++) {
		if(numArray[i] === numArray[i + 1]) {
			temp.push(numArray[i]);
		} else if(numArray[i] === numArray[i - 1]) {
			temp.push(numArray[i]);
			subArray.push(temp);
			temp  = [];
		} else if(numArray[i] !== numArray[i + 1]) {
			subArray.push(numArray[i]);
		}
	}
	cleanArray = cleanArray.concat([subArray], [strArray]);
	if(cleanArray[1][0] === undefined) {
		cleanArray.pop();
	}  
	return cleanArray;
}

console.log("The Array with numbers: ", cleanArray(q1_array));
console.log("the array with strings: ", cleanArray(q1_arrayStr));