var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,Math.PI*2);
ctx.stroke();

canvas.addEventListener("mousedown",My_Mouse_Down);
function My_Mouse_Down(e){
    var mouseX = e.clientX-canvas.offsetLeft;
    var mouseY = e.clientY-canvas.offsetTop;
    color = document.getElementById("color_input").value;
    console.log("mouseX "+mouseX);
    console.log("mouseY "+mouseY);
   circle(mouseX,mouseY);
}

function circle(mouseX,mouseY){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = document.getElementById("width_input").value;
    ctx.arc(mouseX,mouseY,40,0,Math.PI*2);
    ctx.stroke();   
}
function clearArea(){
    ctx.clearRect (0,0,canvas.width,canvas.height);
}
