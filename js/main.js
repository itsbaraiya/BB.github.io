

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item=document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('#header');
const multiple= document.querySelector('.hero .bbb .multiple-text');
const navbar_brand = document.querySelector('.header .navbar-brand');
const navbar_ul = document.querySelector('.header .nav-list ul');
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const e = document.getElementById('e');


hamburger.addEventListener('click',()=>{   
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
    item.addEventListener('click',() => {
     hamburger.classList.toggle('active');
     mobile_menu.classList.toggle('active');
    }) ;
 });
 document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 0){
        header.style.backgroundColor = 'black';
        navbar_brand.style.color = 'white';
        a.style.color='white';
        b.style.color='white';
        c.style.color='white';
        d.style.color='white';
        e.style.color='white';
        navbar_ul.style.backgroundColor='black';
    }
    else{
        header.style.backgroundColor = 'transparent';
        
        navbar_brand.style.color = 'black';
        navbar_ul.style.backgroundColor='white';
        
    a.style.color='black';
    b.style.color='black';
    c.style.color='black';
    d.style.color='black';
    e.style.color='black';
    }
    });
    
    
 

(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    




    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        
        

        if (this.hash !== "") {
        
               
            event.preventDefault();
            
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $(this).closest('a').addClass('active');
                     
            }   
        }
        
    });
    

    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    


})(jQuery);



var typed = new Typed('.multiple-text',
{
    strings:['A Frontend Developer!!','Ui/Ux Designer'],
typeSpeed :100,
backSpeed :100,
backDelay :100,
loop:true
}

);

          
  /**
   * Portfolio details slider
   */

 var swiper =  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  




 
 
