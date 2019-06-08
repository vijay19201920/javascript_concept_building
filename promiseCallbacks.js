/*In what senarion we should use call backa nd promises*/

//https://www.youtube.com/watch?v=ubUQfeWSYk4


/* In callbacks all functions call asynchronusly
functions are dependendent on one another
*/
// error is the boolean weather ir is error or not

first(2, function(firstvalue , error){
 
if(!error){

	second(firstvalue , function(secondvalue , error){

		if(!error){

           third(secondvalue ,function(thirdvalue , error){

           		console.log(thirdvalue);

           })

		}

	})
}

}); 


// here we return the callback function
// callback is a function refered as a value as the parameter as we can obsorve from the first calling their we have used 
//one is value and other is function so in the first function calling we are receiving the function as aparameter
// in the callback need to send if their is error or not
function first(value , callback){

callback (value + 2 , false);
}

function second(value , callback){

callback (value + 2 , false);
	
}

function third(value , callback){

callback (value + 2 , false);
}


// lets see how to use promise

// to use the promise we return the value from the function
// using the constructor we create the new promise 

// Their are many ways to use promese their are many module avaliable in node js and javascript that
//provides the promises function


// Below is the example of using promise constructor function


var promise  =  new Promise(function(resolve, reject){

resolve(2);
});

// then will only be executed only if we get the resolve value
promise.then(function(response){

console.log('response promise -->' + response)

})


// here we do not need to send the value in the function it will receive the value from the previous function
promise.then(fourth).then(fifth).then(sixth).then(function(response){

	console.log(response)
})

// in promise we have minimul line of code as we can see the callback functrions are messy and it difficult for any 
// other developer to read the code.
// 50 to 60 callbavck leads us to hell and that hell leads us to promises
function fourth(value ){

return value + 2;
}

function fifth(value ){

return value + 2;	
}

function sixth(value){

return value + 2 + '-- this is promise--';
}

