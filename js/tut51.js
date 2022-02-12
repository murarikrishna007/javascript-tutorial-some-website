console.log("this is tutorial 51");

// Iterators

function fruitIterator(values){
    let nextIndex = 0;
    //we will return an object
    return {
        next:function(){
            if(nextIndex < values.length){
              // we will return this below object  
              return{
              value: values[nextIndex++],
              done : false
            }

            }
            else{
                // we will return below object with only done
               return {
                   done : true
                } 
            }
        }
    }
}

const myArray = ["apply" , "Grapes" ,"Orange" , "Bhindi"];

console.log("my array is " , myArray);


// using the iterator
const fruits = fruitIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);

console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);


 