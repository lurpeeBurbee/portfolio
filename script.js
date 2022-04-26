
 window.document.onload = setInterval(function dawn(){
 let x = Math.floor(Math.random()*60);
 let y = Math.floor(Math.random()*40);
 document.body.style.backgroundColor = "hsl("+x+", "+y+"%,0%)";
 }, 150);
 
 window.document.onload = setInterval(function blink(){
 let x = Math.floor(Math.random()*60);
 let y = Math.floor(Math.random()*40);
 document.getElementById("divblack").style.backgroundColor = "hsl("+x+", "+y+"%,10%)";
 }, 150);

function load_page() {
     document.getElementById(windowDiv).innerHTML='<object type="text/html" data="newwave.html"></object>';
   };


function enter(element){
element.style.backgroundColor = 'hsl(311, 57%, 40%)';
  };

function leave(element){
     element.style.backgroundColor = 'hsla(260, 80%, 40%,1)';
 };

function reveal() {
var x = document.getElementById('newwave');
  if (x.style.visibility === 'hidden') {
    x.style.visibility = 'visible';
  } else {
    x.style.visibility = 'hidden';
  }
};
function changepic() {
	var i = document.getElementById('newwave');
	if (i.src='images/newwave') {
    i.setAttribute('src','images/hands.jpg');
  } else {
   i.setAttribute('src','images/newwave.jpg');
  }
};