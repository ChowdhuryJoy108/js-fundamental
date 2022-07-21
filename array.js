var friendsAge = [15,17,18,19,22]; // declaration of an array(collection of elements)

console.log(friendsAge); //indexing start of an array from zero [0]

console.log(friendsAge[0]); //15
console.log(friendsAge[1]); //17
console.log(friendsAge[2]); //18
console.log(friendsAge[3]); //19
console.log(friendsAge[4]); //22

var rahimAge = friendsAge[4];
console.log("Rahim age is : " +rahimAge);


// overwriting or (updating)


friendsAge[3] = 21;
console.log(friendsAge); //now friendsAge[3] = 21

var position = friendsAge.indexOf(17); // find the position of an element.
console.log(position); 

console.log(friendsAge.indexOf(141)); //return -1 coz 141 is not in our defined array above.
