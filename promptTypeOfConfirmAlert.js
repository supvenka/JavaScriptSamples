console.log("JavaScript: Prompt TypeOf Confirm Alert Example");
var gotUserName = false
while (gotUserName == false)
	{
		var userName = prompt(" Please enter your name");
		
		if (typeof userName == "object")//Notice here we can use === ie 3 equals also like typeof userName === "object"
		{
			alert("You have not provided any Value. Please Enter a UserName ");
		} 
		else
		{
			console.log("Thank you for entering a UserName");
			var userConfirmed = confirm("Are you sure your name is " + userName + "?")//Note confirm value we are storing in a var
			if(userConfirmed == true)//Here we compare it to true or false
			{
				alert("Welcome " + userName + " !");
				gotUserName = true;
			} 
			if(userConfirmed == false)
			{
				alert("Please re-enter the CORRECT user Name");
			} 
		}

	}