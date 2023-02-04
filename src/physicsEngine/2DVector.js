export class Vector2D{
    constructor (x, y){
        if (typeof(x) == "number" && typeof(y) == "number")
        this.x = x
        this.y = y
    }

    add(vector2D){
        this.x += vector2D.x
        this.y += vector2D.y
    }

    subtract(vector2D){
        this.x -= vector2D.x
        this.y -= vector2D.y
    }

    numMult(number, returns = false){
        if (returns) {
            return Vector2D(this.x * number, this.y * number)
        }
        this.x *= number
        this.y *= number
    }

    numDiv(number, returns = false){
        if (returns) {
            return Vector2D(this.x * number, this.y * number)
        }
        this.x /=number
        this.y /= number
    }
}