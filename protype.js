/*
prototype in javascript
*/

function student(){
this.age = 10
this.name= 'nirahu'
}

//declaring an object in js
var studentobj = new student()

console.log(studentobj.age);
console.log(studentobj.name);

studentobj.petname = 'ghurahu' 

console.log(studentobj.petname);

// you cannot use the 'petname' property from different object
// as this property is associated with studentobj

// for example

//creating another object for same CONSTRUCTOR CLASS 
var studentobj2 = new student()


// here we can use the age property as it is defined in the function
console.log(studentobj2.age);

// here we canot use the property petname as it is defined by studentobj
console.log(studentobj2.petname);

// so to avoid this conflict their comes the prototype
// prototype is the object that is associated with every function and object while it is accessible with function
// but not visible with object

/*The prototype object is special type of enumerable object to which additional properties 
can be attached to it which will be shared across all the instances of it's constructor function.*/
// the same property can be added as below


/////////////////////////////////////////
student.prototype.work = 'software engineer'
////////////////////////////////////////

// now this prototype can be accessible with any object


 studentobject3 = new student

console.log(studentobject3.work)

// to debug the prototype we can console prototype

console.log(student.prototype)
//  o / p  ==> software engineer


// we cannot directly use to console the object

console.log(studentobject3.prototype)
// this will produce O/P ==> undefined


console.log(studentobject3.__proto__)


console.log(student.prototype === studentobject3.__proto__)


/*As mentioned before, object's prototype property is invisible.
 Use Object.getPrototypeOf(obj) method instead of __proto__ to access prototype object*/


var proto = Object.getPrototypeOf(studentobject3);  // returns Student's prototype object



/////////////////////////////////////////////////
//Changing Prototype
/*each object's prototype is linked to function's prototype object. 
If you change function's prototype then only new objects will be linked to changed prototype.
 All other existing objects will still link to old prototype of function.*/



// as we are tring to change the 'work' property of function as lohaar as it was assigned by prototype
// so we can update it 
student.prototype = {work : 'lohaar'}


// here we cannot access the new assigned property as the object is created before the change 
// property is called.

console.log(studentobject3.work)

// we will get the old name as 'nirahuwa'

// creating new object to access updated property work of student function

var protoObject4 = new student





console.log('updated name -->  ' , protoObject4.work)
// here we can access the updated property name as the new object is created after the prototype update




 /*
Use of Prototype
The prototype object is being used by JavaScript engine in two things,
 1) to find properties and methods of an object.
 2) to implement inheritance in JavaScript.
 */
var knowledge = protoObject4.toString();





console.log( 'knowledge =  ' , JSON.stringify(knowledge));


/*
In the above example, toString() method is not defined in Student, so how and from where it finds toString()?

Here, prototype comes into picture. First of all, JavaScript engine checks whether toString()
 method is attached to studObj? (It is possible to attach a new function to a instance in JavaScript). 
 If it does not find there then it uses studObj's __proto__ link which points to the prototype object of Student function. If it still cannot find it there then it goes up in the heirarchy and check prototype object of Object function because all the objects are derived from Object in JavaScript, and look for toString() method. Thus, it finds toString() 
method in the prototype object of Object function and so we can call studObj.toString().
*/
