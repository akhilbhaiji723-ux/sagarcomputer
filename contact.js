
document.addEventListener("DOMContentLoaded", function () {

    // MOBILE MENU
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });
    }

    // CONTACT FORM FRONTEND VALIDATION
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("contactName").value.trim();
            const phone = document.getElementById("contactPhone").value.trim();
            const subject = document.getElementById("contactSubject").value;
            const message = document.getElementById("contactMessage").value.trim();

            if (!name || !phone || !subject || !message) {
                formMessage.textContent = "कृपया सभी जरूरी जानकारी भरें।";
                return;
            }

            if (!/^[0-9]{10}$/.test(phone)) {
                formMessage.textContent = "कृपया सही 10 अंकों का मोबाइल नंबर भरें।";
                return;
            }

            formMessage.textContent =
                "फॉर्म सही भरा गया है। संदेश भेजने की सुविधा Backend से जोड़ना बाकी है।";

        });

    }

});
