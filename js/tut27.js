
console.log('Object Oriented Programming');

// object literal for creating objects
let car = {
    name:"maruti 800",
    speed: 120,
     car: function (){
        console.log('car is running');
    }
}
console.log(car);

// we have alreay seen constructors like these:
// new Date();


 //creating a constructor for cars
   function genderCar(givenName,givenSpeed){ 
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running `);
    }
    this.analyze = function(){
        console.log(`This Car is slower by ${200 - this.topSpeed} Km/H than Mercedes`);
    }
 }

 let car1 = new genderCar('B.M.W',220);
 let car2 = new genderCar('Maruti Alto', 90);
 let car3 = new genderCar('Mercedes',300);

  console.log(car1);
  console.log(car2);
  console.log(car3);

console.log(car1,car2,car3);

