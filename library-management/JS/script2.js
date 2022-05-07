
let container=document.getElementById('container');
let addBtn=document.getElementById('add_btn');
let showBtn=document.getElementById('show_btn');
let searchBtn=document.getElementById('search_btn');

let addSection=document.getElementById('add_books_section');
let showSection=document.getElementById('show_books_section');
let searchSection=document.getElementById('search_books_section');

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
        searchSection.style.display='block';
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
        mobNav.style.position='relative';
        mobNav.style.transform='translateX(0)';
        mobNav.style.transition='0s';
        nav.style.position='absolute';
        nav.style.transform='translateX(-100vw)';
        nav.style.transition='0s';
        addSection.style.display='flex';
    });

    showBtn.addEventListener('click',function(){
        addSection.style.display='none';
        searchSection.style.display='none';
        mobNav.style.position='relative';
        mobNav.style.transform='translateX(0)';
        mobNav.style.transition='0s';
        nav.style.position='absolute';
        nav.style.transform='translateX(-100vw)';
        nav.style.transition='0s';
        showSection.style.display='block';
    });

    searchBtn.addEventListener('click',function(){
        addSection.style.display='none';
        showSection.style.display='none';
        mobNav.style.position='relative';
        mobNav.style.transform='translateX(0)';
        mobNav.style.transition='0s';
        nav.style.position='absolute';
        nav.style.transform='translateX(-100vw)';
        nav.style.transition='0s';
        searchSection.style.display='block';
    });
};

// Toggling Menu

let menuIcon=document.getElementById('menu_icon');
let close=document.getElementById('close');
let nav=document.getElementById('nav');
let mobNav=document.getElementById('mob_nav');

menuIcon.addEventListener('click', function(){
    mobNav.style.position='absolute';
    mobNav.style.transform='translateX(100vw)';
    mobNav.style.transition='1s';
    nav.style.position='relative';
    nav.style.transform='translateX(0)';
    nav.style.transition='1s';
});

close.addEventListener('click',function(){
    mobNav.style.position='relative';
    mobNav.style.transform='translateX(0)';
    mobNav.style.transition='1s';
    nav.style.position='absolute';
    nav.style.transform='translateX(-100vw)';
    nav.style.transition='1s';
})

/* <div class="card">
                <div class="header3">Untitled</div>
                <div class="notes">${element}</div>
                <div class="delete_btn">
                    <button id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
                </div>
            </div> */