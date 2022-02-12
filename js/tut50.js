console.log("Project 4 - From validation using regular expression");

/// from validation
 
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validEmail = false;
let validPhone = false;
let validUser = false;

$("#failure").hide();
$("#success").hide();

//console.log(name,email,phone);

name.addEventListener("blur",()=>{
    console.log("name is blurred");
    //validate name  here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,15}$/;
    let str = name.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log("your name valid matched");
        name.classList.remove("is-invalid");
        validUser = true;
    }
    else{
        console.log("your name is no valid")
        name.classList.add("is-invalid");
        validUser = false;
    }
});

email.addEventListener("blur",()=>{
    console.log("email is blurred");
    //validate email  here
    
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log("your email valid matched");
        email.classList.remove("is-invalid");
        validEmail = true;
    }
    else{
        console.log("your email is no valid")
        email.classList.add("is-invalid");
        validEmail = false;
    }
});

phone.addEventListener("blur",()=>{
    console.log("phone is blurred");
    //validate phone  here
    
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log("your phone valid matched");
        phone.classList.remove("is-invalid");
        validPhone = true;
    }
    else{
        console.log("your phone is no valid")
        phone.classList.add("is-invalid");
        validPhone = false;
    }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", (e)=>{
   e.preventDefault();

    console.log("ypu clicked on submit");
    console.log(validEmail,validPhone,validUser);
    // submit your form here
    if(validEmail && validPhone && validUser){
        console.log("phone ,email and user are valid. subiting the form");
        let success = document.getElementById("success");
    success.classList.add("show");
    // failure.classList.remove("show");
    // $("#failure").alert('close');  // //Closes an alert by removing it from the DOM. If the .fade and .show classes are present on the element, the alert will fade out before it is removed.
    $("#failure").hide();
    $("#success").show();
    }
    else{
      console.log("One of phone , email or user are not valid .Hence not submitting the form . plz correct the error and try again.");  
      let failure = document.getElementById("failure");
    failure.classList.add("show"); 
    // success.classList.remove('show');
    // $("#success").alert('close'); //Closes an alert by removing it from the DOM. If the .fade and .show classes are present on the element, the alert will fade out before it is removed.
    $("#success").hide();
    $("#failure").show();
    }

    // let success = document.getElementById("success");
    // success.classList.add("show");
})