

// When the page is loaded
OnLoad(async () => {

    // The hamburger menu on mobile
    const navbarButton = document.querySelector("#menu-icon>span");

    // The navbar container 
    const navbar = document.querySelector(".top-menu");

    // The list of links in the navbar 
    const linksList = document.querySelector(".top-menu>ul");


    const line1 = document.querySelector(".top-menu>div>span>span:nth-child(1)");
    const line2 = document.querySelector(".top-menu>div>span>span:nth-child(2)");
    const line3 = document.querySelector(".top-menu>div>span>span:nth-child(3)");



    // When we click the hamburger menu
    navbarButton.addEventListener("click", () => {

        // If the navigation menu is visible
        if (linksList.style.opacity == "1") {
            // Make the lines of the hamburder menu return to default position
            line1.style.transform = "none";
            line2.style.opacity = "1";
            line3.style.transform = "none";

            // Make it invisible
            linksList.style.opacity = "0";

            // Make it unclickable
            navbar.style.pointerEvents = "none";

            // Remove it's background
            navbar.style.backgroundColor = "transparent";

            // Make it go up
            linksList.style.transform = "translateY(-3%)"
        }

        // Otherwise, if it is not visible
        else {
            // Make the lines of the hamburder menu create an X
            line1.style.transform = "rotate(45deg)";
            line2.style.opacity = "0";
            line3.style.transform = "rotate(-45deg)";
            
            // Make it visibe
            linksList.style.opacity = "1";
            
            // Make it clickable
            navbar.style.pointerEvents = "all";;
            
            // Give it a background color
            navbar.style.backgroundColor = "#00060e";

            // Make it go down to it's original place
            linksList.style.transform = "translateY(0%)"
        }
    });
})

