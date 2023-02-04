import { Vector2D } from "./2DVector";
import { PhysicsObject } from "./PhysicsObject";

export class PhysicsEngine {
    constructor () {
        this.physicsObjects = []
        this.gravity = new Vector2D(0, -9.81)
    }

    AddPhysicsObject(obj){

    }

    RemovePhysicsObject(obj){

    }

    Step(dt) //dt - deltaTime
    {
        this.physicsObjects.forEach(obj => {
            obj.force.add(this.gravity.numMult(obj.mass, true))
            obj.velocity.add(obj.force.numDiv(obj.mass, true).numMult(dt))
            obj.position.add(obj.velocity.numMult(dt, true))
            obj.force = Vector2D(0, 0) 
        });

    }

}