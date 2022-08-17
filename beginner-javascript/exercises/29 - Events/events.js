const butts = document.querySelector(".butts");
const coolButton = document.querySelector(".cool");

function handleClick() {
  console.log("🐛 IT GOT CLICKED!!!");
}

const hooray = () => console.log("HOORAY!");

butts.addEventListener("click", function () {
  console.log("Im an anon!");
});
coolButton.addEventListener("click", hooray);

butts.removeEventListener("click", handleClick);

const buyButtons = document.querySelectorAll("button.buy")

function handleBuyBtnClick(event) {
    console.log("YOU CLICKED A BUTTON!");
    const button = event.target
    const button1 = event.currentTarget    
    console.log(button.textContent, event.target.dataset.price);
    event.stopPropagation();
}

buyButtons.forEach(b => {
    b.addEventListener('click', handleBuyBtnClick)
})

window.addEventListener('click', (e) => {
    console.log("YOU CLICKED THE WINDOW");
    console.log(event.target);
    console.log(event.type);
    // event.stopPropagation();
    console.log(event.bubbles);
},{
    capture: false
})

const ph = document.querySelector(".photo")
console.log(ph)

ph.addEventListener('mouseenter', function(e){
    console.log(e.currentTarget)
    console.log(this);
}.bind(this))