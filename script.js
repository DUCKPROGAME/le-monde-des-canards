// ========== DARK MODE ==========
const toggleBtn = document.getElementById("darkModeToggle");
if (toggleBtn) {
    // Charger préférence
    if (localStorage.getItem("darkMode") === "on") {
        document.body.classList.add("dark");
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        localStorage.setItem("darkMode", isDark ? "on" : "off");
        toggleBtn.textContent = isDark ? "☀️ Mode clair" : "🌙 Mode sombre";
    });

    // Texte initial correct
    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️ Mode clair";
    } else {
        toggleBtn.textContent = "🌙 Mode sombre";
    }
}

// ========== GALERIE / LIGHTBOX ==========
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
const lightboxImg = document.createElement("img");
lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

document.addEventListener("click", (e) => {
    if (e.target.matches(".gallery img")) {
        lightboxImg.src = e.target.src;
        lightbox.style.display = "flex";
    }
});

// ========== QUIZ (quiz.html) ==========
function corrigerQuiz() {
    const form = document.getElementById("quizForm");
    if (!form) return;

    let score = 0;
    const total = 3;

    // Q1
    const q1 = form.elements["q1"];
    if (q1 && q1.value === "colvert") score++;

    // Q2
    const q2 = form.elements["q2"];
    if (q2 && q2.value === "painNon") score++;

    // Q3
    const q3 = form.elements["q3"];
    if (q3 && q3.value === "palmure") score++;

    const result = document.getElementById("quizResult");
    if (result) {
        result.textContent = `Tu as ${score} / ${total} bonnes réponses !`;
        if (score === total) {
            result.textContent += " 🦆 Parfait, tu es un super expert des canards !";
        } else if (score === 0) {
            result.textContent += " Ce n'est pas grave, tu peux réessayer !";
        }
    }
}

// Rendre disponible globalement
window.corrigerQuiz = corrigerQuiz;
