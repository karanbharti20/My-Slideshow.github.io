let SlideFirst = 1;

const slideShow = (n) => {
    const slidess = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");
    if(n > slidess.length){
        SlideFirst = 1;
    }
    if(n<1){
        SlideFirst = slidess.length;
    }
    for(let k=0 ; k < slidess.length; k++){
        slidess[k].style.display = "none";
    }
    for(var i=0; i < dots.length; i++){
        if(dots[i].classList.contains("present")){
            dots[i].classList.remove("present");
    }
    }
    slidess[SlideFirst - 1].style.display = "block";
     dots[SlideFirst - 1].classList.add("present");
}
const plusSlides = (n) => {
slideShow(SlideFirst = SlideFirst + n);
};

const thisSlide = (t) => {
    slideShow(SlideFirst = t);
}
slideShow(SlideFirst);