const slides = document.querySelectorAll('.post__item'),
    dots = document.querySelectorAll('.dot');
    
const activeSlide = i => {    
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[i].classList.add('active');
};

const activeDot = i => {    
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[i].classList.add('active');
};

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        activeDot(indexDot);
        activeSlide(indexDot);        
    })
});