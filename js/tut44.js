console.log("this is tutorial 44");

// Pretend this is coming from a server as response

let a = "murari";
a = undefined;
if (a != undefined){
    // console.log("This is not undefined");
    throw new Error("this is not undefined");
     
}
else{
    console.log("This is underfined");
}

try{
  console.log("we are inside try block");
  functionmurari();

} catch(error){
   console.log("are you okay");
   console.log(error);
   console.log(error.name);
   console.log(error.message);

} finally {
    console.log("finally we are run this");
     
}