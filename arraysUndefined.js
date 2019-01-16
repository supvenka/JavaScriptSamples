console.log("Array and Undefined example");
var arr =[2,5,8,4,7,12,6,9,3,11];
console.log(arr);

console.log("Printing the array contents");
for(var i=0; i< arr.length; i++)
	{
		console.log(arr[i]);
	}
console.log("Using POP to remove the last element of the array");
arr.pop();

console.log("Printing the array contents after popping the last element");
for(var i=0; i< arr.length; i++)
	{
		console.log(arr[i]);
	}

console.log("Using PUSH function to add an element to the end of the array");
arr.push(33);

console.log("Printing the array contents after Adding an elmenent");
for(var i=0; i< arr.length; i++)
	{
		console.log(arr[i]);
	}

console.log("Counting and Printing the even number and ERASING the odd numbers");
//note here we are putting empty cells where we find odd numbers
console.log("We are putting empty cells in the array where we find odd numbers");

var evenCount = 0;
for(var i=0; i< arr.length; i++)
{
	if(arr[i] %2 == 0)
		{
			evenCount++;
		} else{
			arr[i]=undefined;
		}
}
console.log("Event count = " + evenCount);
console.log(arr);
