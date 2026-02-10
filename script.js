// Attendre que le document soit chargé
document.addEventListener('DOMContentLoaded', () => {
    
    // Sélectionner les éléments
    const bouton = document.getElementById('monBouton');
    const paragraphe = document.getElementById('message');

    // Ajouter l'écouteur d'événement
    bouton.addEventListener('click', () => {
        paragraphe.textContent = "Bravo ! Le JavaScript fonctionne parfaitement 🚀";
        console.log("Interaction détectée !");
    });
});