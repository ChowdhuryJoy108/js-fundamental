//basic structure of an object.

var student = {
    //properties
    name : "joy",
    id:101,
    phone: "01781667647",
}

var student2 = {
    //properties
    name : "Rakib",
    id:201,
    phone: "01787"
}

console.log(student.name); //1st way of accessing

console.log(student["name"]);//2 way of accessing

var phonePropName = 'phone';
var phoneNo = student[phonePropName];//3 way of accessing

console.log(phoneNo);//01781667647

// now updating
student2.phone = "55447788";
student["id"] = 303; 

//adding new properties 

student2.cinema = "Angi2";
student.program="Bsc in  CSE";


//printing both objects
console.log(student);
console.log(student2);



