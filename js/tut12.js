console.log("hello krishna");

let a = document; 

  a = document.all;
// a=document.body;
// a=document.forms;

// a.forEach(element => {
//    console.log(a); 
// });


Array.from(a).forEach(element => {
   console.log(element);
});

a = document.links[0].href; 

console.log(a);