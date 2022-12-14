// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const currentColor = document.querySelector('#current-color');
const palette = document.querySelectorAll('div.color');
const color = document.querySelectorAll('.color')

//when you choose/click a color from the palette, it will show up on the selector square/cell
color.forEach((changedColor) => {
  changedColor.addEventListener('click',(event) => {
    currentColor.style.backgroundColor = event.target.style.backgroundColor
  })
})

//when a cell gets colored
const cell = document.querySelectorAll(".cell");
cell.forEach((coloredCell) => {
  coloredCell.addEventListener('click', () => {
    coloredCell.style.backgroundColor = currentColor.style.backgroundColor
  })
})



// document.getElementById('.cell').addEventListener('click', changeColor);

// function changeColor() {
//     this.style.backgroundColor = "green";
//     return false;
// }