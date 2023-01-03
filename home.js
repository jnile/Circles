
let no_circles_range = document.getElementById("no_of_circles")
let circle_radius_range = document.getElementById("circle_radius")
let spin_radius_range = document.getElementById("spin_radius")
let spin_speed_range = document.getElementById("spin_speed")

let container_div = document.getElementById("container")

no_circles_range.addEventListener("change", OnChangeNoCircles)
circle_radius_range.addEventListener("change", OnChangeCircleRadius)
spin_radius_range.addEventListener("change", OnChangeSpinRadius)
spin_speed_range.addEventListener("change", OnChangeSpinSpeed)


let no_of_circles = 10;
let circle_radius = 125;
let spin_radius = 200;
let spin_speed = 10;

function createMultipleCircles() {
    let multi_structure = document.getElementById("multi-circles");
    multi_structure.innerHTML = '';
    let angle_per_circle = 360/no_of_circles;
    for(let t = 0; t < no_of_circles; t++) {
        let circle_to_add = createCircle(circle_radius);
        let angle = angle_per_circle*t;
        let pos_x = spin_radius * Math.cos(angle * (Math.PI/180));
        let pos_y = spin_radius * Math.sin(angle * (Math.PI/180));
        circle_to_add.style.transform = `translate(${pos_x}px,${pos_y}px)`;

        multi_structure.appendChild(circle_to_add);
    }
}

function createCircle(radius) {
    let circle = document.createElement("div");
    circle.className = "circle";
    circle.style.width = radius + "px";
    circle.style.height = radius + "px";
    return circle;
}

function OnChangeNoCircles(e) {
    no_of_circles = e.target.value;
    createMultipleCircles()
}

function OnChangeCircleRadius(e) {
    circle_radius = e.target.value;
    createMultipleCircles();
}

function OnChangeSpinRadius(e) {
    spin_radius = e.target.value;
    createMultipleCircles();
}

function OnChangeSpinSpeed(e) {
    spin_speed = e.target.value;
    container_div.style.animation = `rotate_full ${spin_speed}s linear infinite`;
}

createMultipleCircles();