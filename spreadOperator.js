

/*

* Spread operator can be used in many cases,like when we want to expand,copy,concat,with math object

* it can be used for array copying and object copying

* The rest parameters can be mentioned in a function definition with three dots .... They literally mean “gather the remaining parameters into an array”. 

There’s an easy way to distinguish between them:

When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
When ... occurs in a function call or alike, it’s called a “spread operator” and expands an array into a list.



Rest parameters are used to create functions that accept any number of arguments.
The spread operator is used to pass an array to functions that normally require a list of many arguments.
Together they help to travel between a list and an array of parameters with ease


*/


function suming (...args){
	
	let sum = 0;
	
	for (arg of args) 

		sum += arg  
	
	
	return sum;
	
}


console.log(suming(1,2));
console.log(suming(1,2,3));
console.log(suming(1,2,3,4));
console.log(suming(1,2,3,4,5));


/*Here the first two arguments go into variables and the rest go into titles arra
The rest parameters must be at the end
*/

function showName( firstname , secondname , ...arry){

console.log(firstname);
console.log(secondname);

//access as an array
console.log(arry[0]);
console.log(arry[1]);

}

showName("Julius", "Caesar", "Consul", "Imperator");

/*As we remember, arrow functions don’t have their own this. Now we know 
they don’t have the special arguments object either*/

/*spread operator example of expand*/

let arr = [1,2,3,4,5];


console.log(...arr);

/*spread operator example of concat*/

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,0];


console.log(...arr1 , 1 , ...arr2 , 1)


/*Also, the spread operator can be used to merge arrays:*/

let str = "Hello";

console.log( [...str] ); 


