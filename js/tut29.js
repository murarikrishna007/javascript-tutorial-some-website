console.log("project-1  Build a note taking website");

showNotes();
// if user adds a notes , add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
});

//function to show elements from localStorage 
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
                  <div class="notecard my-2 mx-2 card" style="width: 18rem;">

                        <div class="card-body">
                           <h5 class="card-title">Note ${index + 1}</h5>
                            <p class="card-text">${element}</p>
                           <button id ="${index}" onclick ="deleteNotes(this.id)" class="btn   btn-primary">Delete Note</button>

                        </div>
                    </div>  
                `;

    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! "add a Note " section above to add notes.`;
    }

}

//function to delete a note

function deleteNotes(index) {
    console.log('I am deleting a note', index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}

// search input text card

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
         console.log(cardTxt); 
    });

});


//Further Features:
/*
1. Add Title
2. Mark a note as Important
3. Seprate a notes by user
4. sync and host to web server   


*/