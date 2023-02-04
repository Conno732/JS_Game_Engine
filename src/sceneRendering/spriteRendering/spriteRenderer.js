import { Sprite } from "./spriteSheet"

export class SpriteRenderer {
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
    }

    importSpriteSheet(name, img, w, h, fps) {
        //add error checking for invalid w/h with img size
        this.sprites[name] = new Sprite(img, w, h, fps)
    }

    setSpriteSheet(name){
        this.curSprite = this.sprites[name]
        this.curSprite.frame = 0
    }

    update(x, y, dt){
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
        
        if (dt > 1000 * this.curSprite.fps) {
            this.oldTimeStamp = timeStamp
            if (this.curSprite.frame >= this.curSprite.frameCount - 1){
                this.curSprite.frame = -1
            }
            this.curSprite.frame += 1 
        }
            
    }


    
}