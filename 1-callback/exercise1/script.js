//Two basic functions: add 2 numbers, multiply 2 numbers
function add(a,b) {
	return a+b;
}

function multiply(a,b){
	return a*b;
}

//Now let's create a host function designed to take one of the above functions as a callback
function doMath(a,b,callback) {
	return callback(a,b);
}

//now, let's take the add function and place it in our doMath host function
alert(doMath(2,3,add)); //returns 5

//now, let's replace the callback with our multiply function
alert(doMath(2,3,multiply));

//you can also write anonymous callback functions that return the same result
doMath(2,2, function(a,b){
	return a*b
})