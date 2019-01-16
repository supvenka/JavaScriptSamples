var totalTrains=12;
var trainsOperational = 8;
console.log("Complex Condition Example");

if(trainsOperational > 0)
{
	{
		if(trainsOperational == totalTrains)
			{
				console.log(" All Trains are running #");
			} else
			{
				for(var trainNumber= 1 ; trainNumber <= totalTrains; trainNumber++)
				{
					if(trainNumber <= trainsOperational)
						{
							console.log("Train #" + trainNumber + " is running");
						} else if(trainNumber == 10 || trainNumber ==12) //Complex condition
						{
							console.log("Train #" + trainNumber + " is A Special train running at noon");
						}
					 else
						{
						 console.log("Train #" + trainNumber + " isNot Operational");
						}
						
				}
			}
			
	}
}
else
{
	 console.log("No trains are operational Today!!!");
	}