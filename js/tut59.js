
console.log("this is tutorial 59 on symbols");

// Symbols
const sym1 = Symbol("My Identifier");
const sym2 = Symbol("My Identifier");

// console.log("Symbol is :", sym1);
// console.log(" Type Symbol is :", typeof sym1);
console.log(sym1 === sym2);



const a = "this is ";
const b = "this is";

console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

const k1 = Symbol("identifier for k1");
const k2 = Symbol("for k2");

myObj = {};
myObj[k1] = "Harry";
myObj[k2] = "Rohan";
myObj["name"] = "good boys";
myObj[4] = "good int";



console.log(myObj[k2]);
console.log(myObj[k1]);
console.log(myObj.k2);  // Aleart !! :- cannot do this to get rohan  because it is same as myObj ["k2"]

console.log(myObj);


// Symbols are ignored in for in loop
for(key in myObj){
    console.log(key, myObj[key]);
}


console.log(JSON.stringify(myObj)); 


 


