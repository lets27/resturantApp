export default function createNav() {
    let navbar = document.createElement('nav');
  
    // Home link
    let homeLink = createNavLink('Home', 'section1');
  
    // Menu link
    let menuLink = createNavLink('Menu', 'section2');
  
    // Contacts link
    let contactsLink = createNavLink('Contacts', '');
  
    // Append navigation items to the navbar
    navbar.appendChild(homeLink);
    navbar.appendChild(menuLink);
    navbar.appendChild(contactsLink);
  
    // Initial setup for active link
    setActiveLink(homeLink);
  
    // Add click event listeners to each link
    [homeLink, menuLink, contactsLink].forEach(link => {
      link.addEventListener('click', () => {
        resetActiveLinks();
        setActiveLink(link);
      });
    });
  
    return navbar;
  }
  
  // Helper function to create a navigation link
  function createNavLink(text, sectionId) {
    let link = document.createElement('a');
    link.classList.add('navlinks');
    link.href = `#${sectionId}`;
    link.textContent = text;
    return link;
  }
  
  // Helper function to reset the active state for all links
  function resetActiveLinks() {
    document.querySelectorAll('.navlinks').forEach(link => {
      link.classList.remove('active');
    });
  }
  
  // Helper function to set the active state for a specific link
  function setActiveLink(link) {
    link.classList.add('active');
  }
  