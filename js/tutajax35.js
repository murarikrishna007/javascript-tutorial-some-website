console.log("This is tuorial 34!!!! Ajax Tutorial");

// fetchBtn
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click",buttonClickHandler);

 
function buttonClickHandler(){
   console.log("you have to clicked the fetchBtn");
    // Instantiate an xhr object
     const xhr = new XMLHttpRequest();

     // open the object
    /* xhr.open("get","kri.txt",true);*/
   /*  xhr.open("get","https://jsonplaceholder.typicode.com/todos/1",true);*/
     //xhr.open("get","kri.txt2",true);
     
     //use this for post request
     xhr.open("post","http://dummy.restapiexample.com/api/v1/create",true);
   //   xhr.getResponseHeader("content-type","application/x-www-form-urlencoded");
     xhr.getResponseHeader("content-type","application/post");


     // ehat to do on progress (optional)
     xhr.openprogress = function(){
         console.log(" on progress");
     }

    // onreadystatechange is xmlhttprequest.readystate on change/////
   //   xhr.onreadystatechange = function (){
   //      console.log("ready state is" , xhr.readyState);

   //   }

      
     // what to do when response is ready
     xhr.onload = function(){
         if(this.status === 200){

            console.log(this.responseText);

         }
         else{
            //  console.error("some error occured")
                console.log("some error occured");
         }
        //  console.log(this.responseText);
     }

     //send the request
     parms = `{"name":"test","salary":"123","age":"23"}`;
     xhr.send(parms);

     console.log("we are done! ??");

}


// fetch popHandler
let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click",popHandler);

function popHandler (){
   console.log("you have to clicked the popHandler");
    // Instantiate an xhr object
     const xhr = new XMLHttpRequest();

     // open the object
     xhr.open("get","http://dummy.restapiexample.com/api/v1/employees",true);

     // what to do when response is ready
     xhr.onload = function(){
      if(this.status === 200){

         let obj = JSON.parse(this.responseText);
          console.log(obj);
          let list = document.getElementById("list");
          str = "";
          for (key in obj){
             str += `<li>${obj[key].employee_name}</li>}`;
          }
          list.innerHTML = str;
      }
      else{

             console.log("some error occured");
      }
  }

  //send the request

  xhr.send();

  console.log("we are done fetching employees!");

}

