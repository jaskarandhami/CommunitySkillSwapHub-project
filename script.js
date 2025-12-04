/* ===========================================================
   PAGE NAVIGATION
=========================================================== */

const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav-links li, .primary-btn");

function navigate(pageID) {
    pages.forEach(p => {
        p.classList.add("hidden");
        p.classList.remove("active");
    });

    const page = document.getElementById(pageID);
    page.classList.remove("hidden");
    page.classList.add("active", "fade-in");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const pageID = link.dataset.page;
        if (pageID) navigate(pageID);
    });
});


/* ===========================================================
   RESOURCE SYSTEM
=========================================================== */

let resources = JSON.parse(localStorage.getItem("resources")) || [];

function saveResources() {
    localStorage.setItem("resources", JSON.stringify(resources));
}

function renderResources() {
    const list = document.getElementById("resourceList");
    list.innerHTML = "";

    let search = document.getElementById("searchBox").value.toLowerCase();
    let filter = document.getElementById("filterCategory").value;

    resources.forEach((res, index) => {
        if (
            (filter === "All" || res.category === filter) &&
            (res.title.toLowerCase().includes(search) ||
             res.description.toLowerCase().includes(search))
        ) {
            list.innerHTML += `
            <div class="resource-card glass fade-in">
                <h3>${res.title}</h3>
                <p>${res.description}</p>
                <a href="${res.link}" target="_blank" class="primary-btn" style="padding:8px 14px; margin-top:10px;">Open</a>

                <p style="margin-top:15px;"><strong>Category:</strong> ${res.category}</p>

                <div class="rating">
                    ${renderStars(index)}
                </div>

                <button class="bookmark-btn primary-btn" style="margin-top:10px;" onclick="toggleBookmark(${index})">
                    ${res.bookmarked ? "★ Bookmarked" : "☆ Bookmark"}
                </button>

                <!-- COMMENT BOX -->
                <div class="comment-box">
                    <textarea class="comment-input" id="comment-${index}" placeholder="Write a comment..."></textarea>
                    <button class="comment-btn" onclick="addComment(${index})">Post Comment</button>
                </div>
            </div>`;
        }
    });

    saveResources();
}

document.getElementById("shareForm").addEventListener("submit", e => {
    e.preventDefault();

    let res = {
        title: document.getElementById("resourceTitle").value,
        description: document.getElementById("resourceDesc").value,
        link: document.getElementById("resourceLink").value,
        category: document.getElementById("resourceCategory").value,
        rating: 0,
        bookmarked: false
    };

    resources.push(res);
    saveResources();
    renderResources();
    alert("Resource added!");
});


/* ===========================================================
   SEARCH & FILTER
=========================================================== */

document.getElementById("searchBox").addEventListener("input", renderResources);
document.getElementById("filterCategory").addEventListener("change", renderResources);


/* ===========================================================
   AI TOOLS AUTO LOAD
=========================================================== */

const aiToolsData = [
    { name: "Canva AI", desc: "Design visuals with AI assistance", link: "https://canva.com" },
    { name: "ChatGPT", desc: "AI text & coding assistant", link: "https://chat.openai.com" },
    { name: "RemoveBG", desc: "Remove image backgrounds", link: "https://remove.bg" },
    { name: "Krita ML", desc: "AI features for digital art", link: "https://krita.org" }
];

function loadAITools() {
    let wrap = document.getElementById("aiTools");
    wrap.innerHTML = "";

    aiToolsData.forEach(tool => {
        wrap.innerHTML += `
        <div class="ai-card glass fade-in">
            <h3>${tool.name}</h3>
            <p>${tool.desc}</p>
            <a href="${tool.link}" target="_blank" class="primary-btn" style="padding:8px 14px;">Try Now</a>
        </div>`;
    });
}


/* ===========================================================
   RATING SYSTEM
=========================================================== */

function renderStars(index) {
    let rating = resources[index].rating;
    let html = "";

    for (let i = 1; i <= 5; i++) {
        html += `<span onclick="rateResource(${index}, ${i})" style="cursor:pointer; font-size:22px;">
            ${i <= rating ? "★" : "☆"}
        </span>`;
    }
    return html;
}

function rateResource(index, value) {
    resources[index].rating = value;
    saveResources();
    renderResources();
}


/* ===========================================================
   BOOKMARK SYSTEM
=========================================================== */

function toggleBookmark(index) {
    resources[index].bookmarked = !resources[index].bookmarked;
    saveResources();
    renderResources();
}


/* ===========================================================
   COMMENT SYSTEM (connected with comments.html)
=========================================================== */

let comments = JSON.parse(localStorage.getItem("comments")) || [];

function addComment(index) {
    let input = document.getElementById(`comment-${index}`);
    let text = input.value.trim();

    if (!text) {
        alert("Please write a comment");
        return;
    }

    comments.push({
        resourceIndex: index,
        text: text,
        time: Date.now()
    });

    localStorage.setItem("comments", JSON.stringify(comments));

    input.value = "";
    alert("Comment added!");
}


/* ===========================================================
   PROFILE SYSTEM
=========================================================== */

document.getElementById("saveProfile").addEventListener("click", () => {
    let name = document.getElementById("fullName").value;
    let bio = document.getElementById("bioText").value;
    let skills = document.getElementById("skills").value;
    let photoInput = document.getElementById("photoUpload");

    if (!name || !skills || !photoInput.files[0]) {
        alert("Please fill all required fields.");
        return;
    }

    let reader = new FileReader();
    reader.onload = function (e) {
        let data = {
            name,
            bio,
            skills,
            photo: e.target.result
        };

        localStorage.setItem("profileData", JSON.stringify(data));
        loadProfile();
    };

    reader.readAsDataURL(photoInput.files[0]);
});

function loadProfile() {
    let data = JSON.parse(localStorage.getItem("profileData"));
    if (!data) return;

    document.getElementById("profilePreview").innerHTML = `
        <img src="${data.photo}">
        <h2>${data.name}</h2>
        <p><strong>Skills:</strong> ${data.skills}</p>
        <p>${data.bio}</p>
    `;
}


/* ===========================================================
   CONTACT FORM
=========================================================== */

document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("contactEmail").value;
    let msg = document.getElementById("contactMsg").value;

    document.getElementById("contactResponse").innerHTML =
        `<p class="glass" style="padding:15px; margin-top:20px;">Thank you, ${email}. We received your message.</p>`;
});


/* ===========================================================
   INITIAL LOAD
=========================================================== */

renderResources();
loadAITools();
loadProfile();
