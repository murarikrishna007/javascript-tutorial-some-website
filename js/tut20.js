console.log('this is tut 20');


// let imarray =['bhidi','fruit','orange','onion' ];
// // add a key value pair inside the local storage
// localStorage.setItem('name','krishna');
// localStorage.setItem('name1','murari');
// //localStorage.setItem( 'sabji',imarray);
// localStorage.setItem('sabji',JSON.stringify(imarray));


//  ///-clear the entire local storage
//   //localStorage.clear(); 
//   //localStorage.removeItem('name');

 


//  //retrieve an item the local storage
// let name =localStorage.getItem('name');
// console.log(name);

///////////////////

let isarray =['ghh','hghgyt','gfdsdrd','uytyteyytre'];
console.log(isarray);


localStorage.setItem('nam','murarrrr');
localStorage.setItem('nam1','hhhhhh');
localStorage.setItem('kkk',JSON.stringify(isarray));


//localStorage.removeItem(isarray);

//let name3 = localStorage.getItem('name');
name3 = JSON.parse(localStorage.getItem('kkk'));
console.log(name3);


/////// section storage  ////////////////


sessionStorage.setItem('sessionnam','murarrrr');
sessionStorage.setItem('sessionnam1','hhhhhh');
sessionStorage.setItem('sessionzzz',JSON.stringify(isarray));

name4 =JSON.parse(sessionStorage.getItem('yyy'));
console.log(name4);




 
