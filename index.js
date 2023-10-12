

let myBody = document.getElementById("my-website-body");
let button = document.getElementById("click-me");
var colorName = document.getElementById("color-name");
var color = ["Red","Green","Yellow","Purple","Grey","Blue","Orange","Lime","Darkred","Lemon","Silver","Gold"];
// console.log(color.length);

button.addEventListener("click",function(){
    //changing background of the body....
    var randomNumber = Math.floor(Math.random()*12);
    colorName.innerHTML = color[randomNumber];
    myBody.style.backgroundColor=color[randomNumber];
});
