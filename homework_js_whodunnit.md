#JS Day 1 Homework

Go through each sample code and work out what the output will be and explain what happened.

### Episode 1
```
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
}

printName();

Name variable set to Keith. The function is an anonymous function which returns the name value into the variable.




```

### Episode 2
```
score = 5;

var result = function() {
  var score = 3;
  return score;
}

console.log(result());

```
global variable score set to 5 and reassigned to 3 in the function.



### Episode 3
```
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

myAnimals array declared globally, with three options. These were superceded within the function. 



```

### Episode 4

```
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )
```
Global var of suspectThree is changed within function and displays as Harvey. Original suspectThree is still keith outside of the function so displays keith. 




### Episode 5

```
var detective = {
    name : 'Ace Ventura',
    pet : 'monkey'
  }

var printName = function(detective) {
  return detective.name
}

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
}

console.log(detectiveInfo());
detectiveInfo overrides the 'name' in the detective Hash and returns poirot.

```

### Episode 6
```
var murderer = 'rick';

var outerFunction = function(){
  var murderer = 'marc';

  var innerFunction = function(){
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);
```

Both inner and outer functions are setting the murderer value but the console.log is just taking the global value.


### Episode 7 - Make up your own episode/s!

Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.

var celebrityJuice = {
    firstName : 'Keith',
    surName : 'Lemon'
  }

var printIt = function(celebrityJuice) {

  return celebrityJuice.firstName + " " + celebrityJuice.surName
}

var starsInfo = function() {
  celebrityJuice['firstName'] = 'Ferne'
  celebrityJuice['surName'] = 'Cotton'
  
  return printIt(celebrityJuice);
}

console.log(starsInfo());