let index = 0;
let button = document.getElementById("button");
let started = false
let mytimeout;

const carousel = () => {
    if (started) {
        let slides = Array.from(document.getElementsByClassName("carousel"));
        slides.forEach(slide => {
            slide.style.display = "none"
        });
        index++;
        if (index > slides.length) {
            index = 1;
        }
        slides[index-1].style.display = "block";

        mytimeout = setTimeout(carousel, 2500); // Change image every 2.5 seconds
    } else {
        clearTimeout(mytimeout)
    }
} 


const switchstatus = ()=>{
    if (started) {started = false}
    else {started = true}
    carousel();
}


//carousel(); (hvis det skal loope)

button.addEventListener("click", switchstatus); //startes af button