document.addEventListener("DOMContentLoaded", () => {
    
    const tabButtons = document.querySelectorAll(".tab-btn");
    const roleContents = document.querySelectorAll(".role-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            roleContents.forEach(content => content.classList.remove("active"));
            
            const targetRole = button.getAttribute("data-role");
            const targetContent = document.getElementById(`${targetRole}-content`);
            
            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });

    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            const body = header.nextElementSibling;

            item.classList.toggle("open");

            if (item.classList.contains("open")) {
                body.style.maxHeight = body.scrollHeight + "px";
            } else {
                body.style.maxHeight = "0px";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    
    const tabButtons = document.querySelectorAll(".tab-btn");
    const roleContents = document.querySelectorAll(".role-content");
    const dynamicTitle = document.getElementById("dynamic-title");

    const titleMappings = {
        "guest": "Guides for getting started",
        "home-host": "Guides for home hosting",
        "experience-host": "Guides for experience hosting",
        "service-host": "Guides for service hosting",
        "travel-admin": "Guides for travel admins"
    };

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            roleContents.forEach(content => content.classList.remove("active"));
            
            const targetRole = button.getAttribute("data-role");
            const targetContent = document.getElementById(`${targetRole}-content`);
            if (targetContent) {
                targetContent.classList.add("active");
            }

            if (titleMappings[targetRole]) {
                dynamicTitle.textContent = titleMappings[targetRole];
            }
        });
    });
});