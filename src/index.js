import { Canvas_Manager } from "./gameInitializer";

window.requestAnimFrame = (function(){ 
    return  window.requestAnimationFrame       ||  
            window.webkitRequestAnimationFrame ||  
            window.mozRequestAnimationFrame    ||  
            window.oRequestAnimationFrame      ||  
            window.msRequestAnimationFrame     ||  
            function( callback ){ 
              window.setTimeout(callback, 1000 / 60); 
            }; 
  })(); 

var canvas = null;
var x = 0; 
  
  
function mainLoop()
{
    window.requestAnimFrame(mainLoop); 
    var ctx = canvas.getContext('2d'); 
    ctx.clearRect(0,0,canvas.width,canvas.height); 
    ctx.fillStyle = "red"; 
    ctx.fillRect(x,100,200,100); 
    x+=5; 
    if (x >= 2000)
    {
        x = -200
    }
} 
  
function init()
{
    const canvas_Manager =  new Canvas_Manager()
    canvas = canvas_Manager.initCanvas("canvas-div", 44)
    window.requestAnimFrame(mainLoop); 
}

window.onload = init;