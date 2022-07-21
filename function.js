//basic structure of a function

function sayLoveYou(){
    console.log("Jaaan! I love you!");
}
sayLoveYou();

// Another way of function declaration 

const sayLove = function(){
    console.log("jaan o baby sonar moina  pakhi!");
}


//Es6  Arrow function 

const loveYou = () =>{
    console.log("love you Jaan!");
}

sayLove();
loveYou();


//passing arguments

function doubleIt (digit){
   // console.log(digit * 2);
   return digit * 2;
}

var result = doubleIt(10);
var result2 = doubleIt(50);
var total = result + result2;
console.log(total);
// doubleIt(500);

function add(num, num2){
    var addition = num + num2;
    return addition;    
}

var result = add(10,20);
console.log(result);



