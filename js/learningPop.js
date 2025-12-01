document.addEventListener("DOMContentLoaded", function () {

    // Learning Button
    const learningBtn = document.getElementById("learningBtn");
    const popupModal = document.getElementById("popupModal");
    const backArrow = document.querySelector(".back-arrow");

    // Open modal
    if (learningBtn) {
        learningBtn.addEventListener("click", function () {
            popupModal.style.display = "flex";
        });
    }

    // Close modal
    if (backArrow) {
        backArrow.addEventListener("click", function () {
            popupModal.style.display = "none";
        });
    }

});

// Switching between tabs
document.addEventListener("DOMContentLoaded", function () {
   
    const myInfoBtn = document.getElementById("myInfoBtn");
    const aiResourcesBtn = document.getElementById("aiResourcesBtn");

    // Navigate to the corresponding HTML pages on click
    if (myInfoBtn) {
        myInfoBtn.addEventListener("click", function () {
            window.location.href = "myInformationDashboard.html"; 
        });
    }

    if (aiResourcesBtn) {
        aiResourcesBtn.addEventListener("click", function () {
            window.location.href = "aiResourcesDashboard.html";  
        });
    }
});