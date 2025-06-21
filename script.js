let day = document.querySelector("#day");
let date = document.querySelector("#date");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
const allMonths = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];

let today = new Date();

console.log(today);

day.textContent = weekDays[today.getDay()];
date.textContent = today.getDate();
month.textContent = allMonths[today.getMonth()];
year.textContent = today.getFullYear();