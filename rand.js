
function randomNumber(min, max) {  
    return Math.floor(Math.random() * (1000 - 300) + 300) * (Math.random() < 0.5 ? -1 : 1);
}  

//var posNeg = Math.random() < 0.5 ? -1 : 1;
//var randVector = randomNumber(300,1000) * posNeg;
//var randRotation = randomNumber(90,300) * posNeg;

//document.documentElement.style.setProperty('--rand-pos', randomNumber(100, 1000)+"px")  
//document.documentElement.style.setProperty('--rand-neg',"-"+ randomNumber(100, 1000)+"px") 
//document.documentElement.style.setProperty('--rand-vector', randArray[i] +"px")
//document.documentElement.style.setProperty('--rand-rotate', randRotation +"deg")
  
// Function call 
//document.write(randomPosneg(0, 1000)+"px" );
//document.write(randVector);
//document.write(randRotation + "deg");

const ARRAY_LENGTH = 32
const randomArray = []
for (let i=0; i<ARRAY_LENGTH; ++i) {
    randomArray.push( Math.floor(Math.random() * (1000 - 300) + 300) * (Math.random() < 0.5 ? -1 : 1)) 
    }




document.write(randomArray)

var k = "cstand";



//for (var i = 1; i <= ARRAY_LENGTH; ++i) {
//StyleSheet.insertRule('@keyframes '+ k+i {
//from {transform:scale(.01,.01) translate(0) rotate(0)}
//to {transform:scale(2,2) translate(+ randomNumber +"px,"+ randomNumber + "px) rotate" + randomNumber + deg)})
//}