console.log("Modifying a bound /stored variable when the functional local scope disappeared");
function buildCoveTicketMaker(transport)
{
	var passengerNumber = 0;
	//Note here it return the function. When the function is stored and the 'name' value is passed it prints it out 
	return function(name){
		passengerNumber++;
		console.log("PassengerNumber = " + passengerNumber);
		alert("Here is your transportation ticket via the transport " + transport + "\.n" +
				"Welcome to the Clod closure Cove , " + name + " !" +
				" You are passenger #" + passengerNumber + ".");
	}
}
var getCoveTicket = buildCoveTicketMaker("Aeroplane");//here when buildCoveTicketMaker is called the whole functio is returned.
getCoveTicket("Mario"); //Now Mario is passed as the parameter to the stored function it has and the passenger count is incremented
getCoveTicket("Toad"); 
//Note the passengerNumber even though the function scope disappeared  it keeps progress of the passenger Number;