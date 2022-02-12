console.log('Hello Krishna');


let today = new Date();
//console.log(typeof today);

let otherDate = new Date('8-4-2003 04:54:09');
otherDate = new Date('june 13 1994');
otherDate = new Date('09/16/1994');
//console.log(otherDate);

let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getMonth();
a = otherDate.getTime();
//console.log(a);
otherDate.setDate(23);
otherDate.setMonth(1);  
console.log(otherDate);
