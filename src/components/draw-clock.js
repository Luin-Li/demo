const draw = () => {
    let canvas = document.getElementById('clock')
    let ctx = canvas.getContext('2d')
    ctx.moveTo(0,0)
    ctx.lineTo(50,50)
    ctx.stroke()
}

class canvObject {
    constructor() {
        this.x = 0
    }
}

// class Line extends canvObject {}
// const Line = new canvObject()
export {draw as drawClock}
