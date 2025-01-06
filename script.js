const container = document.querySelector("#grid-container");
const button = document.querySelector("button");
button.addEventListener("click" , () => {
    let width = prompt("Input the width of the sketch! (p.s: width and height are the same!)");
    deleteCurrentGrid();  
    createGrid(width);
})

let createGrid = function(width = 16){
    if(width >= 100){
        alert("Too many boxes for this little web browser :)")
        return;
    }
    const totalBoxes = width ** 2;
    const pixelWidth = 960 / width;
    

    for(let i = 0; i<totalBoxes;i++){
        let gridDiv = document.createElement("div");
        gridDiv.setAttribute("class","item");
        gridDiv.style.width = `${pixelWidth}px`;
        gridDiv.style.height = `${pixelWidth}px`;
        gridDiv.addEventListener("mouseenter", () => {
            gridDiv.style.backgroundColor = "black";
        })
        container.appendChild(gridDiv);
    }
}

let deleteCurrentGrid = function(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

}

createGrid();

const sumOfTripledEvens = function(array){
    return array
    .filter((num) => num%2=== 0)
    .map((num) => num*3)
    .reduce((acc,num) => acc + num);
}

console.log(sumOfTripledEvens([1,2,3,4,5,6]))
