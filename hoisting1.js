console.log("Hositing: Loading order of variables and functions");
function sumOfSquares(a,b)
{	var x = add(a*a, b*b)
	return x;

	function add(c,d)
	{
		var a = c + d;
		return a;
	}
}

var sq = sumOfSquares(1, 2);
console.log("sq = " + sq);