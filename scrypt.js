
/*Carousel logic starts*/

/*Variable declarations*/
const slidesContainer = document.getElementById("projects__slider");
const slide = document.querySelector(".projects__slide");
const slidesArray = Array.from(document.getElementsByClassName("projects__slide"));
const dots = document.getElementsByClassName("projects__dot");

let activeSlide = 0; //used to point the current slide displayed


let sliderDebugger = true; //used to prevent bugs while changing the slides

//function used by the next and prev buttons to change the slide. parameter could be 1 (next slide) or -1 (previous slide)
const plusSlides = (parameter) => {
  if (sliderDebugger === true) { //only executes the code if we says its ok
    sliderDebugger = false; //prevent to executes again this code, wont change the slide

    let slideWidth = slide.clientWidth; 
    activeSlide += parameter; //gives us information of which slide we are going to see
    if(activeSlide < 0){ //if we are in the first slide we want to move to the last one
      slidesContainer.scrollLeft = slideWidth * slidesArray.length;
      activeSlide = slidesArray.length - 1;
    } else if (activeSlide > slidesArray.length - 1){ //if we are in the last one we move to the first
      slidesContainer.scrollLeft = slideWidth * (-1) * slidesArray.length;
      activeSlide = 0;
    } else {
    slidesContainer.scrollLeft += slideWidth * (parameter);
  }
    
  //this timeout will enable another slide change 
    const myTimeout = setTimeout(function(){
      sliderDebugger = true;
      clearTimeout(myTimeout);
    }, 500);

    selectDotColor(); //change the color of the dot that point to the active slide
    
  }

}

//same as plusSlides but works for the dots that point to each slide. SlideNumber is the parameter that each dot passes to the function
const currentSlide = (slideNumber) => {
  if (sliderDebugger === true) { //prevent bugs while changing
    sliderDebugger = false;
    let slideWidth = slide.clientWidth;
    let currentPosition = activeSlide * slideWidth; //the position of the slider we are at the moment we activate this function
    let nextPosition = slideWidth * (slideNumber); //the position we want to go

    slidesContainer.scrollLeft += nextPosition - currentPosition; //we move the amout equivalent to the difference between the position we want to go and the position we are
    activeSlide = slideNumber; //set the new active slide to keep track of the position

    const myTimeout = setTimeout(function(){
      sliderDebugger = true;
      clearTimeout(myTimeout);
    }, 700);

    selectDotColor(); //change the color of the active dot
  }
}

//change the color of the dots
const selectDotColor = () => {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" projects__active", "");
  }
    dots[activeSlide].className += " projects__active";
}

/* CAROUSEL longic ends*/



//get the current year for the copyright
let d = new Date(); 
let currentYear = d.getFullYear(); 
document.getElementById("current-year").innerHTML = currentYear;
