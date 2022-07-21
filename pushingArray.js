var friendAge = [12,55,27,24];

console.log(friendAge); // initial array 
console.log(friendAge.length); //length of initial array 

friendAge.push(19); //push 19 at the end of the array.

console.log(friendAge); // after pushing 

console.log(friendAge.length); //length of the array after pushing .


//now pop (which remove one single element at a time from the end of an array.)

friendAge.pop(); //poping remove last element of an array.
console.log(friendAge); // after poping 
console.log(friendAge.length); // 4 

// adding an element at beginning of an array using unshift() 

var arr = [1,2,3];
arr.unshift(4);
console.log(arr);//[ 4, 1, 2, 3 ]

//[Es6 using spread] operator adding element at the beginning of an array  using spread operator (...)
var newArr = [5,...arr]; 
console.log(newArr);//[ 5, 4, 1, 2, 3 ]

// adding elements at the beginning of an array using splice method. 

var stringArr = ["Rahim","jhanker","Rahat", "joy"];
stringArr.splice(0,0,"Moon"); // 1st parameter means,where we want to add a element, 2nd perameter means, how many elements we want to cut, 3rd perameter means, what we want to add in an  array.
console.log(stringArr); //[ 'Moon', 'Rahim', 'jhanker', 'Rahat', 'joy' ]

//with these 3 method we can add element at the beginning of an array 

//now lets remove 1st element from an array.

//removing  an elements from the beginning of an array using splice()

var stringArrCon = ["Rahim","jhanker","Rahat", "joy"];
stringArrCon.splice(0,1);
console.log(stringArrCon); //["jhanker","Rahat", "joy"]

// using shift() method.

var shiftArray = ["Rahim","jhanker","Rahat", "joy"];

shiftArray.shift();
console.log(shiftArray);//["jhanker","Rahat", "joy"]


//just removing an element from an array using length.

var array = [1,2,3,4,5,6,7,8,9,0];
array.length = 5;
console.log(array);











