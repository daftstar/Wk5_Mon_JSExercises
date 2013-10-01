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



var strMult = function(string, times){
	return (string * times);
}


var strMult = function(string,times){
	var s = '';
	while (s.length < times) s += string;
	return s;
}


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

var rabbit = function(){
  favFood = 'carrot';
};

var mouse = function(){
  favFood = 'cheese';
};

var speak = function (animal) {
  return "I want to eat" + animal.favFood;
};



console.log("The rabbit says:", speak.call(rabbit));
console.log("The mouse says:", speak.call(mouse));



