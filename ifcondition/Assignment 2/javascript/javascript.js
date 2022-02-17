let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour >= 6 && hour <= 10) { 
  textHolder.innerHTML = "Good morning :)";
} else if (hour > 11 && hour < 13 ) { 
  textHolder.innerHTML = "It is lunch time :P";
} else if (hour > 13 && hour < 17) { 
  textHolder.innerHTML = "Good afternoon (:";
} else if (hour >= 17 && hour <= 19) { 
  textHolder.innerHTML = "It is dinner time :b";
} else if (hour >= 19 && hour <= 22) { 
    textHolder.innerHTML = "Good evening :)";
} else {
  textHolder.innerHTML = "Goodnight :o Zz";
}