/*https://appdividend.com/2019/04/08/javascript-null-undefined-and-nan-tutorial-with-example/

their are 6 primitive data type in javascript

1) Boolean
2) Number
3) String
4) Null
5) Undefined
6) Symbol

null => 
* The value null represents the intentional absence of any object value.
* In JavaScript, the data type of null is an object.


undefind => The undefined property indicates that the variable has not been assigned a value, or not declared at all. 
NaN => The NaN property represents a “Not-a-Number” value. The NaN property indicates that a value is not a legitimate number.
       The NaN is a property of the global object.

If a number is enclosed in quotes, it is considered a string; e.g., "5" is a string, whereas 5 is a number

*/

// If we assign null to any variable it will return null.
const marvel = null
console.log(marvel)
//o/p => null


// The data type of null is object
console.log(typeof(null))
//op => object

// it does not have any effects on operations
console.log(null / 5)
console.log(null - 3 )
console.log(null + 2)

// If we do not define value as null it will throw error as now commenting as it does not  execute the fyrther code
//console.log(notmarvel)

// undefined
// the variable has been declared but it values are not assigned

let marvels
console.log(" undefined --> " + marvels == undefined)


/*if the marvels is undefined, then it will return a true otherwise false. 
	We have not assigned the value to the marvel yet, that is why it returns undefined.*/

if (typeof marvels === 'undefined') {
   console.log('Marvel is undefined')
}
else {
  console.log('It is not undefined')
}



// difference between null and undefined

console.log(typeof undefined)
//op => undefined
console.log(typeof null)
// o/p => object
console.log(null === undefined )
// o/p => false
console.log(null == undefined)
// o/p => true


/*
NaN is a property of the global object. I think the definition is clear enough.
 JavaScript returns this value when number we’re supposed to get isn’t a number.
 For example, when you’re trying to subtract an “appdividend” from 21 or divide 12 by “KDL”.


 So, the datatype of NaN is number. Not an object or undefined or null.

 If NaN compared to itself returns false, then no matter what we’re going to compare it to, it will always give false.
  See the following code
*/

console.log('string' - 5)
// o/p => NAN

console.log(typeof NaN)
// o/p => number
console.log(NaN == NaN)
// o/p => false
console.log(NaN === NaN)
// o/p => false


