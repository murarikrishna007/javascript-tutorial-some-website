console.log("this is tutorial 57 on maps");

// maps in javascript : we can use any type of key or value

const myMap = new Map();
console.log(myMap);

const key1 = "myStr", key2 = {}, key3 = function(){};


// setting map values

myMap.set(key1, "this is a string");
myMap.set(key2, "this is a blank obj");
myMap.set(key3, "this is an empty function");

console.log(myMap);


// getting the values from a map
let value1 = myMap.get(key2);
// let value1 = myMap.get(key1);
// let value1 = myMap.get(key3);

console.log(value1);


//  get the size of the map
 console.log(myMap.size);


 // you can loop using for..of  to get keys and values
 for(let [key,value] of myMap){
     console.log(key , value);
 }


 // get only keys
for (let key of myMap.keys()){
    console.log("key is ",key);
}


// get only values
 for (let value of myMap.values()){
    console.log("value is ",value);
}


// you can loop through a map using  for each loop
myMap.forEach((value,key)=>{
    console.log("key is " , key);
    console.log("value is ", value);
})


// converting map to an array
let myArray = Array.from(myMap);
console.log("Map to array is " , myArray);


// converting map key to an array
let myKeysArray = Array.from(myMap.keys());
console.log("Map to keys array is " , myKeysArray);


// converting map values to an array
let myValuesArray = Array.from(myMap.values());
console.log("Map to values array is " ,myValuesArray);




