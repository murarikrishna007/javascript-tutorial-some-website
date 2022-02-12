console.log('Welcome to Murari');

/* 
 element selectors:
 1. single element selector
 2. multi element selector

*/

//1. single element selector

let element = document.getElementById('myfirst');

//element = element.className;

//element = element.childNodes;
//element = element.parentNode;
//element.style.color = 'red';
//element.innerText = 'hello krishna';
//element.innerHTML= "<b> Welcome to Krishna</b>";
//console.log(element.innerText);

//console.log(element);




let sel = document.querySelector('#myfirst');

sel = document.querySelector('.child');
sel = document.querySelector('h1');
sel.style.color = "green";
console.log(sel);

 

//2. multi element selector

let elems =document.getElementsByClassName('child');
elems=document.getElementsByClassName('container');

/*elems.array.forEach(element => {
    
}); html element is not used of foreach element 

*/

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = 'red';
});

//OR  

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = 'cyan';
    
}

//console.log(elems[0].getElementsByClassName('child'));

