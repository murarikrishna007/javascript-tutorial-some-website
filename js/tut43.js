
console.log("This is tutorial 43");

  async function murari() {
      console.log("inside murari function");
      const response = await fetch("https://api.github.com/users");
      console.log("before response");
      const users = await response.json();
      console.log("users resolved");
      return users ;

    //  return "krishna";

}

console.log("Before calling murari");

let a = murari();

console.log("After calling murari");

console.log(a);

a.then(data => console.log(data));

console.log("Last line of this js file ");
 