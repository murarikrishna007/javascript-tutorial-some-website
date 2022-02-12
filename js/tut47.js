 console.log("this is tutorial 47 // regular experession - metacharacters ");
 

//  let regex = /murari/;
 let regex = /murrrrsari/;
 // lets look into some metacharacter symbols
 regex = /^harrdc/; // ^ means expression will match if string starts with  
 regex = /murari$/; // $ at the end of the string means "string ends with"
 regex = /m.urai/; // matches any one character
 regex = /m*urari/; // matches any 0 or more characters
 regex = /mu?ariy?t  /; // ? after character means that character is optional
  
 regex = /m\*urari/ ;


 let str = "murari is a good boy and murari is code with murari";

 let result = regex.exec(str);
 console.log("the result from exec is ",result);
 
 if(regex.test(str)){
     console.log(`the string ${str} matches the expression ${regex.source}`);

 }
 else{
     console.log(`the string ${str} does not matches the expression ${regex.source}`);
 }