console.log('hello');

let cont = document.querySelector('.no'); 
cont = document.querySelector('.container');

let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[0].nodeType;

console.log(nodeName); 
console.log(nodeType);

//node type

/*  1.Element
    2.attribute
    3.text nodeType
    8.comment
    9.document
    10.doctype  */

//console.log(cont.childNodes);
//  console.log(cont.children);

let container = document.querySelector('div.container');

//console.log(container.children[1].children[0].children);

console.log(container.firstChild);
console.log(container.firstElementChild);
console.log(container.lastChild);
console.log(container.lastElementChild);

console.log(container.children);
console.log(container.childElementCount);
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firsrElementChild.nextElementSibling.nextElementSibling);