





const header = document.querySelector(".header");
const input = document.querySelector(".input-box input");
const continueBtn = document.querySelector(".continue-btn");
const socialButtons = document.querySelectorAll(".social-btn");
const menuBtn = document.querySelector(".menu-btn");





window.addEventListener("scroll", () => {

    if (window.scrollY > 5) {

        header.style.boxShadow = "0 2px 12px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});





continueBtn.addEventListener("click", () => {

    const value = input.value.trim();

    if (value === "") {

        alert("Please enter your phone number or email.");

        input.focus();

        return;

    }

    alert("Login submitted! (Demo only)");

});





input.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        continueBtn.click();

    }

});





input.addEventListener("focus", () => {

    document.querySelector(".input-box").style.borderColor = "#222";

});

input.addEventListener("blur", () => {

    document.querySelector(".input-box").style.borderColor = "#DDDDDD";

});





socialButtons.forEach(button => {

    button.addEventListener("click", () => {

        const provider = button.querySelector("span").textContent;

        alert(provider + "\n\nNot implemented in this clone.");

    });

});





menuBtn.addEventListener("click", () => {

    alert("Profile menu (Demo)");

});





const navLinks = document.querySelectorAll(".mobile-nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});





window.addEventListener("load", () => {

    console.log("Airbnb Login Clone Loaded");

});