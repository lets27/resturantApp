import { loremIpsum } from 'lorem-ipsum';

export default function newMenu() {
  // Create container div
  let menuSection = document.createElement('section');
  menuSection.setAttribute('id', 'section2');
  menuSection.classList.add('hidden');

  // Create image (img)


  // Create menu items
  let menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');
  menuDiv.setAttribute('id', 'menuHolder');

  let product1 = document.createElement('div');
  product1.classList.add('menu-item');
  product1.setAttribute('id', 'item1');
  let span1_product1 = document.createElement('span');
  let span2_product1 = document.createElement('span');
  span1_product1.textContent = 'pap and meat';
  span2_product1.textContent = '400$';
  product1.appendChild(span1_product1);
  product1.appendChild(span2_product1);

  let product2 = document.createElement('div');
  product2.classList.add('menu-item');
  product2.setAttribute('id', 'item1');
  let span1_product2 = document.createElement('span');
  let span2_product2 = document.createElement('span');
  span2_product2.textContent = 'pap and meat';
  span2_product2.textContent = '400$';
  product2.appendChild(span1_product2);
  product2.appendChild(span2_product2);

  menuDiv.appendChild(product1);
  menuDiv.appendChild(product2);
  // Create specials section
  

  let section = document.createElement('section');

  let specialsDiv = document.createElement('div');

  specialsDiv.classList.add('myspecials');



  let special1 = document.createElement('div');
  special1.classList.add('special-item');
  special1.setAttribute('id', 'special1');
  let span1_special1 = document.createElement('span');
  let span2_special1 = document.createElement('span');
  span1_special1.textContent = 'Your special name';
  span2_special1.textContent = 'Your special price';
  special1.appendChild(span1_special1);
  special1.appendChild(span2_special1);


  let special2 = document.createElement('div');
  special2.classList.add('special-item');
  special2.setAttribute('id', 'special2');
  let span1_special2 = document.createElement('span');
  let span2_special2 = document.createElement('span');
  span2_special2.textContent = 'Your special name';
  span2_special2.textContent = 'Your special price';
  special2.appendChild(span1_special2);
  special2.appendChild(span2_special2);


  // ... Repeat the pattern for other specials



  // ... Append other menu items

  // Append specials to specialsDiv
 
  specialsDiv.appendChild(special1);
  specialsDiv.appendChild(special2);
  // ... Append other specials

  // Append specialsDiv to section
  section.appendChild(specialsDiv);

  // Create footer




  menuSection.appendChild(menuDiv);
  menuSection.appendChild(section);



  // Append the container to the body
  return menuSection;
}


