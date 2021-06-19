burger= document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');

burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

var index=1;
showSlides(index);

function plus(n){
    showSlides(index+=n);
}

function current(n){
    showSlides(index=n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("myimg");
    var dots=document.getElementsByClassName("dot");
    if(n>slides.length){index=1};
    if(n<1){index=slides.length};

    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" actice","");
    }
    slides[index-1].style.display="block";
    dots[index-1].className+=" active";

}

