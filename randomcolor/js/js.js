function myfunction(){
    let rndCol = Math.floor(Math.random()*16777215).toString(16); 
    document.body.style.backgroundColor="#"+rndCol
}

document.getElementById("button").addEventListener("click", myfunction);
