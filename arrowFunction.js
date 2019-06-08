
/* arrow functions are a more concise syntax for writing function expressions. They utilize a new token, =>, that looks like a fat arrow.
  Arrow functions are anonymous and change the way this binds in functions.*/

function mul (a,b){

 c = a * b 

 return c

}


var add = function (a,b){

 c =  a+b;
 
  return c
}

var d = mul(2,3);
console.log(d);

var e = add(2,3);
console.log(e);

//arrow function

var x = (a,b) => a *b ;
var y = (a,b) => { return a + b };

var z = (a,b) => {
c = a + b
console.log('this is c' + c)
s= c - a
return s
}


console.log(x(1,2));
console.log(y(2,3));
console.log(z(1,4));


// basic function with one parameter

const phraseSplitterEs6 = phrase => phrase.split(" ");

console.log(phraseSplitterEs6("ES6 Awesomeness"))



/*Object Literal Syntax
Arrow functions, like function expressions, can be used to return an object literal expression.
 The only caveat is that the body needs to be wrapped in parentheses,
 in order to distinguish between a block and an object (both of which use curly brackets) and small brakets are only 
 used if the function is of multiple line*/



 var obje = function san(){
	return{
		name : 'vijay',
		age : 18,
		work : 'software engineer'
 	};

 };


  // arrow function ================>>>>>>>>



 var objet = () => ({

 		name : 'this is arrow function',
		age : 18,
		work : 'software engineer'
 });


///   es5 function ***********...............


 console.log(objet());

 var setNameIdsEs5 = function setNameIds(id, name) {
  return {
    id: id,
    name: name
  };
};


 console.log(setNameIdsEs5(1 , 'ajay'));
 console.log(obje());


// arrow function ===============>>>>>>>>>>>>>


let setNameIdses6 = (id  , name) => {idhai: id} 

console.log('setNameIdses6 ======>      ' + setNameIdses6(2 , 'ajau'))