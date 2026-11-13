
// =====================================
// CSC DIGITAL SEVA KENDRA
// HOME PAGE JAVASCRIPT
// =====================================

// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("show");
});

// CLOSE MOBILE MENU AFTER CLICK
navbar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("show");
    });
});

// APPLICATION MODAL
const applicationModal = document.getElementById("applicationModal");
const serviceName = document.getElementById("serviceName");

document.querySelectorAll(".apply-btn").forEach(button => {
    button.addEventListener("click", () => {
        serviceName.value = button.dataset.service;
        applicationModal.classList.add("show");
    });
});

// CLOSE MODALS
document.querySelectorAll(".close-btn").forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.getElementById(button.dataset.close);
        modal.classList.remove("show");
    });
});

// CLICK OUTSIDE TO CLOSE
document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
});

// APPLICATION FORM
const applicationForm = document.getElementById("applicationForm");

applicationForm.addEventListener("submit", event => {
    event.preventDefault();

    alert(
        "मित्र, यह अभी Demo Application Form है।\n\n" +
        "आवेदन जमा करने के लिए इसे Server और Database से जोड़ना बाकी है।"
    );
});

// TRACK APPLICATION
const trackBtn = document.getElementById("trackBtn");
const quickTrack = document.getElementById("quickTrack");
const trackModal = document.getElementById("trackModal");

trackBtn.addEventListener("click", () => {
    trackModal.classList.add("show");
});

quickTrack.addEventListener("click", event => {
    event.preventDefault();
    trackModal.classList.add("show");
});

// CHECK APPLICATION STATUS
document.getElementById("checkStatus").addEventListener("click", () => {
    const number = document.getElementById("applicationNumber").value.trim();
    const message = document.getElementById("trackMessage");

    if (!number) {
        message.textContent = "कृपया Application Number दर्ज करें।";
        message.style.color = "red";
        return;
    }

    message.textContent =
        "Application Status देखने के लिए Server से कनेक्शन जरूरी है।";

    message.style.color = "#0757c7";
});

// DOWNLOAD CERTIFICATE
document.getElementById("downloadBtn").addEventListener("click", event => {
    event.preventDefault();

    alert("Certificate Download सुविधा जल्द ही Server से जोड़ी जाएगी।");
});

// LOGIN BUTTONS
document.querySelectorAll("[data-login]").forEach(button => {
    button.addEventListener("click", () => {
        const role = button.dataset.login;

        alert(
            role + " Login System अभी तैयार नहीं है।\n" +
            "इसे अगले चरण में बनाया जाएगा।"
        );
    });
});

// =====================================
// END
// =====================================
