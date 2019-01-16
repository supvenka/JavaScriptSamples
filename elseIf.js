var totalTrains=12;
var trainsOperational = 8;
console.log("ELSE-IF Example");
for(var trainNumber= 1 ; trainNumber <= totalTrains; trainNumber++)
	{
		if(trainNumber <= trainsOperational)
			{
				console.log("Train #" + trainNumber + " is running");
			} else if(trainNumber == 10)
			{
				console.log("Train #" + trainNumber + " is A Special train running at noon");
			}
		 else
			{
			 console.log("Train #" + trainNumber + " isNot Operational");
			}
			
	}