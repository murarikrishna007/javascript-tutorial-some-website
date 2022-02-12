console.log("This is tutorial 48");

 // regular experession:
 // Basic function
 // Meta character symbols


 //const regex = /^h/i;


 // Character set - we use []
let regex = /m[aty]rari/; // can be any a ,t or y

 regex = /m[a-z]rari/;  // can be any character from a to z
 regex = /m[^aty]rari/;  // can be any a ,t or y
 regex = /m[^aty]rar[iyu]/;  // can be any a ,t or y + can be an i ,y or  y

let regex = /m[a-zA-Z]rari[iu0-9]/; // we can have as many character sets as we want

 
//quantifiers we use {}
regex = /murar{2}i/; // r can occur exactly 2 times
regex = /har{0,2}y/; // r can occur exactly 0 to 2 (0 or 1 0r 2) times
////////

// Groupings  - we use paranthesis for groupings ()
regex = /(mur){2}([0-9]r){3}/;




//const str = "murari krishna";
// str = " harrry bhai"
// str = "murarri krishna";
 str = "murmurkrishna";







 const str = "murari krishna9";

 let result = regex.exec(str);
 console.log("the result from exec is ",result);

 if(regex.test(str)){
    console.log(`the string ${str} matches the expression ${regex.source}`);

}
else{
    console.log(`the string ${str} does not matches the expression ${regex.source}`);
}