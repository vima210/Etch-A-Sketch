
/*Var that stores main div*/
const container = document.querySelector(".container");
/*Add title to the container*/
const title = document.createElement("h1");
title.textContent = "My SketchPad";
container.appendChild(title);

/*initialize number of square */
let numberSquares = 16
/*initialize the grid */
let grid = document.createElement("div");
grid.classList.add("grid");
container.appendChild(grid);

for (let i=0; i<numberSquares; i++) 
    {
    let row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);   
    for (let i=0; i<numberSquares; i++)
        {
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
    }

let squares = document.getElementsByClassName("square");
for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", function(event){
        event.target.classList.replace("square", "hovered");
        });
    }

/*add reset button to the container*/
const reset = document.createElement("button");
reset.textContent = "RESET";
reset.classList.add("reset");
container.appendChild(reset);

/*add reset functionality to the button*/
reset.addEventListener("click", resetGame)


function resetGame() {
    let numberSquares = prompt("How many squares do you want? The maximum number of squares is 100");
    if (numberSquares >100) {
        alert("Attenzione hai inserito un valore troppo alto. Riprova");
    }
    else{
    container.removeChild(grid);
    grid = document.createElement("div");
    grid.classList.add("grid");
    container.insertBefore(grid, reset);
    for (let i=0; i<numberSquares; i++) 
        {
        let row = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);   
        for (let i=0; i<numberSquares; i++)
            {
                let square = document.createElement("div");
                square.classList.add("square");
                row.appendChild(square);
            }
        }
    
    let squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener("mouseover", function(event){
            event.target.classList.replace("square", "hovered");
            });
        }
    }
    
    
    
    
    
    
}





   