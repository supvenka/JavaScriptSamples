console.log("FunctionEpressions: Returning Functions as values, as functions can be treated as expression");
console.log("Array parkRides containes all the rides and the time taken for each ride");
var parkRides = [["Birch Bumpers", 40],["Pines Plunge", 55],["Cedar Coaster", 20]];
console.log(parkRides);
console.log("Array fastPassQueue conatines the next fast pass rides");
var fastPassQueue = ["Cedar Coaster","Pines Plunge","Birch Bumpers"];
console.log(fastPassQueue);
console.log("allRidesNWaitTime : will be the array of all rides and their wait time");
console.log("fastPassRides: Array of the next available fast pass rides in order");
console.log("fastPassRides: The actual ride which our customer will like a ticket");

var wantRide = "Birch Bumpers";
var ticket = buildTicket(parkRides, fastPassQueue, wantRide);
ticket();

wantRide = "Cedar Coaster";
ticket = buildTicket(parkRides, fastPassQueue, wantRide);
ticket();

function buildTicket(allRidesNWaitTime, fastPassRides, customerPick)
{
	if(fastPassRides[0] == customerPick )
		{
			console.log("The customer selected ride and the first fastPassRide in order are SAME");
			var pass = fastPassRides.shift();//Returning and removing the first element in the array
			return function(){alert ("Quick You have got a Pass to " + pass)};//Here we are treating the function as an expression and returning it No extra variable needed.
		} else{
			for (var i =0 ; i <allRidesNWaitTime.length; i++)
			{
					if(allRidesNWaitTime[i][0] == customerPick)//allRidesNWaitTime[i][0] [i][0] gives the ride names in the subbarray
						{
						return function(){
							alert ("A ticket is printing for  " + customerPick + " with wait time " + allRidesNWaitTime[i][1]+ " minutes")
							};
						
						}
				}
		}
}