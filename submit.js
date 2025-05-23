document.getElementById("submissionForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let errors = "";

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const email = document.getElementById("email").value.trim();
    const tags = document.querySelectorAll('input[name="tags"]:checked');
    const ai = document.querySelector('input[name="ai"]:checked');
    const file = document.getElementById("fileUpload").files[0];

    if (!title || !description || !email) errors += "All fields must be filled.<br>";
    if (title.length > 50) errors += "Title too long (max 50 characters).<br>";
    if (description.length > 300) errors += "Description too long (max 300 characters).<br>";
    if (tags.length < 1 || tags.length > 3) errors += "Select 1 to 3 tags.<br>";
    if (!ai) errors += "Please choose if this is AI-generated.<br>";
    if (!file) {
        errors += "Please upload a file.<br>";
    } else {
        const types = ["image/png", "image/jpeg", "image/jpg", "image/gif", "image/webp"];
        if (!types.includes(file.type)) errors += "Invalid file format.<br>";
        if (file.size > 10 * 1024 * 1024) errors += "File too large (max 10MB).<br>";
    }

    const errorMsg = document.getElementById("errorMsg");
    if (errors) {
        errorMsg.innerHTML = errors;
    } else {
        errorMsg.innerHTML = "";
        alert("Submission successful!");
        this.reset();
        document.getElementById("preview").style.display = "none";
    }
});

// Preview uploaded image
document.getElementById("fileUpload").addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.getElementById("preview");
            img.src = e.target.result;
            img.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
}); 

const selectedTags = [];

document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
        const value = tag.getAttribute('data-tag');
        tag.classList.toggle('active');

        if (tag.classList.contains('active')) {
            if (selectedTags.length < 3) {
                selectedTags.push(value);
            } else {
                tag.classList.remove('active');
                alert("You can only select up to 3 tags.");
            }
        } else {
            const index = selectedTags.indexOf(value);
            if (index !== -1) selectedTags.splice(index, 1);
        }
    });
});

