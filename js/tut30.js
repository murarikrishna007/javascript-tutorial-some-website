console.log("Tutorial 30 prototype inheritence ");

 const proto = {

     slogon: function(){
         return `This companey is the best`;
     },
     changeName:function(newName){
         this.name = newName;
     }
 }

 // this create harry object
 let krish = Object.create(proto);
 krish.name = "Murari";
 krish.role = "Programmer";
 krish.changeName("Krishna")
//  console.log(krish); 

 // this also create harry object
  
 const krish1 = Object.create(proto,{
     name:{value: "bikky",writable:true},
     role:{value:"web design"},
 });
 krish1.changeName("gauri");
//  console.log(krish1);

 

 // Employee construction

 function employee(name,salary,experience){
     this.name =  name;
     this.salary = salary;
     this.experience = experience;

 }

 // slogon
  employee.prototype.slogon = function(){
     return `this company is the best . Regards ,${this.name}`;
 }

 // create an object from this constructor now
 let krish3 = new employee('Prachi', 400000, 31); 
 console.log(krish3.slogon()); 

 // programmer

 function programmer(name,salary,experience,language){
     employee.call(this,name,salary,experience);
     this.language = language;

 }

 // inherit the prototye
 
 programmer.prototype = Object.create(employee.prototype);

 // manually set the constuctor

 programmer.prototype.constructor = programmer;

 rohan = new programmer("rohit",2,0, "javascript");
 console.log(rohan);

  