console.log("Closures : Example of how a whole function is bounded into a variable");
console.log("returning the whole function bu calling return by function name");
function testClosure()
{
	var x = 4;
	function closeX()
	{
		return x;//inner function can access outer function variables. But the vice versa is not possible
	}

	return closeX();//I am return the whole function by calling return by function name;
}

var checkLocal = testClosure(); //whole function closeX is bounded into a variable which returns the value x;
console.log(checkLocal);