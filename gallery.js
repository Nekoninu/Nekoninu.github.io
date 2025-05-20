document.addEventListener("DOMContentLoaded", () => {
    const tags = document.querySelectorAll(".toggle-tag");
    const groups = document.querySelectorAll(".gallery-group");
    const placeholder = document.querySelector(".gallery-placeholder");

    tags.forEach(tag => {
        tag.addEventListener("click", () => {
            tags.forEach(t => t.classList.remove("active"));
            tag.classList.add("active");

            const selectedTag = tag.getAttribute("data-tag");
            let matchFound = false;

            groups.forEach(group => {
                if (group.getAttribute("data-tag") === selectedTag) {
                    group.style.display = "flex";
                    matchFound = true;
                } else {
                    group.style.display = "none";
                }
            });

            placeholder.style.display = matchFound ? "none" : "block";
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".modal-overlay");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalArtist = document.getElementById("modal-artist");
    const modalDate = document.getElementById("modal-date");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".clickable-image").forEach(img => {
        img.addEventListener("click", () => {
            modalImage.src = img.src;
            modalTitle.textContent = img.dataset.title;
            modalArtist.textContent = img.dataset.artist;
            modalDate.textContent = img.dataset.date;
            modalDescription.textContent = img.dataset.description;
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".gallery-item");

    items.forEach(item => {
        const img = item.querySelector("img");
        const overlayTitle = item.querySelector(".image-overlay h4");
        const overlayArtist = item.querySelector(".image-overlay .artist");

        // Inject the actual data from the image's dataset
        overlayTitle.textContent = `“${img.dataset.title}”`;
        overlayArtist.textContent = img.dataset.artist;
    });
});

