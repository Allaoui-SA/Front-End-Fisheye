// Fonction pour trier les éléments de la galerie

document.addEventListener("DOMContentLoaded", function () {
    // Code ici s'exécutera après le chargement complet de la page

    // Ajoutez l'événement de tri après le chargement de la page
    const sortingForm = document.querySelector(".sorting");
    const sortSelect = document.getElementById("sort-select");

    sortingForm.addEventListener("change", (event) => {
        document.querySelector(".content-gallery").innerHTML = ""
        const sortBy = sortSelect.value;
        const content = new Content()
        content.gallery(sortBy)

    });

    // Autres opérations d'initialisation, si nécessaire
});
