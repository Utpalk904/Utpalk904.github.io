console.log('Welcome to Pg.Square');

let nav=document.getElementById('nav');
let circle=document.getElementsByTagName('circle');
let linkSpan=document.getElementsByClassName('tab_links');
let user=document.getElementById('user');
let icon=document.getElementsByClassName('fa_section_1');

window.onscroll = function navChange() {
    if (document.documentElement.scrollTop > 25) {
        nav.className = "nav_change";
        Array.from(circle).forEach(element => {
            element.setAttribute("fill","white");
            element.setAttribute("stroke","black");
        });
        Array.from(linkSpan).forEach(element => {
            element.className = "links_change tab_links";
        });
        Array.from(icon).forEach(element => {
            element.style.color="black";
        });
    }

    else {
        nav.className = "";
        Array.from(circle).forEach(element => {
            element.setAttribute("fill","transparent");
            element.setAttribute("stroke","white");
        });
        Array.from(linkSpan).forEach(element => {
            element.className = "links tab_links";
        });
        Array.from(icon).forEach(element => {
            element.style.color="white";
        });
    };
};

user.addEventListener("mouseover",()=>{
    if (nav.className=="nav_change"){
        Array.from(circle).forEach(element => {
            element.setAttribute("fill","black");
        });
        Array.from(icon).forEach(element => {
            element.style.color="white";
        });

        user.addEventListener("mouseleave",()=>{
            Array.from(circle).forEach(element => {
                element.setAttribute("fill","white");
            });
            Array.from(icon).forEach(element => {
                element.style.color="black";
            });
        });
    }

    else {
        Array.from(circle).forEach(element => {
            element.setAttribute("fill","white");
        });
        Array.from(icon).forEach(element => {
            element.style.color="black";
        });

        user.addEventListener("mouseleave",()=>{
            Array.from(circle).forEach(element => {
                element.setAttribute("fill","transparent");
            });
            Array.from(icon).forEach(element => {
                element.style.color="white";
            });
        });
    };
});