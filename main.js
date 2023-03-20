function createGrid(sideLength) {
    const root = document.documentElement;
    const container = document.querySelector(".grid-container");
    const size = sideLength * sideLength;
    const overallSize = getComputedStyle(root).getPropertyValue("--overallSize");
    const boxSize = parseInt(overallSize, 10) / sideLength;

    root.style.setProperty("--boxCount", sideLength);
    root.style.setProperty("--boxSize", boxSize + "px");

    for(i = 0; i < size; i++)
    {
        const div = document.createElement("div");
        div.classList.add("grid-box");
        div.addEventListener("mouseenter", etchBox);
        container.appendChild(div);
    }
}

function etchBox() {
    this.classList.add("grid-box-etched");
    const hsl = randomColor();
    this.style.setProperty("background-color", 
    `hsl(${hsl[0]}, ${hsl[1]}, ${hsl[2]})`);
}

function promptUser() {
    let gridSize = 0;
    do {
        gridSize = prompt("Define the new grid size(0-100):");
    } while (gridSize < 1 || gridSize > 100);

    resetGrid();
    createGrid(gridSize);
}

function resetGrid() {
    const grid = document.querySelectorAll(".grid-box");
    const container = document.querySelector(".grid-container");

    grid.forEach(cell => container.removeChild(cell));
}

function randomColor() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);

    return [h,s+"%",l+"%"];
}

createGrid(16);
console.log(randomColor());