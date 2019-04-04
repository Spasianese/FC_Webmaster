var title = document.getElementById("contentheader");
var content = document.getElementById("below-header-content");
var MultOne = document.getElementById("multione");
var MultTwo = document.getElementById("multitwo");
var MultThree = document.getElementById("multithree");
var select = document.getElementById("multcontent");
var mobNav = document.getElementById("mobilenav");

    
MultOne.addEventListener("click", function()
{
  title.innerHTML = "A Reacting Header";
  content.innerHTML = "The header changed!";
})

MultTwo.addEventListener("click", function()
{
  title.innerHTML = "The Header Has Changed!";
  content.innerHTML = "The Header's reacting!";
})

MultThree.addEventListener("click", function()
{
  title.innerHTML = "I changed!";
  content.innerHTML = "Tada! I was telling the truth!";
})

function classInfo() {
  var course = select.value;
  if (course === "multione") {
title.innerHTML = "Look, it worked!"; 
content.innerHTML = "I changed in small form!";
  } else if (course === "multitwo") { 
title.innerHTML = "It worked again!";
content.innerHTML = "I'm a shifty content box";
  } else {
title.innerHTML = "I Did It!";
content.innerHTML = "I wasn't lying!";
  }
};

function openNav(){
    mobNav.style.zIndex = "9";
  };

function closeNav() {
    mobNav.style.zIndex = "-1";
  };