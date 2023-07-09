console.log(`Welcome to Foxiz News`);

let apiKey='003f23e826974bba9f597241645e72a5';
let source='bbc-news';
let url2=`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;

let newsBox=document.getElementById('news');
let weatherBox=document.getElementById('weather');


fetch(url2).then(response=>response.json())
.then(data=>{
    let articles=data.articles;
    let html='';
    articles && articles.forEach(function(element){
        html+=
            `<div class="card_news">
                <div class="headline"><b>Headline : </b>${element.title}</div>
                <div><img src="${element.urlToImage}" alt="${element.source}"></div>
                <div class="description">${element.description}</div>
                <div class="readmore"><a href="${element.url}" target="_blank">Read More</a></div>
            </div>`;
    });
    newsBox.innerHTML=html;
});

// News Api Using ajax

// let xhr=new XMLHttpRequest();

// xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);
// // xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,true);

// xhr.getResponseHeader('Content-Type','application/json');

// xhr.onload=function(){
//     if (this.status===200){
//         let obj=(JSON.parse(this.responseText));
//         let articles=obj.articles;
//         let html='';
//         articles.forEach(function(element){
//             html+=
//             `<div class="card_news">
//                 <div class="headline"><b>Headline : </b>${element.title}</div>
//                 <div><img src="${element.urlToImage}" alt="${element.source}"></div>
//                 <div class="description">${element.description}</div>
//                 <div class="readmore"><a href="${element.url}" target="_blank">Read More</a></div>
//             </div>`
//         });
//         newsBox.innerHTML=html;
//     }
//     else {
//         newsBox.innerHTML=`<div> 404 :( </div>
//         <div> Page Not Found </div>`
//     }
// };

// xhr.send();

// Selecting elements for making theme toggle

let sun=document.getElementById('light');
let moon=document.getElementById('dark');

let nav=document.getElementById('nav');

let darkLogo=document.getElementById('dark_logo');
let lightLogo=document.getElementById('light_logo');

let darkMenu=document.getElementById('dark_menu');
let lightMenu=document.getElementById('light_menu');

let tab=document.querySelectorAll('.tab');

let navLeft=document.getElementById('nav_left');
let iconsLeft=navLeft.querySelectorAll('.icons');

let navRight=document.getElementById('nav_right');
let iconsRight=navRight.querySelectorAll('.icons');

let quicklinks=document.getElementById('quicklinks');

let container=document.getElementById('container');

let footer=document.getElementById('footer');

let themeValue=0;

// Dark Theme

function darkTheme() {
    darkLogo.style.display='none';
    lightLogo.style.display='block';
    sun.style.display='none';
    moon.style.display='flex';
    if (container.offsetWidth<830){
        darkMenu.style.display='block';
        lightMenu.style.display='none';
    }
    else {
        lightMenu.style.display='none';
        darkMenu.style.display='none';
    };
    for(let i=0;i<tab.length;i++){
        tab[i].className='tab_dark';
        iconsLeft[i].className='icons_dark';
    };
    for (let i = 0; i < iconsRight.length; i++) {
        iconsRight[i].className='icons_dark';
    };
    nav.className='navbar_dark';
    quicklinks.className='quicklinks_dark';
    container.className='container_dark';
    footer.className='footer_dark';
};

// Light theme (default)

function lightTheme() {
    darkLogo.style.display='block';
    lightLogo.style.display='none';
    sun.style.display='flex';
    moon.style.display='none';
    if (container.offsetWidth<830){
        darkMenu.style.display='none';
        lightMenu.style.display='block';
    }
    else {
        lightMenu.style.display='none';
        darkMenu.style.display='none';
    };
    for(let i=0;i<tab.length;i++){
        tab[i].className='tab';
        iconsLeft[i].className='icons';
    };
    for (let i = 0; i < iconsRight.length; i++) {
        iconsRight[i].className='icons';
    };
    nav.className='navbar';
    quicklinks.className='quicklinks';
    container.className='container';
    footer.className='footer';
};

//  Loading theme preference of user

let theme=localStorage.getItem('theme');
if (theme==1){
    darkTheme();
}
else{
    lightTheme();
};

// Theme toggle event listener

sun.addEventListener('click',function(){
    themeValue=1;
    localStorage.setItem('theme',themeValue);
    darkTheme();
});

moon.addEventListener('click',function(){
    themeValue=0;
    localStorage.setItem('theme',themeValue);
    lightTheme();
});

// Weather Api using fetch()

let apiKey2='d9bcba0834f7f8e18409e7bc2924fb7c';
let loc='new delhi';
let url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${apiKey2}`;
fetch(url).then(response=> response.json())
.then(data=>{
    let cityName=data.name;
    let clouds=data.clouds.all;
    let lastUpdated=new Date(data.dt*1000);
    let feelsLike=(data.main.feels_like-273.15).toFixed(2);
    let tempMax=(data.main.temp_max-273.15).toFixed(2);
    let tempMin=(data.main.temp_min-273.15).toFixed(2);
    let humidity=data.main.humidity;
    let pressure=data.main.pressure;
    let sunrise=new Date(data.sys.sunrise*1000);
    let sunset=new Date(data.sys.sunset*1000);
    let visibility=(data.visibility/1000);
    let weather=data.weather[0].main;
    let weatherIcon=data.weather[0].icon;
    let windSpeed=(data.wind.speed*3.6).toFixed(2);
    
    weatherBox.innerHTML=
    `<div class="card_weather">
        <div class="location">
            <div class="city_name">${cityName}, Delhi, India</div>
            <div class="last_updated">As of ${lastUpdated}</div>
        </div>
        
        <div class="weather">
            <div class="temp">
                <div class="feels_like">${feelsLike} <sup class="deg"><b>.</b></sup>C</div>
                <div class="main_weather">${weather}</div>
            </div>
            <div class=weather_icon>
                <div class="weather_icon"><img src='https://openweathermap.org/img/wn/${weatherIcon}.png' alt="icon"></div>
            </div>
        </div>
        <div class="sun_rise_set">
            <div class="sunrise"><img src="assets/sunrise.svg" alt="humidity icon"><b>Sunrise : </b> ${'0'+sunrise.getHours()+':'+sunrise.getMinutes()} AM</div>
            <div class="sunset"><img src="assets/sunset.svg" alt="humidity icon"><b>Sunset : </b> ${sunset.getHours()+':'+sunset.getMinutes()} PM</div>
        </div>
        <div class="other_info">
            <div class="humidity"><img src="assets/humidity.svg" alt="humidity icon"><b>Humidity : </b>${humidity} %</div>
            <div class="wind"><img src="assets/wind.svg" alt="humidity icon"><b>Wind Speed : </b>${windSpeed} Km/hr</div>
            <div class="cloud"><img src="assets/clouds.svg" alt="humidity icon"><b>Cloudiness : </b>${clouds} %</div>
            <div class="visibility"><img src="assets/visibility.svg" alt="humidity icon"><b>Visibility : </b>${visibility} km</div>
            <div class="pressure"><img src="assets/pressure.svg" alt="humidity icon"><b>Pressure : </b>${pressure} hPa</div>
        </div>
    </div>`
});
