// function IsAnyOf(character, string) {
//     for (let i = 0; i < string.length; i++) {
//         const c = string[i];
//         if (c == character) return true;
//     }
//     return false;
// }


// function GetElementsFromString(input) {
//     var output = "";

//     for (let i = 0; i < input.length; i++) {
//         const c = input[i];

//         if (c == " ") {
//             output += "&nbsp;";
//             continue;
//         }

//         if (c == "\n") {
//             output += "<br>";
//             continue;
//         }

//         if (IsAnyOf(c, "!,.")) {
//             output += "<span>" + c + "</span>";
//             continue;
//         }


//         const offsets = ["offset-left", "offset-top", "offset-right", "offset-bottom"];

//         var index = Math.floor((Math.cos(i) + Math.PI) % (i + 1)) % offsets.length;

//         var offset = offsets[index];

//         output += "<span class=\"" + offset + "\">" + c + "</span>";

//     }

//     return output;
// }

// var input = "Hey ! Am Hossem, Am a\nProfessional Software Developer";
// var output = GetElementsFromString(input);

// console.log(output);



function IsMobileOrTablet() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};




// Check if we are in mobile
if (IsMobileOrTablet()) {

    // Get the container of the text to animate
    var introduction = document.querySelector(".animate-text");

    // Will contain the lines and particles that we don't want to show
    var toDeleteItems = [];

    for (let i = 0; i < introduction.children.length; i++) {
        var element = introduction.children[i];
        if (!(element.tagName == "SPAN" || element.tagName == "BR"))
            toDeleteItems.push(element)
        else {
            element.style.transform = "translate(0, 0)";
            element.style.opacity = "1";
            element.style.transition = "none";
        }
    }

    for (let i = 0; i < toDeleteItems.length; i++) {
        var element = toDeleteItems[i];
        introduction.removeChild(element);
    }

    const thirdPage = document.querySelector(".third-page");

    thirdPage.style.height = thirdPage.offsetHeight - 500 + "px";
    thirdPage.style.margin = "0px";
}
else {

    // Get the container of the text to animate
    var introduction = document.querySelector(".animate-text");

    // Get each separate letter in the text
    var letters = Array.from(introduction.children);

    // The delay between showing each letter
    const delay = 30;

    // The time at which we will show each letter
    var timestamp = 600;

    // Remove the lines and particles from the letters to animate
    var lines = letters.filter(x => x.tagName == "STRONG");
    var particles = letters.filter(x => x.tagName == "B");
    letters = letters.filter(x => x.tagName != "STRONG" && x.tagName != "B");

    // For each letter
    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i];

        // Add the delay to the timestamp we will show it in
        timestamp += delay;

        // If this letter is an empty space
        if (letter.textContent.trim().length == 0)
            // Increase the delay a bit more    
            timestamp += 2 * delay;

        // After the timestamp run the fuction that will add the show class
        setTimeout(() => {
            // Make the letter visible with an animation
            letter.classList.add("show");
        }, timestamp);

    }


    // Delete all the lines and particles from the container
    setTimeout(() => {
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            introduction.removeChild(line);
        }
        for (let i = 0; i < particles.length; i++) {
            const particle = particles[i];
            introduction.removeChild(particle);
        }
    }, timestamp + 2000)



    // Parallax scroll animation for the services

    // Get the background image of the third page and the third page
    const background = document.querySelector(".third-page>img");
    const thirdPage = document.querySelector(".third-page");

    // Get the initial height of the page
    const thirdPageMaxHeight = thirdPage.offsetHeight;

    // The offset that we gonna translate the image by when we are scrolling
    var offsetTop = 0;

    // The position of scroll in the window for the previous scroll event,
    // give it a random inital value to check for later 
    var previousScrollPosition = -9999;

    // The margin from the top that the image needs to reach before starting to translate it
    const margin = 100;

    const scrollSpeed = window.outerHeight * 0.5 / 635;

    // Add an event listener for scroll
    window.addEventListener("scroll", () => {

        // Get the position of the background image
        var position = background.getBoundingClientRect();

        // If the background is not visible in the screen, don't do anything
        if (!((position.top >= 0 && position.top <= window.innerHeight - margin)
            || (position.bottom >= 0 && position.bottom <= window.innerHeight)
            || (position.top <= 0 && position.bottom >= window.innerHeight)))
            return;

        // If we haven't set the previous position before...    
        if (previousScrollPosition == -9999)
            // Set it to the current position
            previousScrollPosition = window.scrollY;

        // Add the scrolled distance to the offset top, multiplied by a factor
        offsetTop += scrollSpeed * (window.scrollY - previousScrollPosition);

        // Set the previous scroll position
        previousScrollPosition = window.scrollY;

        // If the offset is negative, we have scrolled in the wrong direction
        // (probably started scrolling from the bottom), make it zero and don't do anything
        if (offsetTop < 0) {
            offsetTop = 0;
            return;
        }

        // Translate the image vertically by the offset amount
        background.style.transform = "translateY(-" + offsetTop + "px)";

        // Decrease the height of the page by the translated amount,
        // so there would be no empty space left later
        thirdPage.style.height = thirdPageMaxHeight - offsetTop + "px";
    });


    // Animate some words in the code randomly
    // Get the words to animate
    const wordsToAnimate = document.querySelectorAll(".shine");

    // Get the section that is containing these words
    const code = document.querySelector(".second-page>code");

    // The time between two animations
    const repeatAnimationTimer = 5000;

    // Create a timer that will run the animation each time
    var timer = setInterval(() => {
        // If the code section is not visible, don't do anything
        if (!IsVisible(code)) return;

        // Get a random element to animate
        const item = wordsToAnimate[Math.floor(RandomBetween(0, wordsToAnimate.length))];

        // Add the shining animation class
        item.classList.add("run");

        // Remove the class after the animation has finished
        setTimeout(() => { item.classList.remove("run"); }, 1000);

    }, repeatAnimationTimer);


    // Get contact page element
    const contactPage = document.querySelector("#contact-section");

    // Wait for the page to load before applying these styles, to avoid the contact page flashing when the site loads
    setTimeout(() => {
        // Set position to fixed
        contactPage.style.position = "fixed";
    }, 1000)


}



// Get the link to the contact page
const contactLink = document.querySelector("#contact-link");

// Get the body of the page
const body = document.querySelector("body");

// Add click event listener to the contact link
contactLink.addEventListener("click", (e) => {
    // Prevent the default behaviour
    e.preventDefault();

    // Scroll to the end of the page
    window.scrollTo({ top: body.clientHeight });
});


// Code animation on the second page

// Get the elements to fade in
const fadeIns = document.querySelectorAll("code");

// Set the options of the intersection observer
const options = {
    threshold: 0.25,
    rootMargin: "0px"
}
if (visualViewport.width > 500)
    options.rootMargin = "0px 0px -150px 0px"

// Create a new intersection observer
const observer = new IntersectionObserver(function (entries, observer) {
    // For each element observe that element
    entries.forEach(entry => {
        // If the entry is intersecting make it appear
        if (entry.isIntersecting) {
            for (let k = 0; k < entry.target.children.length; k++) {
                const child = entry.target.children[k];
                child.classList.add('appear');
            }

            // Unobserve the entry
            observer.unobserve(entry.target);
        }
    });
}, options);

// For each element fade it in
fadeIns.forEach(element => {
    // Observe that element
    observer.observe(element);
});



