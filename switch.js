// finding odd/ even using switch 


var number = 4;
switch(number % 2){
    case 0:
        console.log("its an even number!");
        break;
    case 1:
        console.log("its an odd number!");
    default:
        console.log("Wrong!");
}


//basic structure of switch 


digit  = 10;

switch(digit){
    case 1000:
        console.log("im thousand");
        break;
    case 100:
        console.log("im 100");
        break;

    case 20:
    case 10:
        console.log("im either 10 or 20");
    default:
        console.log("i dont know who u are!");

}


// why we prefer switch over if/else


var num = 5;

if(num > 1000){
    console.log("hey, >1000");
}
else if(num > 100){
    console.log("hey, >100");
}
else if(num > 50){
    console.log("hey, >50");
}
else if(num > 20){
    console.log("hey, >20");
}
else if(num > 10){
    console.log("hey, >10");
}
else if(num > 5){
    console.log("hey, 1");
}
else if( num > 0 ){
    console.log("hey, >5");
}
else{
    console.log("its a negative number");
}
