console.log("FunctionEpressions: Example. Used in an array");
var numbers =[1,2,3,4];
console.log(numbers);
console.log("Pass in function that will double each cell's value in our numbers array");
console.log("Map works like a Loop that applies a function to each aray index");
var doubleResults = numbers.map(function (arrayElement){
	return arrayElement*2;
});
console.log(doubleResults);

var myArr =[1,2,3,4];
console.log("Now assigning new string elemnts to the array:Map works like a Loop that applies a function to each aray index");
//note with the map we use the function keyword as map applies the function to each cell of the array
var results = myArr.map(function (arrayElement){
	return "hello";
}
);
console.log(results);

console.log("Calling function in one line");
var sweetAnnouncement = function () { alert(" ATTENTION! \n CUPCAKES \n\n...THAT IS ALL")};
console.log("===========");

var fruits = ["Apple","Orange"];
console.log("Calling map function in one line and returns all index elements printed in alert popup");
var fruitJuice = fruits.map(function(eachFruit){ return "\n" + eachFruit + "juice";}); 
alert(fruitJuice);