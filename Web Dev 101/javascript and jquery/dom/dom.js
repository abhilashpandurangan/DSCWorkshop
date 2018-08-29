
document.getElementById("container").innerHTML = "<h5>Hello World!</h5>";

document.getElementById("container").textContent = "<h5>Hello World!</h5>";


 var buttons=document.getElementsByTagName("a");
  for(var i=0;i<3;i++){buttons[i].style.background='red';}

  var buttons=document.getElementsByTagName("a");
   for(var i=0;i<3;i++){buttons[i].style.fontWeight='bold';}

   var buttons=document.getElementsByTagName("a");
    for(var i=0;i<3;i++){buttons[i].style.height='70px';}

var buttons=document.getElementsByClassName("btn");
for(var i=0;i<3;i++){buttons[i].style.background='#000';}


var btn = document.createElement("BUTTON");        // Create a <button> element
var t = document.createTextNode("CLICK ME");       // Create a text node
btn.appendChild(t);                                // Append the text to <button>
document.body.appendChild(btn);
<button>​CLICK ME​</button>​
document.body.removeChild(btn);

document.getElementById('btn3').addEventListener("click",function(){
  document.getElementById('card3').style.background='#000';
});

document.getElementById('btn2').addEventListener("click",function(){
  document.querySelector('img').src='hagrid.jpg';
});


document.getElementById('btn1').addEventListener("mouseenter",function(){
  this.textContent='You just hovered over me';
});
document.getElementById('btn1').addEventListener("mouseout",function(){
  this.textContent='hover over me';
});
