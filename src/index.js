import newHtml from './generateHtml.js';
import newMenu from './menu.js';
import createNav from './nav.js';
import './style.css';
import './menu.css';

window.addEventListener('load',()=>{
// Append the generated HTML directly to the existing .content div
let nav=createNav();
let existingContent = document.querySelector(".content");
existingContent.appendChild(nav)
existingContent.append(newHtml());

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');



  // this will call the hidden class in css and display: none, thus that section won't be clicked
      function switchTabs(){



home.addEventListener('click', () => {
  // Remove existing content

  existingContent.innerHTML = '';//innerHtml clears the html content (all tags are erased our new ones will come onto a)
  existingContent.appendChild(nav)
  // Append new home content
  existingContent.appendChild(newHtml());

  // Show the home section
  let homeSection = document.querySelector('#section1');
  homeSection.classList.remove('hidden');
});



menu.addEventListener('click', () => {
    existingContent.innerHTML = '';
    existingContent.appendChild(nav)
    let men=document.querySelector('#menu');
    // Append new home content
    existingContent.appendChild(newMenu());
    // Show the home section
    let menuSection = document.querySelector('#section2');
    menuSection.classList.remove('hidden');

});

      }
switchTabs()

});
