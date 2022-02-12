console.log(' tut 21 solve , create a div and inject');

/* 
   you have to create a div and inject it into the page which contain a heading.


   whenever someone click on the div ,it should be converted into an editable item. whenever user clicks away (blur) . save the note into the local storage .


*/
 // create a new element 
let divElem = document.createElement('div');
// Add text to that create element
//:-1
let val = localStorage.getItem('text');
let text;
if (val == null){
   text = document.createTextNode('This is my element. Click to edit it'); 
}
else{
    text  = document.createTextNode(val);
}
divElem.appendChild(text); 

// Give element id , style and class
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem')
divElem.setAttribute('style', 'border:2px solid black;width:154px; margin:34px; padding:23px');

// Grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst'); 


// Insert the element before element with id first
container.insertBefore(divElem, first);

console.log(divElem,container,first);

// add event listener to the divElem
 
divElem.addEventListener('click',function(){
   let noTextArea = document.getElementsByClassName('textarea').length;
   if(noTextArea == 0){
    let html = elem.innerHTML;
    divElem.innerHTML = `<textarea class="from-control textarea" id = "textarea" row = "3">${html}</textarea>`;
}

// Listen for the blur event on textarea

let textarea = document.getElementById('textarea');
textarea.addEventListener('blur', function(){
   elem.innerHTML = textarea.Value; 
   localStorage.setItem('text',textarea.Value )
})

});