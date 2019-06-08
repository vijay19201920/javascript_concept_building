/*

how to get the lenght of javascript object

*/

  var birds = {
        Name: 'Bald Eagle',
        Type: 'Hawk',
        ScientificName: 'Haliaeetus Leucocephalus'
    }

    console.log(Object.keys(birds).length);

    
    /*Get the Length of a String Object*/

    var hello = new String('hello');

    console.log(Object.keys(hello).length)

    /*Getting the Length using Object Constructor*/

    var you = new  Object

    you.name = 'vijay'
    you.work = 'softwareEngineer'

    console.log(Object.keys(you).length)

    /*Everything in JavaScript is an Object. You can define a string object, an array object or 
    you can simply use the Object constructor in JavaScript to create an object and add properties and values to it. 
    Sometimes, you would also require knowing the length of an Object. 
    One of simplest and perhaps the quickest way to get the length 
    of a given object in JavaScript is by using the “length” property of “Object.keys()” method.*/