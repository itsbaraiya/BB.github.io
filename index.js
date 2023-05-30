const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item=document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const multiple= document.querySelector('.hero .bbb .multiple-text ' );

hamburger.addEventListener('click',()=>{   
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  
    
});
document.addEventListener('scroll',()=>{
var scroll_position = window.scrollY;
if(scroll_position > 250){
    header.style.backgroundColor = '#29323c';
}
else{
    header.style.backgroundColor = 'transparent';
}
});


menu_item.forEach((item) => {
   item.addEventListener('cilck',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
   }) ;
});
 

var typed = new Typed('.multiple-text',
{
    strings:['Frontend Developer!!','Android Developer!!','Dancer!!', 'Singer!!'],
typeSpeed :100,
backSpeed :100,
backDelay :100,
loop:true

}

);

