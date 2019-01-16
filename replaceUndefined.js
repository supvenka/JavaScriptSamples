console.log("Array Example of adding,deleting by replacing by undefined");
var passengerList = [];

passengerList = addPassenger("Gregg Pollack",passengerList);
passengerList = addPassenger("Ashley Smith",passengerList);
passengerList = addPassenger("Jon Friskics",passengerList);
console.log(passengerList);//Gregg Pollack,Ashley Smith,Jon Friskics

passengerList =deletePassenger("Ashley Smith",passengerList);
console.log(passengerList);//Gregg Pollack,undefined,Jon Friskics

passengerList =addPassenger("Adam Rensel",passengerList);
console.log(passengerList);//Gregg Pollack,Adam Rensel,Jon Friskics

passengerList =deletePassenger("Ashley Smith",passengerList);
console.log(passengerList);//Passenger not found

passengerList =deletePassenger("Gregg Pollack",passengerList);
console.log(passengerList);//undefined,Adam Rensel,Jon Friskics

passengerList =addPassenger("Jennifer Borders",passengerList);
console.log(passengerList);//Jennifer Borders,Adam Rensel,Jon Friskics

function addPassenger(name, passengerList)
{
	if (passengerList.length == 0)
		{
			passengerList.push(name);
		} else{
			for (var i=0; i<passengerList.length ; i++)
				{
					if (passengerList[i] == undefined)
						{
							passengerList[i] = name;
							return passengerList;
						} else if(i == passengerList.length -1)
						{
							passengerList.push(name);
							return passengerList;
						}
				}
		}
	return passengerList;
}

function deletePassenger(name, passengerList)
{
	if(passengerList.length == 0)
		{
			console.log("PassengerList is EMPTY");
		} else{
			for (var i=0; i<passengerList.length ; i++)
			{
				if (passengerList[i] == name)
					{
						//Note it is not popping the name , as pop will reduce the length this is just setting the index of the name to undefined.
					console.log("Deleting the passenger name from the list by setting it to undefined.");
						passengerList[i] = undefined;
						return passengerList;
					} else if(i == passengerList.length -1)
					{
						console.log("Passenger name NOT found in the list.");
						
					}
			}
		}
	return passengerList;
}