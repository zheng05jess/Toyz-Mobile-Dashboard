// AI info button
document.addEventListener("DOMContentLoaded", function () {
    const aiInfoBtn = document.querySelector("#dashboardOptionButtons img[alt='AI Information Button Icon']");
    const aiModal = document.getElementById("aiInfoModal");
    const aiBack = document.querySelector(".ai-back-arrow");

    // Open modal
    if (aiInfoBtn) {
        aiInfoBtn.addEventListener("click", function () {
            aiModal.style.display = "flex";
        });
    }

    // Close modal
    if (aiBack) {
        aiBack.addEventListener("click", function () {
            aiModal.style.display = "none";
        });
    }
});

//steam points info button
document.addEventListener("DOMContentLoaded", function () {
    const steamInfoBtn = document.querySelector("#steamPointsHeader img.icon-points");
    const steamModal = document.getElementById("steamInfoModal");
    const steamBack = document.querySelector(".steam-back-arrow");

    // Open modal
    if (steamInfoBtn) {
        steamInfoBtn.addEventListener("click", function () {
            steamModal.style.display = "flex";
        });
    }

    // Close modal
    if (steamBack) {
        steamBack.addEventListener("click", function () {
            steamModal.style.display = "none";
        });
    }
});