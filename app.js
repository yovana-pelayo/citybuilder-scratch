// import functions and grab DOM elements
import { createCountString } from './test/utils.js';
const landscapeTab = document.getElementById('landscape-tab');
const homestyleTab = document.getElementById('home-style-tab');
const mealsTab = document.getElementById('meals-tab');

const homeImg = document.getElementById('home-image');
const mealImg = document.getElementById('meal-image');
const landImg = document.getElementById('land-image');
// const landEl = document.getElementById('land');
// const homeEl = document.getElementById('home');
// const mealEl = document.getElementById('meal');





const quoteInput = document.getElementById('quote-input');
const quoteButton = document.getElementById('add-quote-button');
const reportEl = document.getElementById('report');
const quoteEl = document.getElementById('quotes');

// let state
let landCount = 0;
let homeCount = 0;
let mealCount = 0;
const quotes = [];


// set event listeners 
landscapeTab.addEventListener('change', (e) => {
    let landvalue = e.target.value;
    landImg.src = `./assets/${landvalue}-land.png`;
    landCount++;
    displayStats();

});

homestyleTab.addEventListener('change', () => {
    let homevalue = homestyleTab.value;
    homeImg.src = `./assets/${homevalue}-home.png`;
    homeCount++;
    displayStats();
});

mealsTab.addEventListener('change', () => {
    let mealvalue = mealsTab.value;
    mealImg.src = `./assets/${mealvalue}-meal.png`; 
    mealCount++; 
    displayStats();
});
 // get user input
  // use user input to update state 
  // update DOM to reflect the new state
quoteButton.addEventListener('click', () => {
    let qButton = quoteInput.value;
    quotes.push(qButton);
    quoteInput.value = '';
    displayQuotes();
});
 
// we got the value of quote input
//
function displayStats() {
  // change the text content of the reportEl to tell the user how many times they've changed each piece of the state
    const countString = createCountString(landCount, homeCount, mealCount); // call this function with the correct arguments
    reportEl.textContent = countString;
}
function displayQuotes() {
    quoteEl.innerHTML = '';
    for (let display of quotes) {
        const li = document.createElement('li');
        li.textContent = display;
        quoteEl.append(li);
    }
}