console.log("Storing whole function in a variable and Passing a parameter to the stored function");
function buildCoveTicketMaker(transport)
{
	//Note here it return the function. When the function is stored and the 'name' value is passed it prints it out 
	return function(name){
		alert("Here is your transportation ticket via the transport " + transport + "\.n" +
				"Welcome to the Clod closure Cove , " + name + " !");
	}
}
var getCoveTicket = buildCoveTicketMaker("Aeroplane");//here when buildCoveTicketMaker is called the whole functio is returned.
getCoveTicket("Mario"); //Now Mario is passed as the paramter to the stored function it has