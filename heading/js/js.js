let section = document.getElementById("mysection")
let h1 = document.getElementById("myh1")

function barfunction(){
    h1.innerHTML = "im changed";
}
section.addEventListener("mouseover", barfunction);

function nyfunction(){
    h1.innerHTML = "change"
}
section.addEventListener("mouseout", nyfunction)
