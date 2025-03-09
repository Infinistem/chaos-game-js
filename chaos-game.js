const canvas = document.getElementById('chaosCanvas');
const ctx = canvas.getContext('2d');
let color;
let n; 

canvas.width = 800;
canvas.height = 600;

const vertices = [];

const radius = Math.min(canvas.width, canvas.height) / 3;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

function drawPolygon() {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(vertices[0].x, vertices[0].y);
    for (let i = 1; i < vertices.length; i++) {
        ctx.lineTo(vertices[i].x, vertices[i].y);
    }
    ctx.closePath();
    ctx.stroke();
}

let currentPoint = { x: centerX, y: centerY }; 
let numPoints = 100000; 

function chaosGame() {
    drawPolygon();

    ctx.fillStyle = color;
    ctx.fillRect(currentPoint.x, currentPoint.y, 1, 1);

    for (let i = 0; i < numPoints; i++) {
        const vertex = vertices[Math.floor(Math.random() * n)];

        currentPoint.x = (currentPoint.x + vertex.x) / 2;
        currentPoint.y = (currentPoint.y + vertex.y) / 2;

        ctx.fillRect(currentPoint.x, currentPoint.y, 1, 1);
    }
}

function gen() {
    color = document.getElementById("color").value
    n = parseInt(document.getElementById("sides").value)
    numPoints = document.getElementById("number").value
    for (let i = 0; i < n; i++) {
    const angle = (i * 2 * Math.PI) / n;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    vertices.push({ x, y });
}

    console.log(color, n)
    chaosGame();
}

function clearg() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
