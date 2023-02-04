import { Canvas_Manager } from "./gameInitializer";
import {SpriteRenderer} from "./sceneRendering/spriteRendering/spriteRenderer" 
import {PhysicsEngine} from "./physicsEngine/physicsEngine"

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
  

  
function init()
{
  let oldTime = 0
  const physicsWorld = PhysicsEngine();
  //have a means of unifying physics, sprite, etc

  // put this all in scene renderer initialization
  const canvas_Manager =  new Canvas_Manager()
  canvas = canvas_Manager.initCanvas("canvas-div", 44)

  const ctx = canvas.getContext('2d'); 

  var img = new Image()
  img.src = "../src/spriteRendering/spriteSheets/testSheet.png"

  const spriteRender = new SpriteRenderer(canvas.getContext('2d'))
  spriteRender.importSpriteSheet("testy", img, 8, 8, 0.5)
  spriteRender.setSpriteSheet("testy")
  //this will all fit in scene renderer

  window.requestAnimFrame(mainLoop); 
  function mainLoop(timeStamp)
  {
    window.requestAnimFrame(mainLoop); 
    let deltaTime = timeStamp - oldTime

    //have a list of objects in the environment to iterate over
      
    //physics engine runs here, modifies the posistions of all the objects


    //scene renderer updates the new positions 
    ctx.clearRect(0,0,canvas.width,canvas.height); //reset the frame (put in scene renderer)
    spriteRender.update(x, 500, deltaTime)
  } 
}



window.onload = init;