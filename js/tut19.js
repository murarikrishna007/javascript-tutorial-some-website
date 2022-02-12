console.log('hello');
///////////////////////////////////
// let kri =document.getElementById('btn');
// kri.addEventListener('click',func1);

// //function define for func1
// function func1(e){
//     console.log('thanks',e);
// }

// //////////////////////////

// // You have to create a variable which is a string containing the text,which is a link you are interested in.

// // You have to fetch all the link from a given page whih conaining this text.


// ///// ::::----ANSWERS:-

// let str = 'javascript';
// let link = document.links;

// console.log(link);
// let href;
// Array.from(link).forEach(function(element){

   
//     console.log(element);
//     href=element.href;
//     console.log(href);

//     if(href.includes(str)){
//         console.log(href);
//     }

   
// });


// //////
// let str1 ="angular";

// let link1 = document.links;

// console.log(link1);
// for(i=0;i<link1.length;i++){
//     let link2 =link1[i];
//     if(link2[href].includes(str1)){
//         console.log(link2[href]);
//     }
// }

/////////0r


// let fun1 ="bikky";
// let link =document.links;

// //console.log(link);
// let href;
// Array.from(link).forEach(function(element){
//     href=element.href;
//     if(href.includes(fun1)){
//         console.log('thanks',href);
//     }
// })

//

// let kri ='killer';
// let link =document.links;

// console.log(link);
// //let href;

// Array.from(link).forEach(function (element){
//     href = element.href;
//     if(href.includes(kri)){
      
//         console.log(href);
//     }
    
// })



/////////////////++++++++   or prafeact answer



let str ='javascript';
let link=document.links;

let arr =new Array();
Array.from(link).forEach(function(element){
    if(element.href.includes(str)){
        arr.push(element.href);
    }
});
console.log(arr);

////////////////////////////////////////











