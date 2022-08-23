import { Vector2D } from "./2D_Vector"

export class PhysicsObject {
    constructor ()
    {
        this.position = new Vector2D(0, 0)
        this.velocity = new Vector2D(0, 0)
        this.force = new Vector2D(0, 0)
        this.mass = 0.0
    }
}