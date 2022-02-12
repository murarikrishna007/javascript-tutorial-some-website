console.log("this is my tutorial 42");

// Button with id myBtn
let myBtn = document.getElementById("myBtn");

// Div with id content
let content = document.getElementById("content");

// function getData (){
//     console.log("started getData");
//     url = "kri.txt";
//     fetch(url).then((response)=> {
//         console.log("inside first then");
//         return response.text();
//     }).then((data)=> {
//         console.log("inside second then");
//         console.log(data); 
//     })
// }

function getData (){
    console.log("started getData");
    url = "https://api.github.com/users";
    fetch(url).then((response)=> {
        console.log("inside first then");
        return response.json();
    }).then((data)=> {
        console.log("inside second then");
        console.log(data); 
    })
}


// post data

function postData (){
   // console.log("started getData");
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"murari","salary":"123","age":"23"}';
    params = {
        method : 'post',
        header : {
            "content-type" : "application/json"
        },
        // body : JSON.stringify(data);
        body : data
    }
    // fetch(url,params).then((response)=> {
    //    // console.log("inside first then");
    //     return response.json();
    // }).then((data)=> {
    //    // console.log("inside second then");
    //     console.log(data); 
    // })

    //or arrow function sort cut
    fetch(url, params).then(response => response.json()).then(data => console.log(data)
    )
}

// console.log("Before running getData");
// getData();
// console.log("After running getData");
postData();