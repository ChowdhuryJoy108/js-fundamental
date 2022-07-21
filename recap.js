var stack = ['kamal', 'jamal', 'jasim', 'osman'];

var usnshiftStack = stack.unshift('rafiq');
console.log(stack); //['rafiq', 'kamal', 'jamal', 'jasim', 'osman' ]
console.log(usnshiftStack); // unshift() returns length of the array .

var spliceArray = stack.splice(0,0,'salam');
console.log(stack);
console.log(spliceArray); // splice() returns an array 
//[ 'salam', 'rafiq', 'kamal', 'jamal', 'jasim', 'osman' ]

stack.splice(4,0,"jahanara");
console.log(stack); //[ 'salam', 'rafiq', 'kamal', 'jamal','jahanara', 'jasim', 'osman' ]


stack.splice(4,1,"jahan"); 
console.log(stack); //[ 'salam', 'rafiq', 'kamal', 'jamal','jahan', 'jasim', 'osman' ]

//now removing 

stack.shift();
console.log(stack); //['rafiq', 'kamal', 'jamal','jahan', 'jasim', 'osman' ]

stack.splice(0,1);
console.log(stack); //['kamal', 'jamal','jahan', 'jasim', 'osman' ]

stack.splice(2,2);
console.log(stack);//['kamal', 'jamal', 'osman' ]

stack.push('karina');
stack.push('kangana');
console.log(stack); //[ 'kamal', 'jamal', 'osman', 'karina', 'kangana' ]

stack.splice(2,1);
console.log(stack); //[ 'kamal', 'jamal', 'karina', 'kangana' ]

//using spread operator Es6
var teaLine = ["shafiq", "rubel", "sonali",...stack];
console.log(teaLine); //["shafiq", "rubel", "sonali", 'kamal', 'jamal', 'karina', 'kangana' ]

console.log(teaLine.length);
teaLine.length = 6;
console.log(teaLine); //["shafiq", "rubel", "sonali",'kamal', 'jamal', 'karina']

// using of slice() method 

var sliceArray = ['janki', 'chinki', 'minki', 'rinki','chumki','chadni', 'raatri', 'gayetri'];
console.log(sliceArray); //['janki', 'chinki', 'minki', 'rinki','chumki','chadni', 'raatri', 'gayetri']

var afterSliceArray = sliceArray.slice(2,4); // 1st parameter is index start and second is end index 
console.log(afterSliceArray); //["minki","rinki"] 

var afterSliceArrayCon = sliceArray.slice(3); //with single parameter
console.log(afterSliceArrayCon); //['rinki','chumki','chadni', 'raatri', 'gayetri']


console.log(sliceArray); //sliceArray will not change it will remains unchanged. that means slice() creates a new array with sliced values but does not change actual array [ sliceArray ]




