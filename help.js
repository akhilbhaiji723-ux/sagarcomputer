
document.addEventListener("DOMContentLoaded", function () {

    // MOBILE MENU
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });
    }

    // FAQ SEARCH
    const faqSearch = document.getElementById("faqSearch");
    const faqItems = document.querySelectorAll(".faq-item");
    const faqEmpty = document.getElementById("faqEmpty");

    if (faqSearch) {

        faqSearch.addEventListener("input", function () {

            const searchText = faqSearch.value.toLowerCase().trim();
            let visibleCount = 0;

            faqItems.forEach(function (item) {

                const question = item.textContent.toLowerCase();

                if (question.includes(searchText)) {
                    item.style.display = "block";
                    visibleCount++;
                } else {
                    item.style.display = "none";
                    item.open = false;
                }

            });

            faqEmpty.hidden = visibleCount !== 0;

        });

    }

});
