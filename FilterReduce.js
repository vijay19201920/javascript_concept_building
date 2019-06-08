/*The map() method 
creates a new array with the results of calling a provided function on every element in the calling array.


The filter() method creates a new array with all elements that pass the test implemented by the provided function
*/

const days = ['mon' , 'Tuesday' , 'Wed' , 'Thrusday' , 'Friday']

var is = [];

for(i = days.length-1 ; i >= 0 ; i-- ){

is.push(days[i])

} 
 console.log(is);


  var y = days.filter(day => day.length > 4);

  console.log(y);

  const num = [1,2,3,6,7]
// all array have reduce method to get reduce the array in single number
//reduce function has call back function that takes two parameters 
//accumulater is having the inicial values and should be inicialize with zero

// each time we will get the currentvalue and added to accumulator
// first method is call back function
// second argument for reduce method is zero
 const sum = num.reduce((accumulater , currentvalue) => {

return accumulater + currentvalue

 } ,0 );


console.log(sum);

// step 1 :-  a takes the inicial values a = 1
//			currenvalue second          c = 1
// thir values is accumulater + currentvalue  and assigned back to a = 1

// step 2:-  now a has inicial value as 1
//         currentvalue is 2
// return values is 1+2 =3 which is assigned to a 

//step 3  :- now the inicial value of a is 3
 //         current value is 3
 // returns value is 3+ 3 = 6 and assigned back to a ie a becomes 6

 //step 4 :- now inicial value is 6
 //current value is 6
 // return value will be 12 and it will assigned as the response for call backfunction to a as  12

 //step 5 now a has inicial value as 12
 // current value is 7
 // return value is 12 + 7 = 19

// now this 19 will be returned as the loops get over. 


/*The really cool thing about reduce is that it passes the result of one callback function invocation to the next one allowing us to do some crazy ass */



/*
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);*/

// live usage example

/*let itemIDs = [1, 2, 3, 4, 5]; 

itemIDs.reduce((promise, itemID) => {
  return promise.then(_ => api.deleteItem(itemID));
}, Promise.resolve());*/

