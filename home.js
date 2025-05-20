const slides = document.querySelectorAll('.slide');
let current = 0;

document.querySelector('.nav-btn.left').onclick = () => {
    slides[current].classList.remove('active');
    current = (current - 1 + slides.length) % slides.length;
    slides[current].classList.add('active');
};

document.querySelector('.nav-btn.right').onclick = () => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');

};

document.addEventListener("DOMContentLoaded", function () {
    const artBox = document.querySelector(".art_box");

    let scrollAmount = 0;
    let direction = 1;

    function autoScroll() {
        if (!artBox) return;

        scrollAmount += 2 * direction;

        if (
            scrollAmount >= artBox.scrollWidth - artBox.clientWidth ||
            scrollAmount <= 0
        ) {
            direction *= -4; // reverse direction
        }

        artBox.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    }

    setInterval(autoScroll, 30); // Adjust speed as needed
});





