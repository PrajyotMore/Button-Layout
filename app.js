const colors = ["green", "red", "rgb(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color'); 

btn.addEventListener("click", function () {
    //get random number between 0-3 
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];

    //display the value of color
    color.textContent = colors[randomNumber];
    //console.log(document.body);
})

function getRandomNumber() {
    return Math.floor(Math.random()* colors.length);
}