/* 
Name: Muhammad Saim Khan 
Date created: 09/21/2025
Date last modified: 09/23/2025
Version: 1
Description: MIS 3371-Assignment 1
*/
//dyanmic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today") .innerHTML = text;
//update time
function updateTime(){
const now = new Date();
document.getElementById("time") .innerHTML = now.toLocaleTimeString();
}
updateTime();
setInterval(updateTime,1000);
//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;
slider.oninput = function(){
output.innerHTML = this.value;
};
