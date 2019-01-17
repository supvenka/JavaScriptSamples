console.log(" Objects:creating, attributes, accessing, modifying deleting, referring ");
console.log("=================");
console.log("Creating an empty object: With no attributes")
var myEmptyBox ={};
console.log("=================");
console.log("Creating an object and declaring their attribues during declaration.");
console.log("Each attribute is sepearated by a , and the attribute value is assigned using a colon :");
var blackcolor = "black";
console.log("We can assign other variable references like blackcolor as attributes to an object");
var bookArray =["great expecatations", "The Remains of the Day"];
console.log("We can assign array variable references like bookArray as attributes to an object");
var myBox = {height:6, width:8, length:5, volume: 480, material: "cardboard", colour: blackcolor, contents: bookArray };
console.log("We can reference the attibutes of an object using a DOT operator");
console.log("myBox.height = " + myBox.height);
console.log("myBox.colour = " + myBox.colour);
console.log("Array attribute myBox.contents = " + myBox.contents);
console.log("Whole Object myBox " + myBox);
console.log("=================");
console.log("Changing the property value");
console.log("Initial value of myBox.volume = " + myBox.volume);
myBox.volume = myBox.width * myBox.length * myBox.height;
console.log(" New value of myBox.volume = " + myBox.volume);
console.log("Initial contents of bookArray = " + bookArray);
console.log("Initial contents of myBox before bookArray change = " + myBox);
myBox.contents.push("Pushing New Value ing Array");
console.log("After change contents of bookArray = " + bookArray);
console.log("After change contents of myBox before bookArray change = " + myBox);
console.log("=================");
console.log("Adding a NEW attribute : WEIGHT to myBox");
myBox.weight=7;
console.log("After adding weight attribuet contents of myBox = " + myBox);
console.log("=================");
console.log("Accessing attributes using the string value of the attribute in the brackets and NOt dot operator");
console.log("myBox.height = " + myBox["height"]);
console.log("myBox.colour = " + myBox["colour"]);
console.log("=================");
myBox["# of stops"]=2;
console.log("After # of stops attribute contents of myBox = " + myBox);

console.log("Adding attributes dynamically");
for(var i=1; i <= myBox["# of stops"]; i++)//i is the value of myBox["# of stops"] =2 so two new attributes dynamicAttr_1 and dynamicAttr_2 are added.
	{
		if(i == 1)
			{
			myBox["dynamicAttr_" + i]="dynamicAttr_One";
			console.log(myBox["dynamicAttr_" + i])
			} else{
				myBox["dynamicAttr_" + i]="dynamicAttr_two";
				console.log(myBox["dynamicAttr_" + i])
			}
	
	}
console.log("=================");
console.log("Deleting attributes of an object. The delete function will always return true");
var delreturn=delete myBox.contents;
console.log("delreturn = " + delreturn);
console.log("After deleting my contents array. myBox = " + myBox);
var nonexitingReturn=delete myBox.nonexitingAttrbute;
console.log("nonexitingReturn = " + nonexitingReturn);
console.log("=================");

var newObj ={age:5, "# my height" : 7};
console.log("Accessing attributes with spaces is using only brackets and cannot be used with dot operator")
console.log("newObj # my height = " + newObj["# my height"]);
console.log("=================");
myBox["# of Books"]=0;
function addBooks(box, name, writer)
{
	box["# of Books"]++;
	box["book" + box["# of Books"]]={title:name, author:writer}
}
console.log("Dynamically adding attribute and assigning the attributes");
addBooks(myBox,"The Remains of the Day1","ChetanBhagat1");
addBooks(myBox,"The Remains of the Day2","ChetanBhagat2");
addBooks(myBox,"The Remains of the Day3","ChetanBhagat3");
console.log("After adding # number of booksx " + myBox);

