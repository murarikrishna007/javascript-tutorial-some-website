
// pretend that this response is coming from the server

const students = [
    {name:"krishna",subject:"javascript"},
    {name:"murari",subject:"Machine Learning"}
]



function enrollStudent(student){

    return new Promise(function(resolve,reject){

        setTimeout(function(){
            students.push(student);
            console.log("student has been enrolled");
            const error = false;
            //callback();
            if(!error){

                resolve();
            }    
            else{
                reject();
            }
            
        },1000);
       

    })
    
} 

function getStudents (){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`;
        });
          document.getElementById("students").innerHTML = str;
          console.log("student have been fetched");
          
    },2000);
}

let newStudent = {name:"sunny",subject:"python"}
enrollStudent(newStudent).then(function(){
    getStudents();
}).catch(function(){
    console.log("some error occured");
});
//getStudents();



   // or ya upper     let newStudent = {name:"sunny",subject:"python"}
    enrollStudent(newStudent).then(getStudents).catch(function(){
        console.log("some error occured");
    });
    //getStudents();


    // function inside then is run as - resolve()
    // function inside catch is run as - reject()