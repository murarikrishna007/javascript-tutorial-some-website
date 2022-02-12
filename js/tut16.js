console.log('hello krishna');

let element = document.createElement('li');
let text = document.createTextNode('I am krishna');
element.appendChild(text);
element.className = "childul";
element.id ="createdLi";

//Add a class name  to the li element//
element.setAttribute('title','mytitle');
element.innerText='Hello this is a created by murari';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);


// console.log(element);


let elems2 = document.createElement('h3');

elems2.id ='elem2';
elems2.className ='elem2';

let tnode = document.createTextNode('This is a created for node elem2');
elems2.appendChild(tnode);
 element.replaceWith(elems2);

 
let elemen= document.createElement('li');
elemen.innerText ='hi murarrrrr';
let myul = document.getElementById('myul');
myul.replaceChild( elemen, document.getElementById('fui'));

//myul.removeChild(document.getElementById('uli'));


let pr = elems2.getAttribute('id');
let p = elems2.hasAttribute('id')
elems2.removeAttribute('id');
elems2.setAttribute('title', 'munna');

console.log(pr,elems2,p);


//quick quiz

// create a heading element with text as  "go to  murariCoding" and crate an a tag outside it with href ="www.google.com"//???????????

// quiz Answers :-

let createX = document.createElement('li');
let textX = document.createTextNode('Hi Krishna Who are you????');

createX.appendChild(textX);
createX.className='createXX';




createX.id ='createYY';
createX.setAttribute('title','createZZ');
createX.innerText='hi bikky how are you';


 let ulis = document.querySelector('ul.this');
 ulis.appendChild(createX);



//console.log(createX);


// the end  ////////////   quiz  //////




