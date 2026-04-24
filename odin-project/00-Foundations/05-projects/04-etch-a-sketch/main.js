const parentContainer = document.querySelector('.grid-container');
const promptButton = document.querySelector('.prompt-btn');
const gridNumber = 16 * 16;

getRandomRGB = (newOpacity) => {
  const r = Math.floor(Math.random() * 256); // Red (0-255)
  const g = Math.floor(Math.random() * 256); // Green (0-255)
  const b = Math.floor(Math.random() * 256); // Blue (0-255)
  
  return `rgb(${r}, ${g}, ${b}, ${newOpacity})`; // Return as an RGB string
}

const createNewGrid = (cellsPerSide) => {  
  const totalNumberOfCells = cellsPerSide * cellsPerSide;
  const containerWidth = parentContainer.offsetWidth;  
  const cellWidthPerc =  (100 / cellsPerSide) + '%';
  parentContainer.innerHTML = '';
  addChildDivs(totalNumberOfCells, cellWidthPerc);
}

const getNewCellOpacity = (cell) => {
  const computedStyle  = window.getComputedStyle(cell);
  const currentOpacity = computedStyle.opacity;
  const newOpacity = (parseFloat(currentOpacity) + 0.1) 
  return newOpacity;
}

const addChildDivs = (totalNumberOfCells = gridNumber, cellWidthPerc) => {  
   for (let index = 1; index <= totalNumberOfCells; index++) {
    const newDiv = document.createElement('div');    
    // Style the cells
    newDiv.className = 'grid-cell';
    // newDiv.textContent = index;
    newDiv.style.width = cellWidthPerc;
    newDiv.style.height = cellWidthPerc;

    // Add event listeners
    newDiv.addEventListener('mouseenter', (event) => {
      
      const cell = event.target
      const newOpacity = getNewCellOpacity(cell);
            
      newDiv.classList.toggle('hovered');
      newDiv.style.backgroundColor = getRandomRGB(newOpacity);
      newDiv.style.opacity = newOpacity;

    })    
    newDiv.addEventListener('mouseleave', () => {      
      newDiv.classList.toggle('hovered');        
    })    

    // Empty parent container 
    
    
    // Append to parent container
    parentContainer.appendChild(newDiv);
   }
}

promptButton.addEventListener('click', () => {
  const cellsPerSide = prompt("Please enter number of squares per side for the grid");
  if (!cellsPerSide || cellsPerSide > 100) {
    alert("Enter a value less than 100 and greater than 0")
  } else {
    createNewGrid(cellsPerSide);
  }
  
  
})

createNewGrid(16);