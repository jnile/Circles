function createMultipleCircles(noOfCircles) {
    let multi_structure = document.getElementById("multi-circles")
    let angle_per_circle = 360/noOfCircles
    let r = 125;
    for(let t = 0; t < noOfCircles; t++) {
        let circle_to_add = createCircleWrapper(100,100)
        let angle = angle_per_circle*t
        let pos_x = r * Math.cos(angle * (Math.PI/180))
        let pos_y = r * Math.sin(angle * (Math.PI/180))
        circle_to_add.style.transform = `translate(${pos_x}px,${pos_y}px)`

        multi_structure.appendChild(circle_to_add)
    }
}

function createCircleWrapper(width,height) {
    let new_circle = document.createElement("div")
    new_circle.className = "circle-wrapper"
    new_circle.style.width = width + "px"
    new_circle.style.height = height + "px"
    new_circle.appendChild(createCircle(width,height))
    return new_circle
}

function createCircle(width,height) {
    let circle = document.createElement("div")
    circle.className = "circle-outlined"
    circle.style.width = width + "px"
    circle.style.height = height + "px"
    return circle
}

createMultipleCircles(7)