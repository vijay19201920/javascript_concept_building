/*
https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb

'this' is used inside a function, and will always refer to a single object.

we lose our 'this' reference. When that happens, we end up using confusing hacks to save our reference to 'this'

eg :- 

if(this.isEmpty){
	
var deleteBotton = document.createElement('botton');
deleteBotton.innerHtml  = ' Empty cart';

deleteBotton.className  = 'delete'


var cart  = this.bind;

we loose this object we we use another function so we have to save it in differt variable
}






the JS engine is creating a new game instance and binding pokemon as its this variable. 
It is important to understand that it copies the game function.
After creating a copy of the game function it is able to call relating(), 
although it wasn’t on the pokemon object initially. It will now recognizes its properties (Pika and Chu) 
and its methods.

*/

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
   getPokeName : function (){

		var pokemo = this.firstname + ' ' + this.lastname + 'loves pokemon'   
		return pokemo; 	
   }
};

var game = function( param1 , param2) {
// after binding the function it loose its own this object and uses the bind this object
console.log(this.getPokeName() + '  we ' +param1 + ' loves ' +param2);
 
}

//binding the game function with the pokemon object

var relating = game.bind(pokemon);


relating('harish' , 'ram');


/*
The main differences between bind() and call() is that the call() method:

* Accepts additional parameters as well
* Executes the function it was called upon right away.
* The call() method does not make a copy of the function it is being called on.



call() and apply() serve the exact same purpose. The only difference between 
how they work is that call() expects all parameters to be passed in individually,
 whereas apply() expects an array of all of our parameters
*/








