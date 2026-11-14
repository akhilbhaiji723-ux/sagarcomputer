
/* ==========================================
   CSC DIGITAL SEVA - 25 SERVICES
========================================== */

const services = [
    {
        id: 1,
        icon: "📜",
        title: "Caste Certificate",
        hindi: "जाति प्रमाण पत्र",
        category: "certificate",
        description: "जाति प्रमाण पत्र के लिए आवेदन सहायता। इसका उपयोग विभिन्न सरकारी योजनाओं और शैक्षणिक प्रक्रियाओं में हो सकता है।",
        documents: ["आवेदक की पहचान का प्रमाण", "पते का प्रमाण", "जाति संबंधी उपलब्ध प्रमाण", "पासपोर्ट साइज फोटो"]
    },
    {
        id: 2,
        icon: "📄",
        title: "Income Certificate",
        hindi: "आय प्रमाण पत्र",
        category: "certificate",
        description: "आय प्रमाण पत्र के आवेदन में सहायता। यह छात्रवृत्ति और विभिन्न सरकारी योजनाओं में उपयोगी हो सकता है।",
        documents: ["पहचान का प्रमाण", "पते का प्रमाण", "आय संबंधी उपलब्ध प्रमाण", "फोटो"]
    },
    {
        id: 3,
        icon: "🏠",
        title: "Domicile Certificate",
        hindi: "निवास प्रमाण पत्र",
        category: "certificate",
        description: "निवास प्रमाण पत्र के आवेदन की प्रक्रिया में सहायता।",
        documents: ["पहचान का प्रमाण", "निवास का प्रमाण", "फोटो", "अन्य संबंधित प्रमाण, यदि आवश्यक हो"]
    },
    {
        id: 4,
        icon: "👶",
        title: "Birth Certificate",
        hindi: "जन्म प्रमाण पत्र",
        category: "certificate",
        description: "जन्म प्रमाण पत्र के पंजीकरण या उपलब्ध रिकॉर्ड के आधार पर आवेदन प्रक्रिया में सहायता।",
        documents: ["अस्पताल या जन्म संबंधी रिकॉर्ड, यदि उपलब्ध हो", "माता-पिता की जानकारी", "पते का प्रमाण", "अन्य संबंधित रिकॉर्ड"]
    },
    {
        id: 5,
        icon: "⚰️",
        title: "Death Certificate",
        hindi: "मृत्यु प्रमाण पत्र",
        category: "certificate",
        description: "मृत्यु प्रमाण पत्र के पंजीकरण और आवेदन प्रक्रिया में सहायता।",
        documents: ["मृत्यु संबंधी मेडिकल रिकॉर्ड, यदि उपलब्ध हो", "मृतक की जानकारी", "आवेदक की पहचान", "अन्य संबंधित रिकॉर्ड"]
    },
    {
        id: 6,
        icon: "🪪",
        title: "PAN Card",
        hindi: "पैन कार्ड",
        category: "identity",
        description: "नए PAN Card या उपलब्ध अधिकृत सेवाओं के माध्यम से सुधार संबंधी आवेदन में सहायता।",
        documents: ["पहचान का प्रमाण", "पते का प्रमाण", "जन्मतिथि का प्रमाण", "फोटो और हस्ताक्षर, जहाँ लागू हों"]
    },
    {
        id: 7,
        icon: "🆔",
        title: "Aadhaar Services",
        hindi: "आधार संबंधित सेवाएँ",
        category: "identity",
        description: "उपलब्ध अधिकृत आधार केंद्रों और आधिकारिक सेवाओं की जानकारी एवं प्रक्रिया में सहायता।",
        documents: ["सेवा के अनुसार पहचान या संबंधित प्रमाण", "आधिकारिक केंद्र द्वारा बताई गई जानकारी"]
    },
    {
        id: 8,
        icon: "👷",
        title: "E-Shram Card",
        hindi: "ई-श्रम कार्ड",
        category: "government",
        description: "पात्र असंगठित क्षेत्र के श्रमिकों के ई-श्रम पंजीकरण में सहायता।",
        documents: ["आधार से संबंधित जानकारी", "आधार से जुड़ा मोबाइल, जहाँ आवश्यक हो", "बैंक खाते की जानकारी, जहाँ आवश्यक हो"]
    },
    {
        id: 9,
        icon: "💳",
        title: "Ayushman Card",
        hindi: "आयुष्मान कार्ड",
        category: "government",
        description: "पात्रता की जाँच और उपलब्ध अधिकृत प्रक्रिया के अनुसार आयुष्मान कार्ड संबंधी सहायता।",
        documents: ["पात्रता संबंधी जानकारी", "परिवार की पहचान संबंधी जानकारी", "आधिकारिक प्रक्रिया में माँगे गए प्रमाण"]
    },
    {
        id: 10,
        icon: "🗳️",
        title: "Voter ID Card",
        hindi: "मतदाता पहचान पत्र",
        category: "identity",
        description: "मतदाता सूची में पंजीकरण, सुधार या अन्य उपलब्ध निर्वाचन सेवाओं की प्रक्रिया में सहायता।",
        documents: ["आयु का प्रमाण", "पते का प्रमाण", "फोटो", "आधिकारिक फॉर्म में माँगी गई जानकारी"]
    },
    {
        id: 11,
        icon: "🍚",
        title: "Ration Card",
        hindi: "राशन कार्ड सेवाएँ",
        category: "government",
        description: "राशन कार्ड से संबंधित उपलब्ध आवेदन और संशोधन प्रक्रिया की जानकारी।",
        documents: ["परिवार के सदस्यों की जानकारी", "पते का प्रमाण", "पहचान संबंधी प्रमाण", "स्थानीय पोर्टल द्वारा माँगे गए दस्तावेज"]
    },
    {
        id: 12,
        icon: "🎓",
        title: "Scholarship Form",
        hindi: "छात्रवृत्ति आवेदन",
        category: "education",
        description: "पात्रता और संबंधित पोर्टल के अनुसार छात्रवृत्ति फॉर्म भरने में सहायता।",
        documents: ["शैक्षणिक रिकॉर्ड", "आय प्रमाण पत्र, जहाँ आवश्यक हो", "जाति प्रमाण पत्र, जहाँ लागू हो", "बैंक विवरण, आधिकारिक पोर्टल पर आवश्यकतानुसार"]
    },
    {
        id: 13,
        icon: "📝",
        title: "Online Forms",
        hindi: "ऑनलाइन फॉर्म",
        category: "other",
        description: "विभिन्न संस्थानों और विभागों के ऑनलाइन आवेदन फॉर्म भरने में सहायता।",
        documents: ["फॉर्म के अनुसार व्यक्तिगत जानकारी", "आवश्यक शैक्षणिक या अन्य प्रमाण", "फोटो और हस्ताक्षर, जहाँ आवश्यक हों"]
    },
    {
        id: 14,
        icon: "🏦",
        title: "Banking Services",
        hindi: "बैंकिंग संबंधित सेवाएँ",
        category: "other",
        description: "उपलब्ध अधिकृत बैंकिंग सेवाओं और बैंकिंग प्रक्रिया की जानकारी।",
        documents: ["संबंधित बैंक द्वारा माँगे गए KYC दस्तावेज", "पहचान और पते का प्रमाण, जहाँ आवश्यक हो"]
    },
    {
        id: 15,
        icon: "🖨️",
        title: "Print & Photocopy",
        hindi: "प्रिंट एवं फोटो कॉपी",
        category: "other",
        description: "दस्तावेजों की प्रिंटिंग, फोटोकॉपी और स्कैनिंग की सुविधा।",
        documents: ["प्रिंट के लिए संबंधित फाइल या दस्तावेज"]
    },
    {
        id: 16,
        icon: "📚",
        title: "Admission Forms",
        hindi: "प्रवेश फॉर्म",
        category: "education",
        description: "स्कूल, कॉलेज और अन्य संस्थानों के प्रवेश फॉर्म भरने में सहायता।",
        documents: ["पिछली कक्षा की मार्कशीट", "फोटो", "पहचान संबंधी जानकारी", "संस्थान द्वारा माँगे गए अन्य प्रमाण"]
    },
    {
        id: 17,
        icon: "💼",
        title: "Job Applications",
        hindi: "सरकारी नौकरी आवेदन",
        category: "education",
        description: "सरकारी और अन्य भर्ती परीक्षाओं के ऑनलाइन आवेदन भरने में सहायता।",
        documents: ["शैक्षणिक योग्यता के प्रमाण", "फोटो", "हस्ताक्षर", "भर्ती विज्ञापन में माँगे गए अन्य दस्तावेज"]
    },
    {
        id: 18,
        icon: "👴",
        title: "Pension Services",
        hindi: "पेंशन संबंधित सेवाएँ",
        category: "government",
        description: "पात्रता और योजना के अनुसार पेंशन आवेदन संबंधी जानकारी और सहायता।",
        documents: ["पहचान का प्रमाण", "आयु का प्रमाण", "बैंक संबंधी जानकारी", "योजना द्वारा माँगे गए अन्य प्रमाण"]
    },
    {
        id: 19,
        icon: "📱",
        title: "Mobile Recharge",
        hindi: "मोबाइल रिचार्ज",
        category: "other",
        description: "उपलब्ध ऑपरेटरों के मोबाइल रिचार्ज विकल्पों की जानकारी और सहायता।",
        documents: ["मोबाइल नंबर", "चुना हुआ रिचार्ज प्लान"]
    },
    {
        id: 20,
        icon: "💡",
        title: "Electricity Bill",
        hindi: "बिजली बिल भुगतान",
        category: "other",
        description: "उपलब्ध अधिकृत माध्यम से बिजली बिल की जानकारी और भुगतान प्रक्रिया में सहायता।",
        documents: ["बिजली उपभोक्ता संख्या या बिल"]
    },
    {
        id: 21,
        icon: "🚗",
        title: "Driving Licence",
        hindi: "ड्राइविंग लाइसेंस",
        category: "identity",
        description: "ड्राइविंग लाइसेंस से संबंधित आधिकारिक ऑनलाइन प्रक्रिया की जानकारी और आवेदन सहायता।",
        documents: ["आयु का प्रमाण", "पते का प्रमाण", "फोटो, जहाँ आवश्यक हो", "परिवहन विभाग द्वारा माँगे गए प्रमाण"]
    },
    {
        id: 22,
        icon: "🚘",
        title: "Vehicle Services",
        hindi: "वाहन संबंधित सेवाएँ",
        category: "other",
        description: "वाहन से संबंधित उपलब्ध परिवहन विभाग की ऑनलाइन सेवाओं की जानकारी।",
        documents: ["वाहन पंजीकरण संबंधी जानकारी", "आवेदक की पहचान", "विशिष्ट सेवा के अनुसार अन्य प्रमाण"]
    },
    {
        id: 23,
        icon: "🛡️",
        title: "Insurance Services",
        hindi: "बीमा संबंधित सेवाएँ",
        category: "other",
        description: "उपलब्ध बीमा सेवाओं की जानकारी और अधिकृत प्रक्रिया में सहायता।",
        documents: ["बीमा प्रदाता द्वारा माँगी गई जानकारी", "पहचान और संपर्क विवरण, जहाँ आवश्यक हो"]
    },
    {
        id: 24,
        icon: "📋",
        title: "Exam & Result Services",
        hindi: "परीक्षा एवं रिजल्ट सेवाएँ",
        category: "education",
        description: "परीक्षा फॉर्म, एडमिट कार्ड और रिजल्ट संबंधी उपलब्ध ऑनलाइन सेवाओं में सहायता।",
        documents: ["रजिस्ट्रेशन या रोल नंबर", "परीक्षा संबंधी जानकारी", "आधिकारिक पोर्टल द्वारा माँगे गए विवरण"]
    },
    {
        id: 25,
        icon: "🌐",
        title: "Other Digital Services",
        hindi: "अन्य डिजिटल सेवाएँ",
        category: "other",
        description: "अन्य उपलब्ध डिजिटल सेवाओं और ऑनलाइन प्रक्रियाओं की जानकारी एवं सहायता।",
        documents: ["चुनी गई सेवा के अनुसार आवश्यक जानकारी और प्रमाण"]
    }
];

/* ELEMENTS */
const servicesGrid = document.getElementById("servicesGrid");
const serviceSearch = document.getElementById("serviceSearch");
const serviceCount = document.getElementById("serviceCount");
const noServices = document.getElementById("noServices");

const serviceModal = document.getElementById("serviceModal");
const applicationModal = document.getElementById("applicationModal");

const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalHindi = document.getElementById("modalHindi");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const modalDocuments = document.getElementById("modalDocuments");

const selectedService = document.getElementById("selectedService");
const applicationForm = document.getElementById("serviceApplicationForm");
const applicationFeedback = document.getElementById("applicationFeedback");

let activeCategory = "all";
let selectedServiceId = null;

const categoryNames = {
    certificate: "Certificates",
    identity: "ID Cards",
    government: "Government Schemes",
    education: "Education & Jobs",
    other: "Other Services"
};

/* CREATE SERVICE CARDS */
function renderServices() {
    const searchText = serviceSearch.value.trim().toLowerCase();

    const filteredServices = services.filter(service => {
        const matchesCategory =
            activeCategory === "all" || service.category === activeCategory;

        const searchableText = [
            service.title,
            service.hindi,
            service.description,
            categoryNames[service.category]
        ].join(" ").toLowerCase();

        const matchesSearch = searchableText.includes(searchText);

        return matchesCategory && matchesSearch;
    });

    servicesGrid.innerHTML = "";

    filteredServices.forEach(service => {
        const card = document.createElement("article");
        card.className = "service-item";

        const top = document.createElement("div");
        top.className = "service-card-top";

        const icon = document.createElement("div");
        icon.className = "service-card-icon";
        icon.textContent = service.icon;

        const number = document.createElement("span");
        number.className = "service-card-number";
        number.textContent = String(service.id).padStart(2, "0");

        top.append(icon, number);

        const title = document.createElement("h3");
        title.textContent = service.title;

        const hindi = document.createElement("p");
        hindi.className = "service-hindi";
        hindi.textContent = service.hindi;

        const description = document.createElement("p");
        description.className = "service-short-description";
        description.textContent = service.description;

        const actions = document.createElement("div");
        actions.className = "service-card-actions";

        const detailsButton = document.createElement("button");
        detailsButton.className = "view-details-btn";
        detailsButton.type = "button";
        detailsButton.textContent = "View Details";
        detailsButton.addEventListener("click", () => openServiceDetails(service.id));

        const applyButton = document.createElement("button");
        applyButton.className = "card-apply-btn";
        applyButton.type = "button";
        applyButton.textContent = "Apply Now →";
        applyButton.addEventListener("click", () => openApplication(service.id));

        actions.append(detailsButton, applyButton);
        card.append(top, title, hindi, description, actions);

        servicesGrid.appendChild(card);
    });

    serviceCount.textContent =
        `${filteredServices.length} Services`;

    noServices.hidden = filteredServices.length !== 0;
}

/* FILTER BUTTONS */
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        activeCategory = button.dataset.category;

        renderServices();
    });
});

/* SEARCH */
serviceSearch.addEventListener("input", renderServices);

/* OPEN SERVICE DETAILS */
function openServiceDetails(serviceId) {
    const service = services.find(item => item.id === serviceId);
    if (!service) return;

    selectedServiceId = service.id;

    modalIcon.textContent = service.icon;
    modalTitle.textContent = service.title;
    modalHindi.textContent = service.hindi;
    modalCategory.textContent = categoryNames[service.category];
    modalDescription.textContent = service.description;

    modalDocuments.innerHTML = "";

    service.documents.forEach(documentName => {
        const li = document.createElement("li");
        li.textContent = documentName;
        modalDocuments.appendChild(li);
    });

    openModal(serviceModal);
}

/* OPEN APPLICATION FORM */
function openApplication(serviceId) {
    const service = services.find(item => item.id === serviceId);
    if (!service) return;

    selectedServiceId = service.id;
    selectedService.value = `${service.title} - ${service.hindi}`;

    applicationForm.reset();
    selectedService.value = `${service.title} - ${service.hindi}`;
    applicationFeedback.textContent = "";
    applicationFeedback.classList.remove("error");

    closeModal(serviceModal);
    openModal(applicationModal);

    document.getElementById("applicantName").focus();
}

/* DETAILS MODAL APPLY BUTTON */
document.getElementById("modalApply").addEventListener("click", () => {
    if (selectedServiceId !== null) {
        openApplication(selectedServiceId);
    }
});

/* MODAL HELPERS */
function openModal(modal) {
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeModal(modal) {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");

    if (!document.querySelector(".service-modal.show")) {
        document.body.style.overflow = "";
    }
}

/* CLOSE BUTTONS */
document.getElementById("closeModal").addEventListener("click", () => {
    closeModal(serviceModal);
});

document.getElementById("closeApplication").addEventListener("click", () => {
    closeModal(applicationModal);
});

/* CLICK OUTSIDE TO CLOSE */
[serviceModal, applicationModal].forEach(modal => {
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

/* ESCAPE KEY */
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeModal(serviceModal);
        closeModal(applicationModal);
    }
});

/* APPLICATION FORM SUBMIT - FRONTEND DEMO ONLY */
applicationForm.addEventListener("submit", event => {
    event.preventDefault();

    if (!applicationForm.reportValidity()) {
        return;
    }

    const formData = new FormData(applicationForm);

    const applicant = {
        name: formData.get("name"),
        mobile: formData.get("mobile"),
        service: formData.get("service")
    };

    /*
       IMPORTANT:
       This is only a frontend demonstration.
       No personal information is stored or sent to a server.
       Connect a secure backend before accepting real applications.
    */

    applicationFeedback.classList.remove("error");
    applicationFeedback.textContent =
        `धन्यवाद ${applicant.name}! आपका ${applicant.service} का Demo Request तैयार है। वास्तविक आवेदन जमा करने की सुविधा जल्द Backend से जोड़ी जाएगी।`;

    applicationForm.reset();
    selectedService.value = applicant.service;
});

/* INITIAL RENDER */
renderServices();

/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("show");

        const isOpen = navbar.classList.contains("show");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    navbar.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("show");

            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}
