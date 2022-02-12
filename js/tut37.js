console.log("This is tutorial 37");

// pretend that this response is coming from the server

const students = [
    {name:"krishna",subject:"javascript"},
    {name:"murari",subject:"Machine Learning"}
]

function enrollStudent(student,callback){
    setTimeout(function(){
        students.push(student);
        console.log("student has been enrolled");
        callback();
    },8000);
} 

function getStudents (){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`;
        });
          document.getElementById("students").innerHTML = str;
          console.log("student have been fetched");
          
    },1000);
}

let newStudent = {name:"sunny",subject:"python"}
enrollStudent(newStudent,getStudents);
//getStudents();