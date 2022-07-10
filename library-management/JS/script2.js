
// Calling Display() function:

Display();

// Closing Alert Message

let alertClose=document.getElementById('alert_close');
let alertMsg=document.getElementById('alert_msg_box');

alertClose.addEventListener('click',function(){
   alertMsg.style.display='none'; 
});

//

let container=document.getElementById('container');
let addBtn=document.getElementById('add_btn');
let showBtn=document.getElementById('show_btn');
let searchBtn=document.getElementById('search_btn');

let addSection=document.getElementById('add_books_section');
let showSection=document.getElementById('show_books_section');
let searchSection=document.getElementById('search_books_section');

// Empty select tag

let genre=document.getElementById('genreval');
genre.selectedIndex=-1;

// Event Listener when screen width is greater than 600px

if (container.offsetWidth>600){
    addBtn.addEventListener('click',function(){
        showSection.style.display='none';
        searchSection.style.display='none';
        addBtn.style.backgroundColor='#f2c7bf';
        showBtn.style.backgroundColor='#FFF0ED';
        searchBtn.style.backgroundColor='#FFF0ED';
        addSection.style.display='flex';
        addBtn.style.borderBottom='2px solid #F6502E';
        showBtn.style.filter='none';
        searchBtn.style.filter='none';
        addBtn.style.filter='drop-shadow(0px 4px 4px rgba(226, 72, 72, 0.25))';
    });
    
    showBtn.addEventListener('click',function(){
        addSection.style.display='none';
        searchSection.style.display='none';
        addBtn.style.backgroundColor='#FFF0ED';
        showBtn.style.backgroundColor='#f2c7bf';
        searchBtn.style.backgroundColor='#FFF0ED';
        showSection.style.display='block';
        showBtn.style.filter='drop-shadow(0px 4px 4px rgba(226, 72, 72, 0.25))';
        searchBtn.style.filter='none';
        addBtn.style.filter='none';
        showBtn.style.borderBottom='2px solid #F6502E';
    });
    
    searchBtn.addEventListener('click',function(){
        addSection.style.display='none';
        searchSection.style.display='flex';
        addBtn.style.backgroundColor='#FFF0ED';
        showBtn.style.backgroundColor='#FFF0ED';
        searchBtn.style.backgroundColor='#f2c7bf';
        searchBtn.style.borderBottom='2px solid #F6502E';
        showSection.style.display='none';
        searchBtn.style.filter='drop-shadow(0px 4px 4px rgba(226, 72, 72, 0.25))';
        addBtn.style.filter='none';
        showBtn.style.filter='none';
    });
}

// Event Listener when screen width is less than 600px (Mobile Version)

else {
    addBtn.addEventListener('click',function(){
        showSection.style.display='none';
        searchSection.style.display='none';
        mobNav.style.transform='translateX(0)';
        mobNav.style.transition='0s';
        nav.style.transform='translateX(-100vw)';
        nav.style.transition='0s';
        addSection.style.transform='translateX(0)';
        // showSection.style.transform='translateX(100vw)';
        // searchSection.style.transform='translateX(100vw)';
        addSection.style.transition='0s';
        addSection.style.display='flex';
    });

    showBtn.addEventListener('click',function(){
        showSection.style.display='block';
        addSection.style.display='none';
        searchSection.style.display='none';
        mobNav.style.transform='translateX(0)';
        mobNav.style.transition='0s';
        nav.style.transform='translateX(-100vw)';
        nav.style.transition='0s';
        // addSection.style.transform='translateX(100vw)';
        showSection.style.transform='translateX(0)';
        // searchSection.style.transform='translateX(100vw)';
        showSection.style.transition='0s 1s';
    });

    searchBtn.addEventListener('click',function(){
        addSection.style.display='none';
        showSection.style.display='none';
        mobNav.style.transform='translateX(0)';
        mobNav.style.transition='0s';
        nav.style.transform='translateX(-100vw)';
        nav.style.transition='0s';
        // addSection.style.transform='translateX(100vw)';
        // showSection.style.transform='translateX(100vw)';
        searchSection.style.transform='translateX(0)';
        searchSection.style.transition='0s';
        searchSection.style.display='block';
    });
};

// Toggling Menu

let menuIcon=document.getElementById('menu_icon');
let close=document.getElementById('close');
let nav=document.getElementById('nav');
let mobNav=document.getElementById('mob_nav');

menuIcon.addEventListener('click', function(){
    mobNav.style.transform='translateX(100vw)';
    if (addSection.style.display!='none'){
        addSection.style.transform='translateX(100vw)';
        addSection.style.transition='1s';
    }
    else if(showSection.style.display!='none') {
        showSection.style.transform='translateX(100vw)';
        showSection.style.transition='1s';
    }
    else if (searchSection.style.display!='none') {
        searchSection.style.transform='translateX(100vw)';
        searchSection.style.transition='1s';
    }
    nav.style.transform='translateX(0)';
    nav.style.transition='1s';
    mobNav.style.transition='1s';
});

close.addEventListener('click',function(){
    mobNav.style.transform='translateX(0)';
    if (addSection.style.display!='none'){
        addSection.style.transform='translateX(0)';
        addSection.style.transition='1s';
    }
    else if(showSection.style.display!='none') {
        showSection.style.transform='translateX(0)';
        showSection.style.transition='1s';
    }
    else if (searchSection.style.display!='none') {
        searchSection.style.transform='translateX(0)';
        searchSection.style.transition='1s';
    }
    mobNav.style.transition='1s';
    nav.style.transform='translateX(-100vw)';
    nav.style.transition='1s';
})

// Object Constructor

class Book{
    constructor(title,author,pgn,genre){
        this.Title=title,
        this.Author=author,
        this.Pgn=pgn,
        this.Genre=genre
    }
};

// Display Function

function Display(){
    let books=localStorage.getItem('books');
    if (books==null){
        booksArr=[];
    }
    else {
        booksArr=JSON.parse(books);
    };

    let html='';
    let html2='';       // for search section

    booksArr.forEach(function(element,index){
        html+=`<div class="card" id="card">
                    <div class="title">Title : ${element.Title}</div>
                    <div class="author">Author : ${element.Author}</div>
                    <div class="pgno">PageNo : ${element.Pgn}</div>
                    <div class="genre">Genre : ${element.Genre}</div>
                    <div class="delete_btn" id=${index} onclick="deleteBook(this.id)">
                        <button>Delete Book</button>
                    </div>
                </div>`;
        html2+=`<div class="card" id="card">
                    <div class="title">Title : ${element.Title}</div>
                    <div class="author">Author : ${element.Author}</div>
                    <div class="pgno">PageNo : ${element.Pgn}</div>
                    <div class="genre">Genre : ${element.Genre}</div>
                    <div class="delete_btn" id=${index} onclick="deleteBook(this.id)">
                        <button>Delete Book</button>
                    </div>
                </div>`;
    });

    let booksCard=document.getElementById('books');
    let searchCard=document.getElementById('search_card');

    if (booksArr.length!=0){
        booksCard.innerHTML=html;
        searchCard.innerHTML=html2;     // Search section
    }
    else {
        booksCard.innerHTML=`Nothing to Show! Use "Add Books" Section to Add a Book.`
        searchCard.innerHTML=`Nothing to Show! Use "Add Books" Section to Add a Book.`
    }

    // Adding Event listener on All Button filter

    let all=document.getElementById('all');
    let fiction=document.getElementById('fiction');
    let novel=document.getElementById('novel');
    let autoBiography=document.getElementById('autobiography');

    all.addEventListener('click',function(){
        all.style.border='2px solid #F6502E';
        all.style.backgroundColor='#f2c7bf';
        fiction.style.border='none';
        novel.style.border='none';
        autoBiography.style.border='none';
        fiction.style.backgroundColor='#FFF0ED';
        novel.style.backgroundColor='#FFF0ED';
        autoBiography.style.backgroundColor='#FFF0ED';
        searchCard.style.display='flex';

        let noResultTxt=document.getElementById('no_result_found_txt');
        noResultTxt.style.display='none';

        // Displaying All Cards that got hidden from other filter buttons

        let card=searchSection.getElementsByClassName('card');
    
        Array.from(card).forEach(function(element){
            let genreTxt=element.getElementsByClassName('genre')[0].innerText.toLowerCase();
            if (genreTxt.includes('genre')){
                element.style.display='flex';
            }
        });
    });

    // Adding Event Listener on 'Fiction' Button Filter

    fiction.addEventListener('click',function(){
        fiction.style.border='2px solid #F6502E';
        fiction.style.backgroundColor='#f2c7bf';
        all.style.border='none';
        novel.style.border='none';
        autoBiography.style.border='none';
        all.style.backgroundColor='#FFF0ED';
        novel.style.backgroundColor='#FFF0ED';
        autoBiography.style.backgroundColor='#FFF0ED';

        let card=searchSection.getElementsByClassName('card');
        let count=0;
        let totalCount=0;

        Array.from(card).forEach(function(element){
            let genreTxt=element.getElementsByClassName('genre')[0].innerText.toLowerCase();
            if (genreTxt.includes('fiction')){
                element.style.display='flex';
                count+=1;
                totalCount+=1;
            }
            else {
                element.style.display='none';
                totalCount+=1;
            };
        });
        if (totalCount!=0) {
            if (count==0) {
                document.getElementById('no_result_found_txt').style.display='block';
            }
            else {
                document.getElementById('no_result_found_txt').style.display='none';
            }
        };
    });

    novel.addEventListener('click',function(){
        novel.style.border='2px solid #F6502E';
        novel.style.backgroundColor='#f2c7bf';
        all.style.border='none';
        fiction.style.border='none';
        autoBiography.style.border='none';
        all.style.backgroundColor='#FFF0ED';
        fiction.style.backgroundColor='#FFF0ED';
        autoBiography.style.backgroundColor='#FFF0ED';

        let card=searchSection.getElementsByClassName('card');
        let count=0;
        let totalCount=0;
        Array.from(card).forEach(function(element){
            let genreTxt=element.getElementsByClassName('genre')[0].innerText.toLowerCase();
            if (genreTxt.includes('novel')){
                element.style.display='flex';
                count+=1;
                totalCount+=1;
            }
            else {
                element.style.display='none';
                totalCount+=1;
            };
        });
        if (totalCount!=0) {
            if (count==0) {
                document.getElementById('no_result_found_txt').style.display='block';
            }
            else {
                document.getElementById('no_result_found_txt').style.display='none';
            }
        };
    });

    autoBiography.addEventListener('click',function(){
        autoBiography.style.border='2px solid #F6502E';
        autoBiography.style.backgroundColor='#f2c7bf';
        all.style.border='none';
        novel.style.border='none';
        fiction.style.border='none';
        all.style.backgroundColor='#FFF0ED';
        novel.style.backgroundColor='#FFF0ED';
        fiction.style.backgroundColor='#FFF0ED';

        let card=searchSection.getElementsByClassName('card');
        let count=0;
        let totalCount=0;
        Array.from(card).forEach(function(element){
            let genreTxt=element.getElementsByClassName('genre')[0].innerText.toLowerCase();
            if (genreTxt.includes('autobiography')){
                element.style.display='flex';
                count+=1;
                totalCount+=1;
            }
            else {
                element.style.display='none';
                totalCount+=1;
            };
        });
        if (totalCount!=0) {
            if (count==0) {
                document.getElementById('no_result_found_txt').style.display='block';
            }
            else {
                document.getElementById('no_result_found_txt').style.display='none';
            }
        };
    });
};

// Add methods to display prototype

Display.prototype.clear=function(){
    document.getElementById('titleval').value='';
    document.getElementById('authorval').value='';
    document.getElementById('pgnoval').value='';
    let genre=document.getElementById('genreval');
    genre.selectedIndex=-1;
}

// Click event listener on Add Book button

let addBookBtn=document.getElementById('add_book_btn');

addBookBtn.addEventListener('click',addBook);

function addBook (){
    let title=document.getElementById('titleval').value;
    let author=document.getElementById('authorval').value;
    let pgn=document.getElementById('pgnoval').value;
    let genre=document.getElementById('genreval').value;
    let books=localStorage.getItem('books');
    if (books==null){
        booksArr=[];
    }
    else {
        booksArr=JSON.parse(books);
    };

    // Preventing Empty input

    if (title!='' && author!='' && pgn!='' && genre!=''){
        let book=new Book(title,author,pgn,genre);
        console.log(book);
        booksArr.push(book);
        localStorage.setItem('books',JSON.stringify(booksArr));
        let display=new Display();
        alertMsg.style.display='flex';
        setTimeout(() => {
            alertMsg.style.display='none';
        }, 3000);
        display.clear();        // It calls the Display() function...
    }
};

// Searching Function

let searchCard2=document.getElementById('search_card');
search=document.getElementById('search');
search.addEventListener('input',function(){
    searchCard2.style.display='flex';
    let searchInput=search.value.toLowerCase();
    let searchCard=searchSection.getElementsByClassName('card');
    let count=0;
    let totalCount=0;
    Array.from(searchCard).forEach(function(element){
        let checkTitle=element.getElementsByClassName('title')[0].innerText.toLowerCase();
        if (checkTitle.includes(searchInput)){
            element.style.display='flex';
            count+=1;
            totalCount+=1;
        }
        else {
            element.style.display='none';
            totalCount+=1;
        };
    });
    if (totalCount!=0) {
        if (count==0) {
            document.getElementById('no_result_found_txt').style.display='block';
        }
        else {
            document.getElementById('no_result_found_txt').style.display='none';
        }
    };
});

// Delete Function

function deleteBook(index){
    let books=localStorage.getItem('books');
    booksArr=JSON.parse(books);
    booksArr.splice(index,1);
    localStorage.setItem('books',JSON.stringify(booksArr));
    Display();
}


let checkGenre=showSection.getElementsByClassName('genre');
