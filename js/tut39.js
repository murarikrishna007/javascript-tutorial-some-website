 console.log("This tutorial is 39");

// 1  -Promise:  Best video on promises
// 2  -Resolve
// 3  -Reject
// 4  -Pending


function func1(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const error = true;
            if(!error){
                console.log("Function: your promise has been resolved");
                resolve();
            }
            else{
                console.log("Function: your promise has not been resolved");
                reject("Sorry not fulfilled");
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Harry: thank for resolving");
}).catch(function(error){
    console.log("Harry: Very bad bro" + error);
})