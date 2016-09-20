// var murderer = 'rick';

// var outerFunction = function(){
//   var murderer = 'marc';

//   var innerFunction = function(){
//     murderer = 'valerie';
//   }

//   innerFunction();
// }

// outerFunction();
// console.log('the murderer is ', murderer);

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