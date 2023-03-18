const slidesContainer = document.getElementById("projects__slider");
const slide = document.querySelector(".projects__slide");
const slidesArray = Array.from(document.getElementsByClassName("projects__slide"));
const dots = document.getElementsByClassName("projects__dot");
let activeSlide = 0;


let sliderDebugger = true;

const plusSlides = (parameter) => {
  if (sliderDebugger === true) {
    sliderDebugger = false;

    let slideWidth = slide.clientWidth;
    activeSlide += parameter;
    if(activeSlide < 0){
      slidesContainer.scrollLeft = slideWidth * 3;
      activeSlide = slidesArray.length - 1;
    } else if (activeSlide > slidesArray.length - 1){
      slidesContainer.scrollLeft = slideWidth * (-3);
      activeSlide = 0;
    } else {
    slidesContainer.scrollLeft += slideWidth * (parameter);
  }
    

    const myTimeout = setTimeout(function(){
      sliderDebugger = true;
      clearTimeout(myTimeout);
    }, 500);

    selectDotColor();
    
  }

}

const currentSlide = (slideNumber) => {
  if (sliderDebugger === true) {
    sliderDebugger = false;
    let slideWidth = slide.clientWidth;
    let currentPosition = activeSlide * slideWidth;
    let nextPosition = slideWidth * (slideNumber);

    slidesContainer.scrollLeft += nextPosition - currentPosition;
    activeSlide = slideNumber;

    const myTimeout = setTimeout(function(){
      sliderDebugger = true;
      clearTimeout(myTimeout);
    }, 700);

    selectDotColor();
  }

}

const selectDotColor = () => {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" projects__active", "");
  }
    dots[activeSlide].className += " projects__active";
}



// const conteiner = document.getElementById("projects__container"),
//       slides = Array.from(document.getElementsByClassName("projects__project-tile")),
//       dots = document.getElementsByClassName("projects__dot"),
//       imageCaptions = Array.from(document.getElementsByClassName("projects__image-caption"));


// let slideIndex = 1;
// let prevSlideIndex = 2;

// let state = {
//   isDragging: false,
//   startPos: 0,
//   currentTranslate: 0,
//   prevTranslate: 0,
//   animationID: 0,

// }


// showSlides(slideIndex);

// // add event listener to our images (<a> elements in #projects)
// slides.forEach((slide, index) => {
//   slide.addEventListener('dragstart', (e) => {
//     return e.preventDefault();
//   });
//   // 
//   //touch events
//   slide.addEventListener('touchstart', touchStart(index));
//   slide.addEventListener('touchend', touchEnd);
//   slide.addEventListener('touchmove', touchMove);
// // 
//   //Mouse events
//   // slide.addEventListener('mousedown', touchStart(index));
//   // slide.addEventListener('mouseup', touchEnd);
//   // // slide.addEventListener('mouseleave', touchEnd);
//   // slide.addEventListener('mousemove', touchMove);
// // 
// });

// //disable context menu
// window.oncontextmenu = function(event){
//   event.preventDefault();
//   event.stopPropagation();
//   return false;
// }

// function touchStart(index){
//   return function(event){
//     state.startPos = event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
//     state.isDragging = true;
//   }
// }

// function touchEnd() {
//   state.isDragging = false;
//   const movedBy = state.currentTranslate - state.prevTranslate;
//   if(movedBy < -100 && state.isDragging === false){
//     plusSlides(1);
//   } else if(movedBy > 100 && state.isDragging === false){
//     plusSlides(-1);
//   }

// }

// function touchMove(event) {
//   if(state.isDragging){
//     const currentPosition = event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
//     state.currentTranslate = state.prevTranslate + currentPosition - state.startPos;
//   }
  
// }



// //control previus and next buttons
// const plusSlides = (n) => {
//     prevSlideIndex = slideIndex;
//     showSlides(slideIndex += n);
// }

// //little dots controls
// function currentSlide(n){
//     prevSlideIndex = slideIndex;
//     showSlides(slideIndex = n);
// }

// function showSlides(n){
//     if(n > slides.length){slideIndex = 1}
//     if(n < 1){slideIndex = slides.length}
//     //remove prevSlide display
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.animation = "fade-out 0.25s";
//         setTimeout(function(){
//           slides[i].style.display = "none";
//         }, 250);
//       }
//       for (let i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" projects__active", "");
//       }
//     //add next slide display
//     slides[slideIndex-1].style.animation = "fade-in 0.5s";
//     setTimeout(function(){
//       slides[slideIndex-1].style.display = "flex";
//     }, 250);
    
//     dots[slideIndex-1].className += " projects__active";
// }