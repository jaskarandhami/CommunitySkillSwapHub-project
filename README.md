# CommunitySkillSwapHub-project
A front-end skill sharing &amp; AI tools web app.
# SkillSwap Hub
### COM4113 – Tech Stack Assignment  
Leeds Trinity University

## 1. Overview
SkillSwap Hub is a front-end web application designed to allow users to share learning resources, explore community tutorials, manage personal profiles, and interact through ratings, bookmarks, comments, and AI-based tools.

The system demonstrates:
- Front-end development using HTML, CSS, and JavaScript  
- LocalStorage-based data storage  
- CRUD-style interactions within a client-only environment  
- Responsive UI/UX design  
- Planning and documentation skills including sitemap, timeline, and technical report  

This prototype fulfills the module requirements for demonstrating a complete, fully working front-end web application.

---

## 2. Project Structure

SkillSwapHub/
│── index.html
│── login.html
│── signup.html
│── comments.html
│── styles.css
│── script.js
│── README.md
│── Sitemap.png
│── stylish_Sitemap.png
│── Timeline.png
│── Full report.pdf
│── screenshots/

markdown
Copy code

---

## 3. Features

### 3.1 Core Features (MVP)
- User Registration (LocalStorage)
- User Login / Authentication
- Profile creation (with Base64 image upload)
- Resource posting (title, description, category, link)
- Explore page with:
  - Live search
  - Category filtering
- Bookmarking system
- Rating system (1–5 stars)
- Comment system (stored with timestamps)
- AI Tools page populated from JavaScript array
- Fully responsive design (mobile + desktop)

### 3.2 Additional Enhancements
- Glassmorphism visual design  
- Animated gradient background  
- Smooth page transitions  
- Modular JavaScript functionality  
- Professional diagrams (sitemap + timeline)  
- Clean and accessible UI  

---

## 4. Technology Stack

### Front-End
- HTML5  
- CSS3  
- JavaScript (ES6)

### Data Storage: LocalStorage  
Used for:  
- `userAccount`  
- `profileData`  
- `resources`  
- `comments`  
- `bookmarks`  
- `ratings`

### Tools
- Visual Studio Code  
- Live Server  
- Browser DevTools  
- FileReader API (Profile photos)

---

## 5. System Functionality

### 5.1 Authentication Data Structure
userAccount = { name, email, password, skills }

shell
Copy code

### 5.2 Profile Data Structure
profileData = { name, skills, bio, photo(Base64) }

shell
Copy code

### 5.3 Resource Object Structure
{
title: "",
description: "",
category: "",
link: "",
rating: 0,
bookmarked: false
}

shell
Copy code

### 5.4 Comments Structure
{
resourceIndex: number,
text: string,
time: timestamp
}

yaml
Copy code

### 5.5 AI Tools
Loaded from a JavaScript array and displayed in the "AI Tools" section.

---

## 6. Real-World Application Example

SkillSwap Hub can be used as a **Community Learning Platform** for institutions, organisations, or student communities.  
For example, a university could deploy a system like this to allow students to:

- Share educational resources  
- Collaborate on learning goals  
- Discover AI-enhanced learning tools  
- Comment, rate, and recommend resources  
- Build skill-based community groups  

Real-world platforms that use similar concepts include:
- Skillshare (community learning)
- Coursera discussion boards
- GitHub Discussions
- Reddit educational communities  

SkillSwap Hub represents a lightweight, front-end prototype demonstrating how such systems can be implemented and scaled.

---

## 7. Sitemap
Visual sitemap included in the project directory:

Sitemap.png
stylish_Sitemap.png

yaml
Copy code

---

## 8. Development Timeline
A full development timeline is included:

Timeline.png

yaml
Copy code

### Summary Table

| Week | Work Completed |
|------|----------------|
| Week 1 | Research, requirements analysis |
| Week 2 | Planning, wireframes, tech stack selection |
| Week 3 | HTML structure and content layout |
| Week 4 | CSS styling, visual design, responsiveness |
| Week 5 | JavaScript functions (search, ratings, comments, bookmarks) |
| Week 6 | Testing, refinement, documentation, final preparation |

---

## 9. Installation & Usage

### Step 1: Clone the repository


### Step 2: Run the project
Open:
index.html

use VS Code Live Server.

### No dependencies required  
This project is entirely front-end and runs in any modern browser.

---

## 10. Legal & Ethical Considerations
- No sensitive personal data stored  
- LocalStorage used only for prototype purposes  
- Users must upload copyright-safe materials  
- Accessibility considered through UI structure  
- AI usage declared transparently  

---

## 11. Future Improvements
- Backend system (Node.js, Express, MongoDB)  
- JWT authentication  
- Cloud image hosting  
- Real-time comments  
- Pagination for large resource sets  
- User dashboard with analytics  
- AI-based recommendation engine  

---

## 12. AI Usage Statement
Generative AI tools were used only for documentation clarity and refinement.  
All coding and implementation were completed manually by the student.

---

## 13. References
Full APA references are included in:

Full report.pdf

yaml
Copy code

---

# End of README  
SkillSwap Hub – COM4113 Tech Stack Assignment
