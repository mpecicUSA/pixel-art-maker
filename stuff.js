let colorChoice = "";
const container = document.querySelector(".container");
const colorSelectionBox = document.querySelector(".color-Selection-Box");
const brushColor = document.querySelector(".brush-color")
for(let i=0; i < 10; i++){
  var gridRow = document.createElement("div");
  gridRow.className = "boxGri";
  for(let j=0; j <5 ; j++){
    var gridCol = document.createElement('div');
    gridCol.className = 'boxGrid';
    gridRow.appendChild(gridCol);
  }
  container.appendChild(gridRow);
}

//Click on a color choice, color saved to be applied later
let colorChoiceBlue = document.querySelector('.color1');
  colorChoiceBlue.addEventListener('click', function(){
    colorChoice = "blue";
    return colorChoice;
});
let colorChoiceRed = document.querySelector('.color2');
  colorChoiceRed.addEventListener('click', function(){
    colorChoice = "red";
    return colorChoice;
});
let colorChoiceYellow = document.querySelector('.color3');
  colorChoiceYellow.addEventListener('click', function(){
    colorChoice = "yellow";
    return colorChoice;
});
let colorChoiceOrange = document.querySelector('.color4');
  colorChoiceOrange.addEventListener('click', function(){
    colorChoice = "orange";
    return colorChoice;
});
let colorChoicePurple = document.querySelector('.color5');
  colorChoicePurple.addEventListener('click', function(){
    colorChoice = "purple";
    return colorChoice;
});
let colorChoiceGreen = document.querySelector('.color6');
  colorChoiceGreen.addEventListener('click', function(){
    colorChoice = "Green";
    return colorChoice;
});
let colorChoiceGreenYellow = document.querySelector('.color7');
  colorChoiceGreenYellow.addEventListener('click', function(){
    colorChoice = "GreenYellow";
    return colorChoice;
});
let colorChoiceWhite = document.querySelector('.color8');
  colorChoiceWhite.addEventListener('click', function(){
    colorChoice = "White";
    return colorChoice;
});
let colorChoiceBlack = document.querySelector('.color9');
  colorChoiceBlack.addEventListener('click', function(){
    colorChoice = "Black";
    return colorChoice;
});
colorSelectionBox.onclick = function(event){
  brushColor.style.backgroundColor = colorChoice;
}
// container.addEventListener("click",function(event){
//   event.target.style.backgroundColor = colorChoice;
// })
container.onclick = function(event){
  if(event.target.classList.contains("boxGrid")){
  event.target.style.backgroundColor = colorChoice;
  }
};
