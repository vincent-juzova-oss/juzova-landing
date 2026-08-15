const openThomas = document.getElementById("openThomas");
const thomasPanel = document.getElementById("thomas-panel");
const closeThomas = document.querySelector("[data-close-thomas]");
const openThomasButtons = document.querySelectorAll("[data-open-thomas]");
const panelBackdrop = document.getElementById("panel-backdrop");

function openPanel() {
  thomasPanel.classList.add("open");
  thomasPanel.setAttribute("aria-hidden", "false");
  panelBackdrop.classList.add("open");
}

function closePanel() {
  thomasPanel.classList.remove("open");
  thomasPanel.setAttribute("aria-hidden", "true");
  panelBackdrop.classList.remove("open");
}

if (openThomas) {
  openThomas.addEventListener("click", openPanel);
}

openThomasButtons.forEach((button) => {
  button.addEventListener("click", openPanel);
});

if (closeThomas) {
  closeThomas.addEventListener("click", closePanel);
}

if (panelBackdrop) {
  panelBackdrop.addEventListener("click", closePanel);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePanel();
  }
});
const questionFonctionnement = document.getElementById("question-fonctionnement");
const quickAnswer = document.getElementById("quick-answer");
const quickAnswerTitle = document.getElementById("quick-answer-title");
const quickAnswerText = document.getElementById("quick-answer-text");
const backToQuestions = document.getElementById("back-to-questions");
const quickQuestions = document.querySelectorAll(".quick-question");

if (
  questionFonctionnement &&
  quickAnswer &&
  quickAnswerTitle &&
  quickAnswerText
) {
  questionFonctionnement.addEventListener("click", () => {
    thomasPanel.classList.remove("open");
thomasPanel.setAttribute("aria-hidden", "true");
panelBackdrop.classList.remove("open");
    quickQuestions.forEach((button) => {
      button.style.display = "none";
    });

    quickAnswerTitle.textContent = "Comment fonctionne JUZOVA ?";

    quickAnswerText.textContent =
      "JUZOVA vous permet de découvrir une nouvelle façon de voyager, avec l’accompagnement de Thomas pour vous informer, répondre à vos questions et vous guider selon vos besoins.";

    quickAnswer.hidden = false;
  });
}

if (backToQuestions && quickAnswer) {
  backToQuestions.addEventListener("click", () => {
    thomasPanel.classList.add("open");
thomasPanel.setAttribute("aria-hidden", "false");
panelBackdrop.classList.add("open");
    quickAnswer.hidden = true;

    quickQuestions.forEach((button) => {
      button.style.display = "";
    });
  });
}
const agentovaChat = document.getElementById("agentova-chat");

if (agentovaChat) {
  openThomasButtons.forEach((button) => {
    button.addEventListener("click", () => {
      agentovaChat.style.display = "block";
    });
  });
}
const openAgentova = document.getElementById("open-agentova");


if (openAgentova && agentovaChat) {
  openAgentova.addEventListener("click", () => {
    agentovaChat.style.display = "block";
    grossisteTrigger.style.display = "inline-block";
  });
}
const closeAgentovaChat = document.getElementById("close-agentova-chat");

if (closeAgentovaChat && agentovaChat) {
  closeAgentovaChat.addEventListener("click", () => {
    agentovaChat.style.display = "none";
  });
}
const openAgentovaQuestion = document.getElementById("open-agentova-question");

if (openAgentovaQuestion && agentovaChat) {
  openAgentovaQuestion.addEventListener("click", () => {
    agentovaChat.style.display = "block";
  });
}

// =========================================
// SUPPORTS VISUELS DE THOMAS
// =========================================

const thomasVisual = document.getElementById("thomas-visual");
const thomasVisualImage = document.getElementById("thomas-visual-image");
const closeThomasVisual = document.getElementById("close-thomas-visual");

function showThomasVisual(imagePath) {
    if (!thomasVisual || !thomasVisualImage) return;

    thomasVisualImage.src = imagePath;
    thomasVisual.style.display = "block";
}

function hideThomasVisual() {
    if (!thomasVisual || !thomasVisualImage) return;

    thomasVisual.style.display = "none";
    thomasVisualImage.src = "";
}

if (closeThomasVisual) {
    closeThomasVisual.addEventListener("click", hideThomasVisual);
}
const thomasSlides = {
    voyage_plateforme: "voyage_plateforme.PNG",
    voyage_grossiste: "voyage_grossiste.PNG",
    voyage_avantages: "voyage_avantages.PNG",
    voyage_ia: "voyage_intelligence_artificielle.PNG",
    voyage_life_experience: "voyage_life_experience.PNG",
    revenu_pour_qui: "revenu_pour_qui.PNG",
revenu_recommandation: "revenu_recommandation.PNG",
parcours_objectif: "parcours_objectif.PNG",
revenu_pourquoi: "revenu_pourquoi.PNG",
revenu_autofinancement: "revenu_autofinancement.PNG",
revenu_bonus_voiture: "revenu_bonus_voiture.PNG",
revenu_progression: "revenu_progression.PNG",
revenu_3_personnes: "revenu_exemple_3_personnes.PNG",
revenu_demarrer: "revenu_comment_demarrer.PNG",
revenu_comparaison: "revenu_comparaison_activite.PNG",
tr_ad_1: "voyage_mwr_life.PNG",
voyage_presentation: "voyage_presentation.PNG",
voyage_partenaires: "voyage_partenaires.PNG",
voyage_exemple_1: "voyage_exemple_1.PNG",
voyage_exemple_2: "voyage_exemple_2.PNG",
voyage_exemple_3: "voyage_exemple_3.PNG",
revenu_bonus_demarrage: "revenu_bonus_demarrage.PNG",
};
const voyageSlideOrder = [
    thomasSlides.parcours_objectif,
    thomasSlides.tr_ad_1,
    thomasSlides.revenu_comparaison,
    thomasSlides.voyage_presentation,
    thomasSlides.voyage_plateforme,
    thomasSlides.voyage_partenaires,
    thomasSlides.voyage_grossiste,
    thomasSlides.voyage_ia,
    thomasSlides.voyage_life_experience,
    thomasSlides.voyage_exemple_1,
    thomasSlides.voyage_exemple_2,
    thomasSlides.voyage_exemple_3 

];
const revenuSlideOrder = [
    thomasSlides.revenu_comparaison,
    thomasSlides.revenu_pourquoi,
    thomasSlides.revenu_3_personnes,
    thomasSlides.revenu_bonus_demarrage,
    thomasSlides.revenu_autofinancement,
    thomasSlides.revenu_progression,
    thomasSlides.revenu_bonus_voiture,
    thomasSlides.revenu_pour_qui,
    thomasSlides.revenu_demarrer
];
let currentVoyageSlideIndex = 0;
const thomasVisualPrev = document.getElementById("thomas-visual-prev");
const thomasVisualNext = document.getElementById("thomas-visual-next");
const thomasVisualCounter = document.getElementById("thomas-visual-counter");
const thomasVisualDots = document.querySelectorAll("#thomas-visual-dots .dot");
thomasVisualDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentVoyageSlideIndex = index;
        updateVoyageSlide();
    });
});
let activeSlideOrder = voyageSlideOrder;
function setActiveSlideOrder(slideOrder) {
    activeSlideOrder = slideOrder;
    currentVoyageSlideIndex = 0;
    thomasVisualDots.forEach((dot, index) => {
    dot.style.display = index < slideOrder.length ? "" : "none";
});
    updateVoyageSlide();
}

const slidesVoyageButton = document.getElementById("slides-voyage");

if (slidesVoyageButton) {
    slidesVoyageButton.addEventListener("click", () => {
        setActiveSlideOrder(voyageSlideOrder);
    });
}
const slidesRevenusButton = document.getElementById("slides-revenus");

if (slidesRevenusButton) {
    slidesRevenusButton.addEventListener("click", () => {
        setActiveSlideOrder(revenuSlideOrder);
    });
}
function updateVoyageSlide() {
    const currentSlide = activeSlideOrder[currentVoyageSlideIndex];

    if (thomasVisualImage) {
        thomasVisualImage.src = currentSlide;
    }

    if (thomasVisualCounter) {
        thomasVisualCounter.textContent =
            `${currentVoyageSlideIndex + 1} / ${activeSlideOrder.length}`;
    }

    thomasVisualDots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentVoyageSlideIndex);
    });
}

if (thomasVisualNext) {
    thomasVisualNext.addEventListener("click", () => {
        currentVoyageSlideIndex++;

        if (currentVoyageSlideIndex >= activeSlideOrder.length) {
    currentVoyageSlideIndex = activeSlideOrder.length - 1;
}

        updateVoyageSlide();
    });
}

if (thomasVisualPrev) {
    thomasVisualPrev.addEventListener("click", () => {
        currentVoyageSlideIndex--;

        if (currentVoyageSlideIndex < 0) {
            currentVoyageSlideIndex = 0;
        }

        updateVoyageSlide();
    });
}
const thomasSlideLabels = {
    voyage_plateforme: "👁 Voir la plateforme",
    voyage_grossiste: "👁 Pourquoi les tarifs diffèrent ?",
    voyage_avantages: "👁 Voir les avantages",
    voyage_ia: "👁 Découvrir l'IA voyage",
    voyage_life_experience: "👁 Voir les Life Experiences",
    revenu_pour_qui: "👁 À qui cela peut-il correspondre ?",
revenu_recommandation: "👁 Voir le principe de recommandation",
parcours_objectif: "👁 Quel est votre objectif ?",
revenu_pourquoi: "👁 Identifier votre pourquoi",
revenu_autofinancement: "👁 Voir le principe d'autofinancement",
revenu_bonus_voiture: "👁 Découvrir le bonus voiture",
revenu_progression: "👁 Voir un exemple de progression",
revenu_3_personnes: "👁 Voir l'exemple avec 3 personnes",
revenu_demarrer: "👁 Comment démarrer ?",
revenu_comparaison: "👁 Comparer avec une activité classique"
};
function setThomasVisual(imagePath, buttonText) {
  


    currentThomasVisual = imagePath;

    if (showGrossisteButton) {
        showGrossisteButton.textContent = buttonText;
      
    }
}
let currentThomasVisual = "voyage_grossiste.PNG";

const showGrossisteButton = document.getElementById("show-grossiste");

if (showGrossisteButton) {
    showGrossisteButton.addEventListener("click", () => {
        showThomasVisual(currentThomasVisual);
    });
}

const grossisteTrigger = document.getElementById("show-grossiste");

if (grossisteTrigger) {
    grossisteTrigger.style.display = "none";
}
// ========================================
// PLAN DE RÉMUNÉRATION — OUVERTURE / FERMETURE
// ========================================

const openRemuneration = document.getElementById("open-remuneration");
const closeRemuneration = document.getElementById("close-remuneration");
const remunerationModal = document.getElementById("remuneration-modal");

if (openRemuneration && closeRemuneration && remunerationModal) {

    openRemuneration.addEventListener("click", function (event) {
        event.preventDefault();
        remunerationModal.classList.add("active");
    });

    closeRemuneration.addEventListener("click", function () {
        remunerationModal.classList.remove("active");
    });

    remunerationModal.addEventListener("click", function (event) {
        if (event.target === remunerationModal) {
            remunerationModal.classList.remove("active");
        }
    });
}
// =========================
// OUVERTURE FENÊTRE VIDÉOS
// =========================

const videosButton = document.getElementById("open-videos");
const videosModal = document.getElementById("videos-modal");
const closeVideos = document.getElementById("close-videos");

if (videosButton && videosModal && closeVideos) {

    videosButton.addEventListener("click", function(e) {
        e.preventDefault();
        videosModal.style.display = "flex";
    });

   closeVideos.addEventListener("click", function() {
    videosModal.style.display = "none";

    const video = document.querySelector(".videos-content video");
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
});

    videosModal.addEventListener("click", function(e) {
    if (e.target === videosModal) {
    videosModal.style.display = "none";

    const video = document.querySelector(".videos-content video");
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
}
    });

}
// =========================
// CHOIX D'UNE VIDÉO
// =========================

const videoCards = document.querySelectorAll(".video-card-choice");
const videosContent = document.querySelector(".videos-content");
const videoCardsContainer = document.querySelector(".video-cards");

videoCards.forEach(card => {

    card.addEventListener("click", function() {

        const videoFile = this.dataset.video;
const youtubeId = this.dataset.youtube;

videoCardsContainer.style.display = "none";

if (youtubeId) {

    videosContent.insertAdjacentHTML("beforeend", `
        <div id="video-player">
            <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/${youtubeId}?autoplay=1"
                title="Vidéo YouTube"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>

            <button id="back-videos" class="back-videos">
                ← Retour aux vidéos
            </button>
        </div>
    `);

} else {

    videosContent.insertAdjacentHTML("beforeend", `
        <div id="video-player">
            <video controls width="100%" autoplay>
                <source src="${videoFile}" type="video/mp4">
                Votre navigateur ne supporte pas la vidéo.
            </video>

            <button id="back-videos" class="back-videos">
                ← Retour aux vidéos
            </button>
        </div>
    `);
}

        document.getElementById("back-videos").addEventListener("click", function() {

            const player = document.getElementById("video-player");
            const video = player.querySelector("video");

            if (video) {
                video.pause();
                video.currentTime = 0;
            }

            player.remove();
            videoCardsContainer.style.display = "grid";
        });

    });

});


// =========================
// OUVERTURE FENÊTRE INSPIRATIONS
// =========================

const inspirationsButton = document.getElementById("open-inspirations");
const inspirationsModal = document.getElementById("inspirations-modal");
const closeInspirations = document.getElementById("close-inspirations");

if (inspirationsButton && inspirationsModal && closeInspirations) {

    inspirationsButton.addEventListener("click", function(e) {
        e.preventDefault();
        inspirationsModal.style.display = "flex";
    });

    closeInspirations.addEventListener("click", function() {
        inspirationsModal.style.display = "none";
    });

    inspirationsModal.addEventListener("click", function(e) {
        if (e.target === inspirationsModal) {
            inspirationsModal.style.display = "none";
        }
    });
}