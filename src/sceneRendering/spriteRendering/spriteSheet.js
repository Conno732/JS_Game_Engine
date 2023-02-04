export class Sprite {

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