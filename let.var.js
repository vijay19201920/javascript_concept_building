/*let is limited to the block scope 

var is exposed to be used in all function and if it is declared outiside function
it will be treated as global variable and it is attached to window object
if the same var is used by some other library then it can produc issue*/

	hello  = function (){

let name = 'hari'
 return name
	}

	console.log(hello)