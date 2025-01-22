// function IsMobileOrTablet() {
//     let check = false;
//     (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
//     return check;
// };


// Get the elements to fade in
const fadeIns = document.querySelectorAll(".fade-in");

// Set the options of the intersection observer
const options = {
    threshold: 0.3,
    // rootMargin: "200px"
}

// Create a new intersection observer
const observer = new IntersectionObserver(function (entries, observer) {
    // For each element observe that element
    entries.forEach(entry => {
        // If the entry is intersecting make it appear
        if (entry.isIntersecting) {

            // Make it appear
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



// Navbar menu
const hamburgerMenu = document.querySelector('#mobile-hamburger-menu');
const navbarLinks = document.querySelector("#navbar-links-list");

hamburgerMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('visible');
});

navbarLinks.addEventListener('click', (e) => {
    if (e.target !== navbarLinks) return;
    navbarLinks.classList.toggle('visible');
})


// Notifications

function ShowNotification(type, message) {
    // type: "success" | "error"


    // <div class="notification-container">
    //     <div>
    //         <div>hello world, some message here</div>
    //         <button class="action-button">Close</button>
    //     </div>
    // </div>

    const notificationOverlay = document.createElement("div");
    notificationOverlay.classList.add("notification-container");
    
    var content = document.createElement("div");
    notificationOverlay.appendChild(content);

    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    content.appendChild(messageElement);
    
    var closeButton = document.createElement("button");
    closeButton.classList.add("action-button");
    closeButton.textContent = "Close";
    content.appendChild(closeButton);

    closeButton.onclick = () => {
        document.body.removeChild(notificationOverlay);
    }
    
    document.body.appendChild(notificationOverlay);
}

// Contact form

// get all data in form and return object
function GetFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function (k) {
        if (elements[k].name === "honeypot") {
            honeypot = elements[k].value;
            return false;
        }
        return true;
    }).map(function (k) {
        if (elements[k].name !== undefined) {
            return elements[k].name;
            // special case for Edge's html collection
        } else if (elements[k].length > 0) {
            return elements[k].item(0).name;
        }
    }).filter(function (item, pos, self) {
        return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function (name) {
        var element = elements[name];

        // singular form elements just have one value
        formData[name] = element.value;

        // when our element has multiple items, get their values
        if (element.length) {
            var data = [];
            for (var i = 0; i < element.length; i++) {
                var item = element.item(i);
                if (item.checked || item.selected) {
                    data.push(item.value);
                }
            }
            formData[name] = data.join(', ');
        }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    return { data: formData, honeypot: honeypot };
}


const actionUrl = "https://script.google.com/macros/s/AKfycbzc-FN77GxMjLeQv4jSPuSi94LFwzMA3R0ddOb7LLAWLjteelrCxjBUKDCVY-AeH4gshA/exec";
const submitButton = document.querySelector("form>button[type='submit']");

async function SubmitContactForm(event) {
    event.preventDefault();

    var form = event.target;
    var formData = GetFormData(form);
    var data = formData.data;

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
        return false;
    }

    submitButton.disabled = true;

    try {
        var encoded = Object.keys(data).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');

        var response = await fetch(actionUrl, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encoded
        });

        var body = await response.json();
        if (body.result == "success") {
            ShowNotification("success", "Successfully sent your message, I will get back to you soon!");
            form.reset();
        } else {
            ShowNotification("error", "Failed to send your message, . Please try again.");
        }

    } catch (error) {
        ShowNotification("error", "An unknown error occurred. Please try again later.");
    }
    finally {
        submitButton.disabled = false;
    }
}
