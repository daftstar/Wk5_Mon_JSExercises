// Individual Exercise #1
// Create a function echoecho that takes one parameter str and returns that string twice.


var echoecho = function(string){
	return (string + string);
};


console.log("Should be hellohello:", echoecho('hello'));
console.log("Should be okok:", echoecho('ok'));


//  __________________________________

???????????????????????
// Individual Exercise #2
// Create a function strMult that takes two parameters str and times and returns that string multiplied by the given number of times.



var strMult = function(str, times){
	// return (string * times);
	var result = ''
	for (var i = 0; i<times; i+=1){
		result = result + str;
		console.log('result:' + result)

	}
};


console.log("Should be whatwhat:", strMult('what', 2));
console.log("Should be kkkkk:", strMult('k', 5));


// -----------------

// Individual Exercise #3
// Fix the following code (2 minor problems):

// var dog = {};
// dog['sound] = 'ruff';
// dog.bark = function () {
//   return this.sound + '!';
// };

// console.log("Dog should bark 'ruff!':", dog.bark());



var dog = {};
dog['sound'] = 'ruff';
dog.bark = function () {
  return this.sound + '!';
};

console.log("Dog should bark 'ruff!':", dog.bark());




// --------------
// Individual Exercise #4
// Fix the following code (3 minor problems, 1 logic problem):
// var rabbit = {
//   favFood = 'carrot'
// };
// var mouse = {
//   favFood = 'cheese'
// };

// var speak = function () {
//   return "I want to eat ' + rabbit.favFood;
// };

// console.log("The rabbit says:", speak.call(rabbit));
// console.log("The mouse says:", speak.call(mouse));


var rabbit = {
  favFood: 'carrot'
};

var mouse = {
  favFood: 'cheese'
};

var speak = function (animal) {
  return "I want to eat" + animal.favFood;
};



console.log("The rabbit says:", speak(rabbit));
console.log("The mouse says:", speak(mouse));



//-----------

// Individual Exercise #5
// Complete the missing line so that the following code works:

// var computer = { active: false };
// var otherComputer = { active: false };

// computer.switchOn = ???;
// otherComputer.switchOn = computer.switchOn;

// computer.switchOn();
// console.log("Computer should be active:", computer.active === true);

// otherComputer.switchOn();
// console.log("Other computer should be active:", otherComputer.active === true);


var computer = { active: false };
var otherComputer = { active: false };

computer.switchOn = function(){
	this.active = true
};

otherComputer.switchOn = computer.switchOn;

computer.switchOn();
console.log("Computer should be active:", computer.active === true);

otherComputer.switchOn();
console.log("Other computer should be active:", otherComputer.active === true);


// - - ---  - - -- - - - - - - --    - - - - 


// Individual Exercise #6
// Complete the missing line so that the cute and cuddly forest animal does not die. You must use this in your function.

// var cuteAndCuddlyForestAnimal = {
//   mood: 'lackadaisical',
//   listen: ???
// };

// var hunter = {
//   shoot: function (animal) {
//     if (animal.mood === 'alert') {
//       return "Yes! It dodged the bullet!";
//     }
//     else {
//       return "no0ooOo0o(1-1)o";
//     }
//   }
// }

// cuteAndCuddlyForestAnimal.listen();

// var result = hunter.shoot(cuteAndCuddlyForestAnimal);
// console.log("NO a hunter! Did it live?", result);



var cuteAndCuddlyForestAnimal = {
  mood: 'lackadaisical',
  listen: function (){
  	this.mood = 'alert';
  }
};

var hunter = {
  shoot: function (animal) {
    if (animal.mood === 'alert') {
      return "Yes! It dodged the bullet!";
    }
    else {
      return "no0ooOo0o(1-1)o";
    }
  }
}

cuteAndCuddlyForestAnimal.listen();

var result = hunter.shoot(cuteAndCuddlyForestAnimal);
console.log("NO a hunter! Did it live?", result);

// ------------------------------------------------

// Individual Exercise #7
// Write a function (not a constructor) createRandomNumberGenerator that:

// Returns a function that:
// Returns 9
// var generateNumber = createRandomNumberGenerator();
// console.log('Random number should be 9:', generateNumber());
// console.log('Random number should be 9:', generateNumber());
// console.log('Random number should be 9:', generateNumber());



var createRandomNumberGenerator = function(){
	return function(){
		return 9;
	};
};

var generateNumber = createRandomNumberGenerator();
console.log('Random number should be 9:', generateNumber());
console.log('Random number should be 9:', generateNumber());
console.log('Random number should be 9:', generateNumber());



// ---------------------------------------------------






