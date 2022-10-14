const conteiner = document.getElementById("projects__container"),
      slides = Array.from(document.getElementsByClassName("projects__project-tile")),
      dots = document.getElementsByClassName("projects__dot"),
      imageCaptions = Array.from(document.getElementsByClassName("projects__image-caption"));


let slideIndex = 1;
let prevSlideIndex = 2;

let state = {
  isDragging: false,
  startPos: 0,
  currentTranslate: 0,
  prevTranslate: 0,
  animationID: 0,

}


showSlides(slideIndex);

// add event listener to our images (<a> elements in #projects)
slides.forEach((slide, index) => {
  slide.addEventListener('dragstart', (e) => {
    return e.preventDefault();
  });
  // 
  //touch events
  slide.addEventListener('touchstart', touchStart(index));
  slide.addEventListener('touchend', touchEnd);
  slide.addEventListener('touchmove', touchMove);
// 
  //Mouse events
  // slide.addEventListener('mousedown', touchStart(index));
  // slide.addEventListener('mouseup', touchEnd);
  // // slide.addEventListener('mouseleave', touchEnd);
  // slide.addEventListener('mousemove', touchMove);
// 
});

//disable context menu
window.oncontextmenu = function(event){
  event.preventDefault();
  event.stopPropagation();
  return false;
}

function touchStart(index){
  return function(event){
    state.startPos = event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
    state.isDragging = true;
  }
}

function touchEnd() {
  state.isDragging = false;
  const movedBy = state.currentTranslate - state.prevTranslate;
  if(movedBy < -100 && state.isDragging === false){
    plusSlides(1);
  } else if(movedBy > 100 && state.isDragging === false){
    plusSlides(-1);
  }

}

function touchMove(event) {
  if(state.isDragging){
    const currentPosition = event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
    state.currentTranslate = state.prevTranslate + currentPosition - state.startPos;
  }
  
}



//control previus and next buttons
const plusSlides = (n) => {
    prevSlideIndex = slideIndex;
    showSlides(slideIndex += n);
}

//little dots controls
function currentSlide(n){
    prevSlideIndex = slideIndex;
    showSlides(slideIndex = n);
}

function showSlides(n){
    if(n > slides.length){slideIndex = 1}
    if(n < 1){slideIndex = slides.length}
    //remove prevSlide display
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.animation = "fade-out 0.25s";
        setTimeout(function(){
          slides[i].style.display = "none";
        }, 250);
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" projects__active", "");
      }
    //add next slide display
    slides[slideIndex-1].style.animation = "fade-in 0.5s";
    setTimeout(function(){
      slides[slideIndex-1].style.display = "flex";
    }, 250);
    
    dots[slideIndex-1].className += " projects__active";
}