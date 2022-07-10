let slide;
if (screen.width<=450){
    slide=1;
}
else if (screen.width<=500){
    slide=1.5;
}
else if (screen.width<=650){
    slide=2;
}
else if (screen.width<=850){
    slide=2.5;
}
else if (screen.width<=1000){
    slide=3;
}
else {
    slide=3.5;
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: `${slide}`,
    spaceBetween: 30,
    cssMode: true,
    mousewheel: true,
    keyboard: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

//   let slideWrapper=document.getElementById('slideWrapper');

//   let arr=['http://pixelprime.co/themes/resideo/light/images/properties/prop-7-2-big.jpg','http://pixelprime.co/themes/resideo/light/images/properties/prop-7-2-big.jpg','http://pixelprime.co/themes/resideo/light/images/properties/prop-7-2-big.jpg','http://pixelprime.co/themes/resideo/light/images/properties/prop-7-2-big.jpg','http://pixelprime.co/themes/resideo/light/images/properties/prop-7-2-big.jpg','http://pixelprime.co/themes/resideo/light/images/properties/prop-7-2-big.jpg','http://pixelprime.co/themes/resideo/light/images/properties/prop-7-2-big.jpg','http://pixelprime.co/themes/resideo/light/images/properties/prop-7-2-big.jpg'];


// let html='';
// arr.forEach(element => {
//     console.log(element);
//     html+=`
//     <div class="swiper-slide">
//         <img src="${element}" alt="pic">
//         <div class="swiper_details">
//             <div class="name">Chic Apartment Downtown</div>
//             <div class="price">$ 890,000</div>
//             <div class="facility">2 BD | 2 BA | 920 SF</div>
//             <div class="view_details">VIEW DETAILS</div>
//         </div>
//     </div>`;
// });
// console.log(html);

// slideWrapper.innerHTML=html;