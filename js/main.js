document.addEventListener('DOMContentLoaded', () => {
    // Select the first <a> tag and the submenu element
    const firstButton = document.querySelector('.top-nav__element-buttons .top-nav__btn');
    const subMenu = document.querySelector('.top-nav__sub-menu');
    
    // Hide submenu on document load
    subMenu.style.display = 'none';
    
    // Variable to track submenu visibility state
    let isSubMenuVisible = false;
    
    // Function to show submenu
    const showSubMenu = () => {
        subMenu.style.display = 'block';
    };

    // Function to hide submenu
    const hideSubMenu = () => {
        subMenu.style.display = 'none';
    };

    // Show submenu when the first button is hovered
    firstButton.addEventListener('mouseenter', showSubMenu);

    // Show submenu when hovering over the submenu itself
    subMenu.addEventListener('mouseenter', showSubMenu);

    // Hide submenu when leaving the submenu area
    subMenu.addEventListener('mouseleave', hideSubMenu);
   
    // Function to toggle submenu on click
    const toggleSubMenu = () => {
        if (isSubMenuVisible) {
            hideSubMenu();
        } else {
            showSubMenu();
        }
        isSubMenuVisible = !isSubMenuVisible;
    };

    // Show or hide submenu on button click (mobile)
    firstButton.addEventListener('click', toggleSubMenu);

    // Hide submenu when clicking outside of the submenu
    document.addEventListener('click', (event) => {
        if (!firstButton.contains(event.target) && !subMenu.contains(event.target)) {
            hideSubMenu();
            isSubMenuVisible = false;
        }
    });
});