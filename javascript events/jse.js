document.getElementById("btn").onclick=displaydate;
function displaydate(){
    document.getElementById("eg").innerHTML=Date();
}

function changeText(id) {
    id.innerHTML = "bhavika";
  }

  function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }

  function mover(id) {
    id.innerHTML = "Thank You"
  }
  function mout(id) {
    id.innerHTML = "mouse over me"
  }

var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
count = 0;
box.addEventListener('click', function(){
    count++;
    console.log(count);
    clickCount.innerText = count + " ";
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 

var color=["red", "orange", "green", "maroon", "pink", "violet","chartreuse","blueviolet","aqua"];
var shape = ["square", "rectangle", "circle", "oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-bottomleft", "triangle-bottomright", "triangle-right"];




var currShape="square";

document.getElementById("shape").onclick=function(){
    var rand=shape[Math.floor(Math.random()*shape.length)];
    document.getElementById(currShape).setAttribute("id",rand);
    currShape=rand;
}

document.getElementById("color").onclick=function(){
    var rand=color[Math.floor(Math.random()*color.length)]
    document.getElementById("block").style.backgroundColor=rand;
}