

/*Now let’s understand the meaning of  map() method calls a provided function on each element of the provided array and returns a new array of the same size.


while forEach() method doesn’t return anything, its simple calls the provided function on each element of the array.


let exampleArray = [2,3,4,5,6,7,8];


let mapArrResult = exampleArray.map(num => {
    return num * 2;
});

console.log(mapArrResult);

Result:

4,6,8,10,12,14,1


forEachArrResult = exampleArray.forEach(num => {
     return num * 2;
 });
 
console.log(forEachArrResult);

In the above code example, we are doing the same thing which we have done for map() method but this time we got undefined as a result.

Result:

undefined
*/

const days = [ 1,,2,3,4,5,6];

foreachresult = days.forEach( function( d){
return d * 2;
	
})

//using arrow function
forEachArrResult = days.forEach(num => {
     return num * 2;
 });

console.log('forEach funcion in js return  undefined it just do the operation like database insert --> ' + foreachresult)
 //result undefined


mapresult = days.map(function( d){
	
	return d*2 ;
})


console.log('   map function returns value --> ')


