import { Canvas_Manager } from "./gameInitializer";
import {SpriteRenderer} from "./spriteRendering/spriteRenderer" 

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
  

  
function init()
{
    const canvas_Manager =  new Canvas_Manager()
    canvas = canvas_Manager.initCanvas("canvas-div", 44)

    const ctx = canvas.getContext('2d'); 

    var img = new Image()
    img.src = "../src/spriteRendering/spriteSheets/testSheet.png"

    const spriteRender = new SpriteRenderer(canvas.getContext('2d'))
    spriteRender.importSpriteSheet("testy", img, 8, 8, 0.5)
    spriteRender.setSpriteSheet("testy")



    window.requestAnimFrame(mainLoop); 
    function mainLoop(timeStamp)
    {
        window.requestAnimFrame(mainLoop); 
        ctx.clearRect(0,0,canvas.width,canvas.height); 
        x+=5; 
        if (x >= canvas.width + 200)
        {
            x = -200
        }
      spriteRender.update(x, 500, timeStamp)
    } 
}



window.onload = init;