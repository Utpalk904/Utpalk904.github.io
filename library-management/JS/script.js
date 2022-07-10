console.log(`Welcome to Fennec's Online Library`);

let box1=document.getElementById('box1');
let box2=document.getElementById('box2');
let container=document.getElementById('container');

if (container.offsetWidth<=760){
    box1.addEventListener('click',function(){
        box1.style.transform='translateY(-100vh)';
        box1.style.transition='1.5s';
        box2.style.transform='translateY(-93vh)';
        box2.style.transition='1.5s';
    });
}
// box1.addEventListener('click',function(){
//     box1.style.transform='translateY(-100vh)';
//     box1.style.transition='1.5s';
//     box2.style.transform='translateY(-100vh)';
//     box2.style.transition='1.5s';
// });