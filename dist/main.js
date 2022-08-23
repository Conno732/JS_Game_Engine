/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameInitializer.js":
/*!********************************!*\
  !*** ./src/gameInitializer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Canvas_Manager": () => (/* binding */ Canvas_Manager)
/* harmony export */ });

class Canvas_Manager
{
    //params 
    // container - id of div to append canvas to
    // cellsize - size in pixels of cells in the grid
    // width and height - size of canvas
    initCanvas(container, cellSize, width = false, height = false)
    {
    this.div = document.getElementById(container)
    this.canvas = document.createElement('canvas')
    this.div.appendChild(this.canvas)
    this.canvas.height = height ? height : 720
    this.canvas.width = width ? width : 1080
    this.cellSize = cellSize
    return this.canvas
    }
}

/***/ }),

/***/ "./src/spriteRendering/spriteRenderer.js":
/*!***********************************************!*\
  !*** ./src/spriteRendering/spriteRenderer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpriteRenderer": () => (/* binding */ SpriteRenderer)
/* harmony export */ });
/* harmony import */ var _spriteSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spriteSheet */ "./src/spriteRendering/spriteSheet.js");


class SpriteRenderer {
    //This is a test for rendering sprites. I have a lot of thinking to do on how to manage this
    //I've never done this before.
    //The main idea be as follows:
    // -Update function to update the position and maybe other properties
    // - Sprite sheet(s) will be imported with an import 
    // - sprite sheets will be stored in an object and callable by name
    // - 


    constructor(context){
        this.sprites = {}
        this.context = context
        this.curSprite = null
        this.oldTimeStamp = 0
    }

    importSpriteSheet(name, img, w, h, fps) {
        //add error checking for invalid w/h with img size
        this.sprites[name] = new _spriteSheet__WEBPACK_IMPORTED_MODULE_0__.Sprite(img, w, h, fps)
    }

    setSpriteSheet(name){
        this.curSprite = this.sprites[name]
        this.curSprite.frame = 0
    }

    update(x, y, timeStamp){
        var time = timeStamp - this.oldTimeStamp
        var frames = this.curSprite.frames[this.curSprite.frame]
        this.context.drawImage(
            this.curSprite.Sheet,
            frames['x'],
            frames.y,
            this.curSprite.width,
            this.curSprite.height,
            x,
            y,
            64,
            64);
        
        if (time > 1000 * this.curSprite.fps) {
            this.oldTimeStamp = timeStamp
            if (this.curSprite.frame >= this.curSprite.frameCount - 1){
                this.curSprite.frame = -1
            }
            this.curSprite.frame += 1 
        }
            
    }


    
}

/***/ }),

/***/ "./src/spriteRendering/spriteSheet.js":
/*!********************************************!*\
  !*** ./src/spriteRendering/spriteSheet.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sprite": () => (/* binding */ Sprite)
/* harmony export */ });
class Sprite {

    constructor (Sheet, width, height, fps){
        this.Sheet = Sheet
        this.width = width
        this.height = height
        this.fps = fps
        this.frame = 0
        this.frameCount = 0
        this.frames = {}
        for (var i = 0; i < Sheet.height / height; i++){
            for (var j = 0; j < Sheet.width / width; j++){
                var x = j * width
                var y = i * height
                this.frames[this.frameCount] = {x, y}
                this.frameCount += 1
            }
        }
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameInitializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameInitializer */ "./src/gameInitializer.js");
/* harmony import */ var _spriteRendering_spriteRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spriteRendering/spriteRenderer */ "./src/spriteRendering/spriteRenderer.js");

 

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
    const canvas_Manager =  new _gameInitializer__WEBPACK_IMPORTED_MODULE_0__.Canvas_Manager()
    canvas = canvas_Manager.initCanvas("canvas-div", 44)

    const ctx = canvas.getContext('2d'); 

    var img = new Image()
    img.src = "../src/spriteRendering/spriteSheets/testSheet.png"

    const spriteRender = new _spriteRendering_spriteRenderer__WEBPACK_IMPORTED_MODULE_1__.SpriteRenderer(canvas.getContext('2d'))
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakJzQztBQUN0QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdEQUFNO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZETztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQsNEJBQTRCLHlCQUF5QjtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ25CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05tRDtBQUNZO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNERBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMkVBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19nYW1lX2VuZ2luZS8uL3NyYy9nYW1lSW5pdGlhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vanNfZ2FtZV9lbmdpbmUvLi9zcmMvc3ByaXRlUmVuZGVyaW5nL3Nwcml0ZVJlbmRlcmVyLmpzIiwid2VicGFjazovL2pzX2dhbWVfZW5naW5lLy4vc3JjL3Nwcml0ZVJlbmRlcmluZy9zcHJpdGVTaGVldC5qcyIsIndlYnBhY2s6Ly9qc19nYW1lX2VuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc19nYW1lX2VuZ2luZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanNfZ2FtZV9lbmdpbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc19nYW1lX2VuZ2luZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzX2dhbWVfZW5naW5lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgQ2FudmFzX01hbmFnZXJcclxue1xyXG4gICAgLy9wYXJhbXMgXHJcbiAgICAvLyBjb250YWluZXIgLSBpZCBvZiBkaXYgdG8gYXBwZW5kIGNhbnZhcyB0b1xyXG4gICAgLy8gY2VsbHNpemUgLSBzaXplIGluIHBpeGVscyBvZiBjZWxscyBpbiB0aGUgZ3JpZFxyXG4gICAgLy8gd2lkdGggYW5kIGhlaWdodCAtIHNpemUgb2YgY2FudmFzXHJcbiAgICBpbml0Q2FudmFzKGNvbnRhaW5lciwgY2VsbFNpemUsIHdpZHRoID0gZmFsc2UsIGhlaWdodCA9IGZhbHNlKVxyXG4gICAge1xyXG4gICAgdGhpcy5kaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpXHJcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXHJcbiAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcylcclxuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodCA/IGhlaWdodCA6IDcyMFxyXG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aCA/IHdpZHRoIDogMTA4MFxyXG4gICAgdGhpcy5jZWxsU2l6ZSA9IGNlbGxTaXplXHJcbiAgICByZXR1cm4gdGhpcy5jYW52YXNcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVNoZWV0XCJcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVSZW5kZXJlciB7XHJcbiAgICAvL1RoaXMgaXMgYSB0ZXN0IGZvciByZW5kZXJpbmcgc3ByaXRlcy4gSSBoYXZlIGEgbG90IG9mIHRoaW5raW5nIHRvIGRvIG9uIGhvdyB0byBtYW5hZ2UgdGhpc1xyXG4gICAgLy9JJ3ZlIG5ldmVyIGRvbmUgdGhpcyBiZWZvcmUuXHJcbiAgICAvL1RoZSBtYWluIGlkZWEgYmUgYXMgZm9sbG93czpcclxuICAgIC8vIC1VcGRhdGUgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBwb3NpdGlvbiBhbmQgbWF5YmUgb3RoZXIgcHJvcGVydGllc1xyXG4gICAgLy8gLSBTcHJpdGUgc2hlZXQocykgd2lsbCBiZSBpbXBvcnRlZCB3aXRoIGFuIGltcG9ydCBcclxuICAgIC8vIC0gc3ByaXRlIHNoZWV0cyB3aWxsIGJlIHN0b3JlZCBpbiBhbiBvYmplY3QgYW5kIGNhbGxhYmxlIGJ5IG5hbWVcclxuICAgIC8vIC0gXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpe1xyXG4gICAgICAgIHRoaXMuc3ByaXRlcyA9IHt9XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxyXG4gICAgICAgIHRoaXMuY3VyU3ByaXRlID0gbnVsbFxyXG4gICAgICAgIHRoaXMub2xkVGltZVN0YW1wID0gMFxyXG4gICAgfVxyXG5cclxuICAgIGltcG9ydFNwcml0ZVNoZWV0KG5hbWUsIGltZywgdywgaCwgZnBzKSB7XHJcbiAgICAgICAgLy9hZGQgZXJyb3IgY2hlY2tpbmcgZm9yIGludmFsaWQgdy9oIHdpdGggaW1nIHNpemVcclxuICAgICAgICB0aGlzLnNwcml0ZXNbbmFtZV0gPSBuZXcgU3ByaXRlKGltZywgdywgaCwgZnBzKVxyXG4gICAgfVxyXG5cclxuICAgIHNldFNwcml0ZVNoZWV0KG5hbWUpe1xyXG4gICAgICAgIHRoaXMuY3VyU3ByaXRlID0gdGhpcy5zcHJpdGVzW25hbWVdXHJcbiAgICAgICAgdGhpcy5jdXJTcHJpdGUuZnJhbWUgPSAwXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHgsIHksIHRpbWVTdGFtcCl7XHJcbiAgICAgICAgdmFyIHRpbWUgPSB0aW1lU3RhbXAgLSB0aGlzLm9sZFRpbWVTdGFtcFxyXG4gICAgICAgIHZhciBmcmFtZXMgPSB0aGlzLmN1clNwcml0ZS5mcmFtZXNbdGhpcy5jdXJTcHJpdGUuZnJhbWVdXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgdGhpcy5jdXJTcHJpdGUuU2hlZXQsXHJcbiAgICAgICAgICAgIGZyYW1lc1sneCddLFxyXG4gICAgICAgICAgICBmcmFtZXMueSxcclxuICAgICAgICAgICAgdGhpcy5jdXJTcHJpdGUud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuY3VyU3ByaXRlLmhlaWdodCxcclxuICAgICAgICAgICAgeCxcclxuICAgICAgICAgICAgeSxcclxuICAgICAgICAgICAgNjQsXHJcbiAgICAgICAgICAgIDY0KTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGltZSA+IDEwMDAgKiB0aGlzLmN1clNwcml0ZS5mcHMpIHtcclxuICAgICAgICAgICAgdGhpcy5vbGRUaW1lU3RhbXAgPSB0aW1lU3RhbXBcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyU3ByaXRlLmZyYW1lID49IHRoaXMuY3VyU3ByaXRlLmZyYW1lQ291bnQgLSAxKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyU3ByaXRlLmZyYW1lID0gLTFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmN1clNwcml0ZS5mcmFtZSArPSAxIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG59IiwiZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKFNoZWV0LCB3aWR0aCwgaGVpZ2h0LCBmcHMpe1xyXG4gICAgICAgIHRoaXMuU2hlZXQgPSBTaGVldFxyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5mcHMgPSBmcHNcclxuICAgICAgICB0aGlzLmZyYW1lID0gMFxyXG4gICAgICAgIHRoaXMuZnJhbWVDb3VudCA9IDBcclxuICAgICAgICB0aGlzLmZyYW1lcyA9IHt9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBTaGVldC5oZWlnaHQgLyBoZWlnaHQ7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgU2hlZXQud2lkdGggLyB3aWR0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gaiAqIHdpZHRoXHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IGkgKiBoZWlnaHRcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVzW3RoaXMuZnJhbWVDb3VudF0gPSB7eCwgeX1cclxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVDb3VudCArPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENhbnZhc19NYW5hZ2VyIH0gZnJvbSBcIi4vZ2FtZUluaXRpYWxpemVyXCI7XHJcbmltcG9ydCB7U3ByaXRlUmVuZGVyZXJ9IGZyb20gXCIuL3Nwcml0ZVJlbmRlcmluZy9zcHJpdGVSZW5kZXJlclwiIFxyXG5cclxud2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24oKXsgXHJcbiAgICByZXR1cm4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICAgfHwgIFxyXG4gICAgICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICBcclxuICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fCAgXHJcbiAgICAgICAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHwgIFxyXG4gICAgICAgICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgIHx8ICBcclxuICAgICAgICAgICAgZnVuY3Rpb24oIGNhbGxiYWNrICl7IFxyXG4gICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApOyBcclxuICAgICAgICAgICAgfTsgXHJcbiAgfSkoKTsgXHJcblxyXG52YXIgY2FudmFzID0gbnVsbDtcclxudmFyIHggPSAwOyBcclxuICBcclxuXHJcbiAgXHJcbmZ1bmN0aW9uIGluaXQoKVxyXG57XHJcbiAgICBjb25zdCBjYW52YXNfTWFuYWdlciA9ICBuZXcgQ2FudmFzX01hbmFnZXIoKVxyXG4gICAgY2FudmFzID0gY2FudmFzX01hbmFnZXIuaW5pdENhbnZhcyhcImNhbnZhcy1kaXZcIiwgNDQpXHJcblxyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7IFxyXG5cclxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKVxyXG4gICAgaW1nLnNyYyA9IFwiLi4vc3JjL3Nwcml0ZVJlbmRlcmluZy9zcHJpdGVTaGVldHMvdGVzdFNoZWV0LnBuZ1wiXHJcblxyXG4gICAgY29uc3Qgc3ByaXRlUmVuZGVyID0gbmV3IFNwcml0ZVJlbmRlcmVyKGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpKVxyXG4gICAgc3ByaXRlUmVuZGVyLmltcG9ydFNwcml0ZVNoZWV0KFwidGVzdHlcIiwgaW1nLCA4LCA4LCAwLjUpXHJcbiAgICBzcHJpdGVSZW5kZXIuc2V0U3ByaXRlU2hlZXQoXCJ0ZXN0eVwiKVxyXG5cclxuXHJcblxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUobWFpbkxvb3ApOyBcclxuICAgIGZ1bmN0aW9uIG1haW5Mb29wKHRpbWVTdGFtcClcclxuICAgIHtcclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1GcmFtZShtYWluTG9vcCk7IFxyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwwLGNhbnZhcy53aWR0aCxjYW52YXMuaGVpZ2h0KTsgXHJcbiAgICAgICAgeCs9NTsgXHJcbiAgICAgICAgaWYgKHggPj0gY2FudmFzLndpZHRoICsgMjAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgeCA9IC0yMDBcclxuICAgICAgICB9XHJcbiAgICAgIHNwcml0ZVJlbmRlci51cGRhdGUoeCwgNTAwLCB0aW1lU3RhbXApXHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBpbml0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==