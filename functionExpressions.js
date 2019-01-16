console.log("FunctionEpressions: Example. Functions that load on the fly/anonymous functions");
var greeting;
var newCustomer=false;
if(newCustomer)
	{
		greeting = function()
		{
			alert("Congrats you are now a NEW MEMBER to PluralSight");
		}
	} else{
		greeting = function()
		{
			alert("Welcome Back to Plural Sight");
		}
	}

closeTerminal(greeting);

function closeTerminal(message)
{
	message();//Here message = to calling greeting var which holds the function. it is like closeTerminal(greeting) { greeting()}
}

newCustomer=true;
closeTerminal(greeting);