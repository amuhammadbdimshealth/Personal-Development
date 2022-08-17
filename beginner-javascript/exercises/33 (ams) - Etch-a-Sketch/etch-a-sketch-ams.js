// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 50;
const { width, height } = canvas

let rand = 0.5 //Math.random()
let x = Math.floor(rand * width)
let y = Math.floor(rand * height)

ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = MOVE_AMOUNT

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw ({ key }) {
    hue += 1; 
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    console.log('draw: ' + key, 'hue: ', hue)

}

function handleKey(e) {    
    console.log(e.key)
    if(e.key.includes('Arrow')) {
        e.preventDefault()
        draw({key: e.key})
    }
}

function clearCanvas() {
    console.log('clearCanvas');
}

// listen to events
window.addEventListener('keydown', handleKey)
shakebutton.addEventListener('click', clearCanvas)