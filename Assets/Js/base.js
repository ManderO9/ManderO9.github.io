// This function takes in a delay in milliseconds and takes that amount of time to finish executing
function TaskDelay(delay) {
    return new Promise((resolve, reject) => {
        // Create an interval
        var interval = setInterval(() => {
            // After the delay...
            // Resolve the function(return success)
            resolve();

            // Clear the interval
            clearInterval(interval);
        }, delay)
    });
}


// A function that will return a random float between 0 and maxInt
function random(maxInt) {
    return Math.random() * maxInt;
}

function RandomBetween(minInt, maxInt) {
    return Math.random() * (maxInt - minInt) + minInt;
}


// Runs the passed in function after the a certain delay in milliseconds
function RunAfter(callBack, delay) {
    // Create an interval
    var interval = setInterval(() => {
        // Run the function after the delay
        callBack();

        // Clear the interval
        clearInterval(interval);

    }, delay);
}

// Returns true if the current element is inside the bounds of the window
function IsVisible(element) {
    // Get the position of the element
    var position = element.getBoundingClientRect();

    // Check that it is inside the window
    return (position.top >= 0 &&
        position.left >= 0 &&
        position.right <= window.innerWidth &&
        position.bottom <= window.innerHeight
    )
}

