countE(); //Calling the function
function countE()
{
	console.log(" Basic Functions Example");
	var phrase = prompt("Enter your phrase");
	if(typeof phrase != "string" || typeof phrase == "object")
		{
			alert("That is NOT a valid entry");
		} else{
			var eCount = 0;
			for(var index=0; index < phrase.length; index++)
				{
					if(phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E')
						{
							eCount++;
						}
				}
				alert("There are " + eCount + " E\'s in the phrase " + phrase + " \.");
				return true;
		}

}