const colors = ["red", "blue", "Rgba(133,122,200)",
"#f15025"];
//COLORS=ARRAY
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    //TARGETING THE BODY
    //USE THE STYLE BACKGROUND PROPERTY TO CHANG THE VALUE
    //get random number between 0-3
    const randomNumber = getRandomNumber();//invoke get random function
    document.body.style.backgroundColor= colors[randomNumber];//randomNmber= value
   color.textContent = colors[randomNumber];
   console.log(randomNumber);
});

function getRandomNumber() {
    return Math.floor(Math.random() *colors.length);//passing the value we getting wen we multiply math.random with our colors length
}



