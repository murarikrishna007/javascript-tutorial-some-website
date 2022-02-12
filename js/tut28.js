console.log('Object Prototype in javascript');

// object literal ; object.prototype

let obj = {
    name: "krishna",
    age:28,
    address: "khanpur villages"
}

function Obj(givenName) {
    this.name = givenName;
}
Obj.prototype.getName = function(){
    return this.name;
}
Obj.prototype.setName = function(newName){
    this.name = newName;
}

let obj2 = new Obj("murari");
console.log(obj);
console.log(obj2)