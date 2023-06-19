

// When the page is loaded
OnLoad(async () => {

    // Get the container of the stars
    var starsContainer = document.getElementById("stars-container");

    // If we have no stars container...
    if (!starsContainer)
        // Don't do anything
        return;

    // The amount of time in milliseconds before creating a new star
    var creationDelay = 1000;

    // The delay between each blink of a star
    var blinkingDelay = 4000;

    // The number of stars that we should reach before starting to delete stars from the screen
    var numberBeforeStartingDelete = 30;

    // The delay to take before shaking a star
    var starShakeDelay = 1000;

    // Create a list of stars to show
    var stars = createStars(10);

    // For each star in the list of stars...
    stars.forEach(star => {
        // Add it to the container
        starsContainer.appendChild(star);
    });

    // Set the creation interval
    var creationDlay = setInterval(() => {

        // Create a new star
        var star = createStar(random(5), random(100), random(100), random(15), random(4), Math.random() * 0.2 + 0.1);

        // Add the star to the list of stars
        stars.push(star);

        // Add the star to the container
        starsContainer.appendChild(star);
    }, creationDelay);

    // Set the deletion interval
    var deletionInterval = setInterval(() => {
        // Make sure we don't delete all the stars
        if (stars.length > numberBeforeStartingDelete) {
            // Get the index of a random star to delete
            var index = Math.floor(random(stars.length));

            // Get the star to delete
            var star = stars[index];

            // Hide the star
            star.classList.add("hide")

            // Remove it from the list of stars
            stars.splice(index, 1);

            // After a while
            RunAfter(() => {
                // Remove it from the container
                starsContainer.removeChild(star);
            }, 2000);
        }
    }, creationDelay);

    // Set the blinking interval
    var blinkingInterval = setInterval(() => {
        // Make sure we have at least on star
        if (stars.length == 0)
            return;

        // Get the index of a random star to give it blink
        var index = Math.floor(random(stars.length));

        // Get the star to blink
        var star = stars[index];

        // Get the current style
        var oldStyle = star.style.boxShadow;

        // Give it a box shadow
        star.style.boxShadow = "0px 0px 10px 4px yellow";

        // After a certain period, go back to the preious style
        RunAfter(() => { star.style.boxShadow = oldStyle }, 500);
    }, blinkingDelay);


    // Set the blinking interval, where at each time we will give a random shake to a random star
    var perturbationInterval = setInterval(() => {
        // Make sure we have at least on star
        if (stars.length == 0)
            return;

        // Get the index of a random star to give it a shake
        var index = Math.floor(random(stars.length));

        // Get the star to shake
        var star = stars[index];

        // Give it a shake
        RunAfter(() => { star.style.top = parseFloat(star.style.top.replace("%", "")) + 0.05 + "%"; }, 500);
        RunAfter(() => { star.style.left = parseFloat(star.style.left.replace("%", "")) + 0.02 + "%"; }, 1000);
        RunAfter(() => { star.style.top = parseFloat(star.style.top.replace("%", "")) + 0.03 + "%"; }, 1500);
        RunAfter(() => { star.style.left = parseFloat(star.style.left.replace("%", "")) + 0.04 + "%"; }, 2000);
        RunAfter(() => { star.style.top = parseFloat(star.style.top.replace("%", "")) + -0.05 + "%"; }, 2500);
        RunAfter(() => { star.style.left = parseFloat(star.style.left.replace("%", "")) + -0.02 + "%"; }, 3000);
        RunAfter(() => { star.style.top = parseFloat(star.style.top.replace("%", "")) + -0.03 + "%"; }, 3500);
        RunAfter(() => { star.style.left = parseFloat(star.style.left.replace("%", "")) + -0.04 + "%"; }, 4000);

    }, starShakeDelay);







    // The scroll position from the top
    var scrollPosition = 0;

    // After each scroll
    document.onscroll = function (event) {

        // A variable indicating if we scrolled down
        var scrolledDown = false;

        // If we scrolled down...
        if (scrollPosition < window.scrollY)
            // Set the variable indicating it
            scrolledDown = true;

        // Set the new scroll position
        scrollPosition = window.scrollY;

        // For each star 
        stars.forEach(star => {

            // Get the position from the top
            var top = star.style.top.replace("%", "");

            // If we scrolled down
            if (scrolledDown)
                // Make the stars go up
                top -= star.dataset.zDistance;
            else
                // Make the stars go down
                top = parseFloat(top) + parseFloat(star.dataset.zDistance);

            star.style.top = top + "%";

            // If the star is too far out
            if (top < -2 || top > 102) {
                // Remvoe it from the container
                starsContainer.removeChild(star);

                // Get it's index in the array
                var index = stars.indexOf(star);

                // Remove it from the list of stars
                stars.splice(index, 1);
            }

        })
    }

    // This function creates a star, giving it required information
    function createStar(size, left, top, shadowDeapth, shadowSpread, zDistance) {
        // Create a span
        var star = document.createElement("span");

        // Set the distance from the screen of the star
        star.dataset.zDistance = zDistance;

        // Set it's position
        star.style.left = left + "%";
        star.style.top = top + "%";

        // Set it's size
        star.style.width = size + "px";
        star.style.height = size + "px";

        // Add a shadow to the star
        star.style.boxShadow = "0px 0px " + shadowDeapth + "px " + shadowSpread + "px yellow";

        // Additional styles
        star.classList.add("star");


        // After a while
        RunAfter(() => {
            // Make the star visible
            star.classList.add("show");
        }, 2000);

        // Return the element
        return star;
    }


    // This function returns a list of stars
    function createStars(number) {

        // Create the list of stars
        var stars = [];

        // For each created star
        for (let i = 0; i < number; i++) {

            // Create a star     size "px"  left "%"    right "%"   deapth     spread     zDistance
            var star = createStar(random(5), random(100), random(100), random(15), random(4), Math.random() * 0.2 + 0.1);

            // Add the star to the list of stars
            stars.push(star);

        }

        // Return the list of stars
        return stars;
    }

})

