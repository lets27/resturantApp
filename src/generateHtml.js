
// generateHtml.js
import { loremIpsum } from 'lorem-ipsum';

export default function newHtml() {
  // Create section
  let section = document.createElement('section');
  section.setAttribute('id', 'section1');
  section.classList.add('show');

  // Create heading (h1)
  let h1 = document.createElement('h1');
  h1.classList.add('heading')
  h1.textContent = "Letso Place";

  // Create image (img)
  let img = document.createElement('img');
  img.classList.add('myImg');
  img.src = '/src/restaurantPic.jpg';
  img.alt = 'Description of the image';

  // Create paragraph
  let paragraph = document.createElement('p');
  paragraph.classList.add('myPara');
  paragraph.textContent = loremIpsum({ count: 1, units: 'paragraphs' });

  






  // Create additional HTML
  let boxesDiv = document.createElement('div');
  boxesDiv.classList.add('boxes');

  let special1 = document.createElement('div');
  special1.classList.add('special-item');
  special1.setAttribute('id', 'special1');
  let span1_special1 = document.createElement('span');
  let span2_special1 = document.createElement('span');
  span1_special1.textContent =  'my home page';
  span2_special1.textContent =  'my home page';
  special1.appendChild(span1_special1);
  special1.appendChild(span2_special1);


  let special2 = document.createElement('div');
  special2.classList.add('special-item');
  special2.setAttribute('id', 'special2');
  let span1_special2 = document.createElement('span');
  let span2_special2 = document.createElement('span');
  span2_special2.textContent = 'my home page';
  span2_special2.textContent = 'my home page';
  special2.appendChild(span1_special2);
  special2.appendChild(span2_special2);

  
  boxesDiv.appendChild(special1);
  
  boxesDiv.appendChild(special2);

  // Box 3
  





  

  // Append elements to the section
  section.appendChild(h1);
  section.appendChild(img);
  section.appendChild(paragraph);
  section.appendChild(boxesDiv);

  // Append the section to the body
  return section;
}


// Call the function to generate the HTML

