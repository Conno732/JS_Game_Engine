
export class Canvas_Manager
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