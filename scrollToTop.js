document.addEventListener("DOMContentLoaded", () => {
    const scrollToTop = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollToTop.classList.add("show");
        } else {
            scrollToTop.classList.remove("show");
        }
    });

    scrollToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});