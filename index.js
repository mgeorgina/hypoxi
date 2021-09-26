// BUTTONS
var left_button = document.querySelector(".left-button");

left_button.addEventListener("mouseenter", function(event){

  event.target.style.backgroundSize = "0 0, cover";
  event.target.style.color = "transparent"
  document.querySelector(".butterfly-1").style.visibility = "hidden";
  document.querySelector(".butterfly-3").style.visibility = "hidden";
  document.querySelector(".butterfly-5").style.visibility = "hidden";

});

left_button.addEventListener("mouseleave", function(event){

  event.target.style.backgroundSize = "cover, 0 0";
  event.target.style.color = "#822659"
  document.querySelector(".butterfly-1").style.visibility = "initial";
  document.querySelector(".butterfly-3").style.visibility = "initial";
  document.querySelector(".butterfly-5").style.visibility = "initial";

})

var right_button = document.querySelector(".right-button");

right_button.addEventListener("mouseenter", function(event){

  event.target.style.backgroundSize = "0 0, cover";
  event.target.style.color = "transparent"
  document.querySelector(".butterfly-2").style.visibility = "hidden";
  document.querySelector(".butterfly-4").style.visibility = "hidden";
  document.querySelector(".butterfly-6").style.visibility = "hidden";

});

right_button.addEventListener("mouseleave", function(event){

  event.target.style.backgroundSize = "cover, 0 0";
  event.target.style.color = "#822659"
  document.querySelector(".butterfly-2").style.visibility = "initial";
  document.querySelector(".butterfly-4").style.visibility = "initial";
  document.querySelector(".butterfly-6").style.visibility = "initial";

})

// YEAR
function currentYear(){
  document.getElementById("current-year").innerHTML = new Date().getFullYear();
}
