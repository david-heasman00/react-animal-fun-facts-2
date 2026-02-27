//See intructions.txt for the full task instructions for the project from codecademy
/*Due to code flow being different order from task submissions, but to preserve readability
from instructions, footnote symbols are used to show where task submissions are provided out of order.
Follow the footnote symbols / read the footnotes to see where task submissions are if out of order.
*/

import { animals } from './animals';

// Task 1
import { React } from 'react';
import { createRoot } from 'react-dom/client';

//Task 2
const container = document.getElementById('app');

//Task 3
const root = createRoot(container);

//Task 4
const title = '';

//*
const background = <img 
  className = 'background'
  alt = 'ocean'
  src = '/images/ocean.jpg'/>

//‖ (task 14 submission here)
const showBackground = true;

// § (task 11 submission here)
const displayFact = (e) => {
 const selectedAnimalName = e.target.alt;
 const selectedAnimal = animals[selectedAnimalName];
 const optionIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
 const funFact = selectedAnimal.facts[optionIndex];
 const factElement = document.getElementById('fact');
 factElement.innerHTML = funFact;
};



//‡ (task 9 submission here)
const images = [];
for (const animal in animals) {
  images.push(
    <img 
      key = {animal}
      className = 'animal'
      alt = {animal}
      src = {animals[animal].image}
      aria-label = {animal}
      role = 'button'
      onClick = {displayFact}
    />
  )
};

//Task 5 † ‖
const animalFacts =( 
    <div>
      {showBackground && background}
      <div className='animals'>
        {images}
      </div>
      <p id='fact'>
      </p>
      <h1>
        {title === '' ? 'Click an animal for a fun fact' : title}
        {// task 14 - can use to achieve the same:
        //{title || 'Click an animal for a fun fact'}
        }
      </h1>

    </div>
  );

//Task 6
root.render(animalFacts);

//Task 7
//For task 7 see the * above Task 5

//Task 8
//For task 8 see Task 5 and †

//Task 9
//For task 9 see the ‡

//Task 10
//For task 10 see Task 5 and † 

//Task 11
//For task 11 see the §

//Task 12
//For task 12 see Task 5 and † 

//Task 13
//For task 13 see ‡

//Task 14
//For task 14 see ‖

/* Footnotes (to help read code)

* Holds submission for task 7.
† Holds submission for tasks 8, 10, and 12.
‡ Holds submission for tasks 9 and 13.
§ Holds submission for task 11
‖ Holds submission for task 14
*/