var totalTrains=12;
var trainsOperational = 8;
var trainNumber=1;
while(trainNumber <=trainsOperational)
	{
		console.log("Train # " + trainNumber + " is RUnning");
		trainNumber++;
	}

for(var stoppedTrain= trainsOperational + 1 ; stoppedTrain <= totalTrains; stoppedTrain++ )
	{
	console.log("Train # " + stoppedTrain + " is Not Operational");
	}