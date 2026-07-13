document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.getElementById("mainHeader");

    window.addEventListener("scroll", () => {
        const verticalPosition = window.scrollY;

        // Threshold values matching both PC and Mobile views safely
        if (verticalPosition > 25) {
            headerElement.classList.add("scrolled-mode");
            headerElement.classList.add("mob-compressed-mode");
        } else {
            headerElement.classList.remove("scrolled-mode");
            headerElement.classList.remove("mob-compressed-mode");
        }
    });
});