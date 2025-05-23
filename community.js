document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".Recent-activities-button-container button");
    const sections = document.querySelectorAll(".recent-activities");
    const titles = document.querySelectorAll(".Recent-activities-title .Activity");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Remove .active from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Hide all sections and titles
            sections.forEach(section => section.classList.remove("active"));
            titles.forEach(title => title.classList.remove("active"));

            // Show the section and title corresponding to this button
            const targetId = button.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            if (targetSection) targetSection.classList.add("active");
            if (titles[index]) titles[index].classList.add("active");
        });
    });
});
