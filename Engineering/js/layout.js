var title = document.getElementById("header-content");
var classOne = document.getElementById("classOne");
var classTwo = document.getElementById("classTwo");
var classThree = document.getElementById("classThree");
var classFour = document.getElementById("classFour");
var classFive = document.getElementById("classFive");
    
classOne.addEventListener("click", function()
{
  title.innerHTML = "Introduction To Engineering";
});

classTwo.addEventListener("click", function()
{
  title.innerHTML = "Principles of Engineering";
});

classThree.addEventListener("click", function()
{
  title.innerHTML = "Civil Engineering & Architecture";
});

classFour.addEventListener("click", function()
{
  title.innerHTML = "Digital Electronics";
});

classFive.addEventListener("click", function()
{
  title.innerHTML = "Computer-Integrated Manufacturing";
});