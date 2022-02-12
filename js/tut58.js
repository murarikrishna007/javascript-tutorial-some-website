console.log("this is tutorial 58 on sets method");


// set stores unique values
const mySet = new Set(); // Initialize an empty set
console.log("The set looks like :",mySet);

//Adding values to this set 
mySet.add("this");
mySet.add("my name");
mySet.add("this");
mySet.add("that");
mySet.add(44);
mySet.add(true);
mySet.add(false);
mySet.add("that2");

console.log("the set looks like this now :",mySet);

// use a constructor to initialize the set
  let mySet2 = new Set([1,24,"this",false,{a:2,a:4,b:8},"this"]);
   console.log("New set : " , mySet2);

console.log(mySet.size); 

console.log(mySet.has(345)); // check whether set has 345 0r not
console.log(mySet.has(44));   // Get the size of the set

console.log("Before removal" , mySet.has("that2"));
mySet.delete("that2");  // Remove an element from the set

console.log("After removal",mySet.has("that2"));



// Iterating a set
for(let item of mySet){
    console.log("this is :",item);
}


mySet.forEach((item)=>{
    console.log("Item is :", item);
})


// quiz : can you use Array.from(mySet) to convert set into an array
