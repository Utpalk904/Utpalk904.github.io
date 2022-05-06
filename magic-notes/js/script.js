console.log('Welcome to Magic Notes.');

//Toggle Search Bar (mobile v)

let menuIcon=document.getElementById('menuIcon');
menuIcon.addEventListener('click',function(){
    let search=document.getElementById('search');
    if (search.style.display=='none') {
        search.style.display='flex';
        document.getElementById('nav').style.height='7rem';
    }
    else {
        search.style.display='none';
        document.getElementById('nav').style.height='4rem';
    }
})

// Calling showNote Function 
showNotes();

// Add Note Button

let add_btn=document.getElementById('add_btn');

add_btn.addEventListener('click',function(){
    let txtarea=document.getElementById("txtarea");
    let txtarea2=document.getElementById('txtarea2');
    let notes=localStorage.getItem('notes');
    let title=localStorage.getItem('title');
    if (notes==null && title==null){
        notesArr=[];
        titleArr=[];
    }
    else {
        notesArr=JSON.parse(notes);
        titleArr=JSON.parse(title);
    }

    // Preventing input of Empty Note

    if (txtarea.value != '') {
        notesArr.push(txtarea.value);
        titleArr.push(txtarea2.value);
        localStorage.setItem('notes',JSON.stringify(notesArr));
        localStorage.setItem('title',JSON.stringify(titleArr));
    }
    txtarea.value="";
    txtarea2.value="";
    showNotes();
});

// Function to Display Notes
function showNotes(){
    let notes=localStorage.getItem('notes');
    let title=localStorage.getItem('title');
    if (notes==null && title==null) {
        notesArr=[];
        titleArr=[];
    }
    else {
        notesArr=JSON.parse(notes);
        titleArr=JSON.parse(title);
    }
    let html='';
    notesArr.forEach(function(element,index){
        if (titleArr[index]==''){
            html+=`
            <div class="card">
                <div class="header3">Untitled</div>
                <div class="notes">${element}</div>
                <div class="delete_btn">
                    <button id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
                </div>
            </div>`;
        }
        else {
            html+=`
            <div class="card">
                <div class="header3">${titleArr[index]}</div>
                <div class="notes">${element}</div>
                <div class="delete_btn">
                    <button id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
                </div>
            </div>`;
        }
    });

    let content=document.getElementById('notes');
    if (notesArr.length!=0){
        content.innerHTML=html;
    }
    else {
        content.innerText=`Nothing to Show! Use "Add a note" Section Above to Add a Note.`;
    }
}

// Function to delete Notes

function deleteNote(index) {
     let notes=localStorage.getItem('notes');
     let title=localStorage.getItem('title');
     if (notes==null && title==null){
         notesArr=[];
         titleArr=[];
     }
     else {
         notesArr=JSON.parse(notes);
         titleArr=JSON.parse(title);
     }
     notesArr.splice(index,1);
     titleArr.splice(index,1);
     localStorage.setItem('notes',JSON.stringify(notesArr));
     localStorage.setItem('title',JSON.stringify(titleArr));
     showNotes(); 
}

// Search Note
let searchNote=document.getElementById('searchNote');
searchNote.addEventListener('input',function(){
    let inputValue=searchNote.value.toLowerCase();
    let cards=document.getElementsByClassName('card');
    Array.from(cards).forEach(function(element){
        let searchTxt=element.getElementsByClassName('notes')[0].innerText.toLowerCase();
        if (searchTxt.includes(inputValue)){
            element.style.display='block';
        }
        else {
            element.style.display='none';
        }
    });
});

// Search Notes2 (mobilev)
let searchNote2=document.getElementById('searchNote2');
searchNote2.addEventListener('input',function(){
    let inputValue=searchNote2.value.toLowerCase();
    let cards=document.getElementsByClassName('card');
    Array.from(cards).forEach(function(element){
        let searchTxt=element.getElementsByClassName('notes')[0].innerText.toLowerCase();
        if (searchTxt.includes(inputValue)){
            element.style.display='block';
        }
        else {
            element.style.display='none';
        }
    });
});