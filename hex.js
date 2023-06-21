const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D", "E", "F"];//values 
//#15025
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() { //setting up a loop that will generate colors
  let hexColor ="#"; //hexcolor=value
  for (let i=0; i<6; i++) { //get a loop that runs 6 times
    hexColor += hex[getRandomNumber()];//hex =arrayName
  }  //()invoke
   color.textContent = hexColor;
   document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() *hex.length);  //multiply by the hexcolor length
}
