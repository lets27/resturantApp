export default function createNav(){


  
   
     let navbar = document.createElement('nav');
     // Home link
     let homeLink = document.createElement('a');
     homeLink.classList.add('navlinks');
     homeLink.setAttribute('id', 'home');
     homeLink.href = '#section1'; // Set the appropriate href for Home
     homeLink.textContent = 'Home';
   
     // Menu link
     let menuLink = document.createElement('a');
     menuLink.classList.add('navlinks');
     menuLink.setAttribute('id', 'menu');
     menuLink.href = '#section2'; // Set the appropriate href for Menu
     menuLink.textContent = 'Menu';
   
     // Contacts link
     let contactsLink = document.createElement('a');
     contactsLink.classList.add('navlinks');
     contactsLink.setAttribute('id', 'contacts');
     contactsLink.href = '#'; // Set the appropriate href for Contacts
     contactsLink.textContent = 'Contacts';
   
     // Append navigation items to the navbar
     navbar.appendChild(homeLink);
     navbar.appendChild(menuLink);
     navbar.appendChild(contactsLink);
     return navbar
 
}