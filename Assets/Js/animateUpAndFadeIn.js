OnLoad(() => {
    // Get the elements to fade in
    const fadeIns = document.querySelectorAll(".fade-in-group");

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
                entry.target.classList.add('appear');
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


    // Create the leafs to add to the tree
    const leftLeafs = [
        '<div class="leaf-left" style="width:  30px;left: 12px;top: px;"><span class="over-leaf"></span><span><svg style="transform: rotate(110deg);" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M28.082 9.534c-0.058 0.174-0.117 0.349-0.176 0.525 0.674 3.296 0.425 6.877-1.276 10.787 0.247-2.511 0.206-4.913-0.182-7.215-0.458 0.891-1.042 1.755-1.64 2.624 0.085 2.497-0.381 5.132-1.603 7.944 0.196-1.997 0.16-3.922-0.036-5.794-0.801 0.911-1.695 1.786-2.697 2.587-0.237 1.584-0.684 3.223-1.421 4.92 0.132-1.348 0.154-2.68 0.109-3.972-2.221 1.51-4.858 2.718-8.053 3.389 2.691-1.51 4.838-3.068 6.596-4.665-1.156-0.241-2.346-0.399-3.535-0.51 1.572-0.397 3.124-0.552 4.628-0.51 1.075-1.099 1.973-2.205 2.697-3.353-2.005-0.361-4.034-0.465-6.086-0.328 2.355-1.14 4.702-1.538 7.033-1.385 0.602-1.24 1.014-2.523 1.312-3.826-1.773-0.168-3.704 0.253-5.904 0.802 1.986-1.82 4.133-2.61 6.268-2.842 0.111-0.903 0.169-1.808 0.18-2.741-9.848-7.007-7.239 16.56-22.665 20.346 12.693 7.863 37.271-3.539 26.451-16.782zM25.788 1.846c0.628-0.305 1.39-0.323 1.968 0.219 0.33 3.103-0.68 9.663-4.665 14.249 3.039-5.538 3.261-9.548 2.697-14.467v-0z"></path></svg></span></div>',
        '<div class="leaf-left" style="width:  30px;left: 9px; top: px;"><span class="over-leaf"></span><span><svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M12.295,14.201 C12.43,14.088 12.557,13.969 12.676,13.847 C10.687,12.944 9.178,11.848 7.818,10.739 C6.194,10.735 4.52,10.321 3.663,9.262 C4.94,9.905 6.284,9.908 6.737,9.847 C2.898,6.381 1.835,2.992 1.835,2.992 C3.149,5.052 4.536,6.644 5.894,7.908 C5.325,6.82 5.658,4.808 5.658,4.808 C6.765,8.706 6.895,8.768 6.822,8.802 C7.722,9.531 8.697,10.216 9.509,10.739 C9.217,10.059 9.01,9.068 9.037,7.37 C9.037,7.37 9.759,10.932 10.893,11.809 C11.796,12.33 12.591,12.734 13.207,13.041 C14.183,11.585 14.188,7.703 11.796,6.144 C9.218,4.462 4.871,4.398 0.474,0.096 C-0.841,-1.191 1.603,10.132 5.144,13.289 C7.32,15.234 10.152,15.99 12.295,14.201 L12.295,14.201 Z"></path><path d="M11.266,14.064 C11.266,14.064 12.446,14.677 13.8,15.275 C15.154,15.873 15.803,15.752 15.879,15.9 C15.957,16.05 15.918,14.258 15.918,14.258 C15.918,14.258 14.09,14.691 12.055,13.562 L11.266,14.064 L11.266,14.064 Z"></path></g></svg></span></div>',
        '<div class="leaf-left" style="width: 30px;left: 8.6px;top: px;"><span class="over-leaf"></span><span><svg style="transform: scaleX(-1);" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g><path class="st0" d="M74.96,407.064c3.061-82.464,41.669-165,106.747-225.632c39.177-36.509,84.732-62.947,135.396-78.57 c0.738-0.232,1.482-0.4,2.228-0.617c-0.697-2.003-1.266-4.07-2.027-6.033C301.112,54.055,270.837,21.384,233.206,0 c-41.725,12.947-80.005,35.812-112.236,67.626c-32.158,31.798-58.1,72.425-73.186,119.83 c-15.062,47.389-17.033,94.834-7.604,138.185C46.655,355.124,58.335,382.844,74.96,407.064z" /><path class="st0" d="M460.504,114.246c-45.033-5.744-91.501-1.546-136.15,12.122c-44.665,13.788-87.824,37.615-125.871,73.074 c-69.901,65.134-104.392,153.439-98.479,236.359c-9.87,7.499-19.845,14.918-30.116,22.24c-10.375,7.283-20.614,14.614-33.392,21.84 L54.707,512c15.134-8.604,25.717-16.272,36.597-23.891c10.712-7.635,20.942-15.246,31.037-22.922 c79.099,27.336,181.792,5.84,260.746-67.722c42.83-39.874,72.338-89.547,85.917-140.228 C482.705,206.604,479.988,155.194,460.504,114.246z M406.778,187.89c-19.974,29.17-50.193,63.972-82.72,98.326 c28.898-4.735,51.996-9.038,63.06-11.16c4.655-0.889,7.17-1.395,7.178-1.395c4.446-0.889,8.765,1.995,9.654,6.434 c0.889,4.447-1.995,8.765-6.434,9.654c-0.08,0.016-39.986,7.988-92.302,16.095c-5.768,5.913-11.561,11.777-17.337,17.553 c-17.61,17.602-35.01,34.386-51.09,49.464c39.554-6.145,80.044-14.372,99.801-18.555c7.852-1.658,12.403-2.668,12.418-2.676 c4.422-0.977,8.804,1.81,9.79,6.233c0.977,4.423-1.81,8.804-6.233,9.79c-0.121,0.016-74.012,16.456-136.062,24.732l-0.969,0.128 c-16.232,14.782-30.124,26.888-40.043,35.003v0.008c-3.5,2.868-8.676,2.347-11.544-1.162c-2.868-3.5-2.347-8.676,1.162-11.544 c10.343-8.461,25.469-21.688,43.183-37.919c0.505-3.557,1.058-8.044,1.634-13.275c0.969-8.782,2.002-19.452,3.02-30.661 c2.044-22.408,4.006-46.948,5.256-62.988c0.833-10.687,1.346-17.578,1.346-17.593c0.336-4.519,4.27-7.908,8.789-7.571 c4.519,0.329,7.908,4.27,7.572,8.789c0,0.032-4.615,62.323-8.669,102.317c-0.136,1.338-0.264,2.508-0.4,3.781 c15.599-14.653,32.456-30.916,49.44-47.901c5.992-5.993,11.993-12.074,17.978-18.203c2.452-9.806,4.246-25.444,5.32-41.116 c1.194-16.961,1.666-34.105,1.859-45.073c0.128-7.307,0.128-11.833,0.128-11.842c0-4.534,3.669-8.204,8.204-8.204 s8.204,3.67,8.204,8.204c-0.008,0.144,0.016,41.741-3.509,75.27c-0.072,0.649-0.153,1.266-0.225,1.906 c31.414-33.312,60.336-66.801,79.003-94.113c2.556-3.741,7.659-4.694,11.401-2.139C408.38,179.044,409.333,184.148,406.778,187.89z " /></g></svg></span></div>',
    ];

    const rightLeafs = [
        '<div class="leaf-right" style="width: 30px;left: 39px;top: px;"><span class="over-leaf"></span><span><svg style="transform: rotate(20deg);" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g><path class="st0" d="M74.96,407.064c3.061-82.464,41.669-165,106.747-225.632c39.177-36.509,84.732-62.947,135.396-78.57 c0.738-0.232,1.482-0.4,2.228-0.617c-0.697-2.003-1.266-4.07-2.027-6.033C301.112,54.055,270.837,21.384,233.206,0 c-41.725,12.947-80.005,35.812-112.236,67.626c-32.158,31.798-58.1,72.425-73.186,119.83 c-15.062,47.389-17.033,94.834-7.604,138.185C46.655,355.124,58.335,382.844,74.96,407.064z" /><path class="st0" d="M460.504,114.246c-45.033-5.744-91.501-1.546-136.15,12.122c-44.665,13.788-87.824,37.615-125.871,73.074 c-69.901,65.134-104.392,153.439-98.479,236.359c-9.87,7.499-19.845,14.918-30.116,22.24c-10.375,7.283-20.614,14.614-33.392,21.84 L54.707,512c15.134-8.604,25.717-16.272,36.597-23.891c10.712-7.635,20.942-15.246,31.037-22.922 c79.099,27.336,181.792,5.84,260.746-67.722c42.83-39.874,72.338-89.547,85.917-140.228 C482.705,206.604,479.988,155.194,460.504,114.246z M406.778,187.89c-19.974,29.17-50.193,63.972-82.72,98.326 c28.898-4.735,51.996-9.038,63.06-11.16c4.655-0.889,7.17-1.395,7.178-1.395c4.446-0.889,8.765,1.995,9.654,6.434 c0.889,4.447-1.995,8.765-6.434,9.654c-0.08,0.016-39.986,7.988-92.302,16.095c-5.768,5.913-11.561,11.777-17.337,17.553 c-17.61,17.602-35.01,34.386-51.09,49.464c39.554-6.145,80.044-14.372,99.801-18.555c7.852-1.658,12.403-2.668,12.418-2.676 c4.422-0.977,8.804,1.81,9.79,6.233c0.977,4.423-1.81,8.804-6.233,9.79c-0.121,0.016-74.012,16.456-136.062,24.732l-0.969,0.128 c-16.232,14.782-30.124,26.888-40.043,35.003v0.008c-3.5,2.868-8.676,2.347-11.544-1.162c-2.868-3.5-2.347-8.676,1.162-11.544 c10.343-8.461,25.469-21.688,43.183-37.919c0.505-3.557,1.058-8.044,1.634-13.275c0.969-8.782,2.002-19.452,3.02-30.661 c2.044-22.408,4.006-46.948,5.256-62.988c0.833-10.687,1.346-17.578,1.346-17.593c0.336-4.519,4.27-7.908,8.789-7.571 c4.519,0.329,7.908,4.27,7.572,8.789c0,0.032-4.615,62.323-8.669,102.317c-0.136,1.338-0.264,2.508-0.4,3.781 c15.599-14.653,32.456-30.916,49.44-47.901c5.992-5.993,11.993-12.074,17.978-18.203c2.452-9.806,4.246-25.444,5.32-41.116 c1.194-16.961,1.666-34.105,1.859-45.073c0.128-7.307,0.128-11.833,0.128-11.842c0-4.534,3.669-8.204,8.204-8.204 s8.204,3.67,8.204,8.204c-0.008,0.144,0.016,41.741-3.509,75.27c-0.072,0.649-0.153,1.266-0.225,1.906 c31.414-33.312,60.336-66.801,79.003-94.113c2.556-3.741,7.659-4.694,11.401-2.139C408.38,179.044,409.333,184.148,406.778,187.89z " /></g></svg></span></div>',
        '<div class="leaf-right" style="width: 30px;left: 38px;top: px;"><span class="over-leaf"></span><span><svg style="transform: scaleX(-1);" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M12.295,14.201 C12.43,14.088 12.557,13.969 12.676,13.847 C10.687,12.944 9.178,11.848 7.818,10.739 C6.194,10.735 4.52,10.321 3.663,9.262 C4.94,9.905 6.284,9.908 6.737,9.847 C2.898,6.381 1.835,2.992 1.835,2.992 C3.149,5.052 4.536,6.644 5.894,7.908 C5.325,6.82 5.658,4.808 5.658,4.808 C6.765,8.706 6.895,8.768 6.822,8.802 C7.722,9.531 8.697,10.216 9.509,10.739 C9.217,10.059 9.01,9.068 9.037,7.37 C9.037,7.37 9.759,10.932 10.893,11.809 C11.796,12.33 12.591,12.734 13.207,13.041 C14.183,11.585 14.188,7.703 11.796,6.144 C9.218,4.462 4.871,4.398 0.474,0.096 C-0.841,-1.191 1.603,10.132 5.144,13.289 C7.32,15.234 10.152,15.99 12.295,14.201 L12.295,14.201 Z"></path><path d="M11.266,14.064 C11.266,14.064 12.446,14.677 13.8,15.275 C15.154,15.873 15.803,15.752 15.879,15.9 C15.957,16.05 15.918,14.258 15.918,14.258 C15.918,14.258 14.09,14.691 12.055,13.562 L11.266,14.064 L11.266,14.064 Z"></path></g></svg></span></div>',
    ]

    // Get the tree
    const tree = document.querySelector(".tree");

    // If we have a tree
    if (tree) {

        // Get the height to give to the tree
        var treeHeight = document.querySelector("body").clientHeight + 50;

        // Create the position to add the leaf to
        var position = 73;

        // A flag that will indicate if we will insert a left leaf or a right one
        var parity = 0;

        // The sequence of leafs to display
        var sequenceRight = [0, 1, 0, 1, 1];
        var sequenceLeft = [0, 1, 2, 0, 2, 1, 0, 2, 1];

        // Add the leafs to the tree
        while (position < treeHeight - 20) {
            var leaf = ((parity++ % 2) == 0)
                ? leftLeafs[sequenceLeft[(((parity + 1) / 2) % 9)]]
                : rightLeafs[sequenceRight[((parity / 2) % 5)]];

            // Add the leaf to the tree
            tree.innerHTML += leaf.substring(0, 59) + position + leaf.substring(59);

            // Add to the position for the next leaf
            position += 55 + Math.round(RandomBetween(0, 10));
        }

        // Add the tree trunk
        tree.innerHTML += '<div class="trunk"></div>';

        // Set the height of the tree trunk
        document.querySelector(".trunk").style.height = treeHeight + "px";
    }

    // Get the elements to fade the words for
    var fadeWordsElement = document.querySelectorAll(".animate-words-up");
    
    // If we have any words to fade 
    if (fadeWordsElement.length > 0) {
        // Prepaer the fading in
        PrepareFadeWordsUp(fadeWordsElement[0]);
        PrepareFadeWordsUp(fadeWordsElement[1]);

        // Add the appear class after a delay
        RunAfter(() => {
            fadeWordsElement[0].classList.add("appear")
        }, 500);

        RunAfter(() => {
            fadeWordsElement[1].classList.add("appear")
        }, 600);
    }

    function PrepareFadeWordsUp(element) {
        // Get the content of the element
        var content = element.innerHTML;

        // Get the words that make up the content
        var words = content.split(" ");

        // Delete the content of the element
        element.innerHTML = "";

        // For all the words in the content
        for (let i = 0; i < words.length; i++) {
            const word = words[i];

            // Create a new span
            var span = document.createElement("span");

            // Set the content of the span to be the word
            span.innerHTML = word;

            // Add transition delay
            span.style.transitionDelay = i * 5 + "0ms";

            // Add the child to the element
            element.appendChild(span);

            // Add a space afterwards
            element.innerHTML += "&nbsp;";
        }
    }


    // Adds a particle to the specified element
    function AddParticle(container) {
        // Create the particle
        var particle = document.createElement("span");
        particle.classList.add("particle");

        // Set the size of the particle
        var size = RandomBetween(2, 5);
        particle.style.width = size + "px";
        particle.style.height = size + "px";

        // Set a random left margin
        particle.style.marginLeft = RandomBetween(10, 90) + "%";

        // Add the particle to the overleaf element
        container.appendChild(particle);

        // After a certain delay, delete the particle form the container
        RunAfter(() => { container.removeChild(particle) }, 2000);
    }



    // Add particle effect to the leafs

    // If we have a tree
    if (tree) {

        // Get all the elements that are above the leafs
        var overleafs = document.querySelectorAll(".over-leaf");
        overleafs.forEach(overleaf => {
            // When the mouse enters the overleaf
            overleaf.addEventListener("mouseenter", () => {

                // Set an intervale to add particles
                const interval = setInterval(() => {
                    AddParticle(overleaf);
                }, 200);

                // When the mouse leaves
                overleaf.addEventListener("mouseleave", () => {
                    // Clear the interval and stop displaying particles
                    clearInterval(interval);
                });
            });
        });


        // Fade leafs in 


        // Get all the leafs
        const leafs = document.querySelectorAll(".leaf-top, .leaf-right, .leaf-left");

        // The leafs that are not visible yet
        const hiddenLeafs = [];

        for (let i = 0; i < leafs.length; i++) {
            const leaf = leafs[i];

            // If the leaf is inside the window bounds
            if (IsVisible(leaf)) {
                // Show it with a delay
                leaf.style.transitionDelay = i + "00ms";
                leaf.style.transform = "translate(0%, 0%) scale(1)";

            }
            // Otherwise
            else {
                // Add it to the list to show it later
                hiddenLeafs.push(leaf);
            }
        }

        // Make the trunk grow with the leafs
        document.querySelector(".trunk").style.marginTop = "0px";

        // Create a new intersection observer
        var leafsObserver = new IntersectionObserver(function (leafs, observer) {

            // For each element observe that element
            leafs.forEach(leaf => {
                // If the entry is intersecting make it appear
                if (leaf.isIntersecting) {
                    leaf.target.style.transform = "translate(0%, 0%) scale(1)";

                    // Unobserve the entry
                    observer.unobserve(leaf.target);
                }
            });
        },
            {
                threshold: 0,
                rootMargin: "0px"
            });

        // For each hidden leaf
        hiddenLeafs.forEach(element => {
            // Observe that element
            leafsObserver.observe(element);
        });
    }

    // Get the github and linked in logos
    var logos = document.querySelectorAll(".top-menu>ul>li:last-child, .top-menu>ul>li:nth-child(5)");

    // Make them visible through an animation
    logos.forEach(logo => logo.style.animationName = "pop-up");




});

