console.log("this is tutorial 49");

//////// there is lot of left in it   +++++++++

//character classes
regex = /\w ari/;  // word character - _ or alphabatbor numbers

const str = "murari krishna9";

let result = regex.exec(str);
console.log("the result from exec is ",result);

if(regex.test(str)){
   console.log(`the string ${str} matches the expression ${regex.source}`);

}
else{
   console.log(`the string ${str} does not matches the expression ${regex.source}`);
}