$('.owl-carousel').owlCarousel({
    loop:false,
    margin: 20,
    mouseDrag: false,
    items: 1,

});



let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let mobileNavv = document.querySelector('.mobile-nav ul');

hamberger.addEventListener('click', function(){
    mobileNav.classList.add('open');
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');
});

mobileNavv.addEventListener('click', function(){
    mobileNav.classList.remove('open');
});
