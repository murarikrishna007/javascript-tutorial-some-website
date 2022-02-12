console.log("this is tutorial 56 on for in and for-of loops");


 let people = ["krishna","manisha", "barsa","neha","murari","kumar"];

// Traditional  for loop:

//   for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
    
// }

///************ for in loop  */


// 1. Iterating an object
let obj = {
    name:"harry",
    language: "javascript",
    hobbies: "android app development"
}

console.log("obj");

// 1.1  iterating an object using traditional for loop:

// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
    
// }


//or
// 1.2  iterating an object using traditional for-in loop:

for(let key in obj){
    console.log(obj[key]);
}

// we can use for-in with string to loop through all the characters
mystring = "this is my string";
for(let char in mystring){
    console.log(mystring[char]);
}


// Quiz: Use traditional for loop to iterate through the same string




///    ******   for of loop   **********


console.log("************  for of loop starts here  ****************** ");
people = ["manisha", "murari", "barsa","neha"];

for (let name of people){
    console.log(name);
}

for(let name of mystring){
    console.log(name);
}


 