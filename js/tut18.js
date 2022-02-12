console.log('Hello Murari');

let btn =document.getElementById('btn');
btn.addEventListener('dbclick',func1);
btn.addEventListener('dblclick',func2);

function func1(e) {
    console.log('thanks', e);
    e.preventDefault();
}

function func2(e){
    console.log('thanks of lot',e);
    e.preventDefault();
    
}


////////////////////or    or    ///////

document.querySelector('.no').addEventListener('click',function() {
   
    console.log('you exited no');
     document.body.style.backgroundColor='pink';
})

////////////////////////

let kr = document.querySelector('.no');
kr.addEventListener('click',funs1);

function funs1(e) {
    console.log('hi hhhhhhe');
   e.preventDefault();
    
}


////////////////////////

document.querySelector('.nok').addEventListener('click',function(){
    console.log('kkkkkkkkkkk');
    preventDefault();
});