console.log("Example of MultiDimensional Array");
var animalArr = ["dog", "cat", "pig", "cow"];
console.log(animalArr);

var newBird="peacock";
//Assigning a variable in an array
var birdArr = ["sparrow", "cuckoo", "crow", newBird];
console.log(birdArr);

var arrAnimalsBirds = [animalArr, birdArr];
// ["dog", "cat", "pig", "cow"] ["sparrow", "cuckoo", "crow", peacock]
console.log("Array of Animals + Birds");
console.log(arrAnimalsBirds);//---> Array[4], Array[4]

console.log("Array of Animals");
console.log(arrAnimalsBirds[0]);//---> ["dog", "cat", "pig", "cow"]

console.log("Array of Birds");
console.log(arrAnimalsBirds[1]);//--->["sparrow", "cuckoo", "crow", peacock]

console.log("Get PEACOCK from  arrAnimalsBirds");
console.log(arrAnimalsBirds[1][3]);

console.log("Get CAT  from  arrAnimalsBirds");
console.log(arrAnimalsBirds[0][1]);