console.log("this is tutorial 46, and regular expression related function javascript"); 
let reg = /murari/ ; // this is regular expression literal in js 
//   reg = /murari/g ; // g means global
//   reg = /murari/i ; // i means case insensitive



console.log(reg.source);
  
let s = "this is great code with murari and also murari bhai and krishna bhai Murari";

// functions to match expressions
// 1. exec() - this function will return an array for match or null for no match

let result = reg.exec(s);

// result = reg.exec(s);
// console.log(result);

// result = reg.exec(s);
// console.log(result); //-- we can use multiple exec with global flag

if (result){
console.log(result);
console.log(result.input);
console.log(result.index);
}
// 2. text()- return true  or false

let result2  = reg.test(s);
console.log(result2); //--- this will only print true  if the "reg" is there in the string "s"  


// 3. match() - it will return an array of results or null

// let result3 = reg.match(s); // -this is wrong !
// let result3 = s.match(reg); // -this is right !
// console.log(result3);

// 4. -search()- return index of first match else -1
//  let result4 = regsearch(s); // -- this is wrong
//  let result4 = s.search(reg); // -- this is right
//  console.log(result4); 

 // 5. -  replace() - return new replaced string with all the replacements. (if no flag is given , first match will be replaced)

 let result5 = s.replace(reg,"krishna");
 console.log(result5)






