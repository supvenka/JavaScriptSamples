var totalTrains=12;
var trainsOperational = 8;
var dayOftheWeek="Friday";
console.log("Complex Condition AND Example");

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
					if(trainNumber <= trainsOperational && trainNumber != 3)//Train 3 runs only on Friday
						{
							console.log("Train #" + trainNumber + " is running");
						} 
					    else if(trainNumber == 3 ||  trainNumber ==12) //Complex condition
						{
							if(trainNumber == 3 && dayOftheWeek =="Friday") //Complex condition
							{
								console.log("Train #" + trainNumber + " is running on Friday");
							} else
								
							console.log("Train #" + trainNumber + " is A Special train running at noon");

						} 
						
					 else
						{
						 console.log("Train #" + trainNumber + " is Not Operational");
						}
						
				}
			}
			
	}
}
else
{
	 console.log("No trains are operational Today!!!");
	}