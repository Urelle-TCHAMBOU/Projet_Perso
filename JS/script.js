function maFunction() 
{
    // event.preventDefault(); // Empêche le rechargement de la page

    // Simuler l'inscription (dans une vraie application, vous enverriez les données à un serveur)
    console.log('urelle')
    alert("Inscription réussie !");

    
    // Simuler la connexion
    isLoggedIn = true; // Changez l'état de connexion
    window.location.href = 'index.html'; // Rediriger vers la page d'accueil
}

// signup.js
document.getElementById('urelle').addEventListener('onsubmit', maFunction);
console.log(document.getElementById('requestServiceBtn')); // Devrait afficher l'élément ou null
document.getElementById('requestServiceBtn').addEventListener('click', function() 
{
    if (!isLoggedIn) {
        // Rediriger vers la page d'inscription
        alert("Vous devez vous inscrire pour demander un service.");
        window.location.href = 'inscription.html'; // Page d'inscription
    } else {
        // Code pour demander un service
        alert("Demande de service en cours...");
    }
});
