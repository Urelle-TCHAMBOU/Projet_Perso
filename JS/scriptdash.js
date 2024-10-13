// Simuler des données
const projects = [
    { title: "Installation Climatisation", status: "En cours" },
    { title: "Réparation Électrique", status: "Terminé" },
];

const freelancers = [
    { name: "Jean Dupont", skills: "Électricien", available: true },
    { name: "Marie Curie", skills: "Technicien Froid", available: true },
];

// Mettre à jour le tableau de bord
function updateDashboard() {
    document.getElementById('activeProjects').innerText = projects.length;
    document.getElementById('freelancerCount').innerText = freelancers.length;
    document.getElementById('unreadMessages').innerText = Math.floor(Math.random() * 10);

    // Afficher les projets récents
    const projectList = document.getElementById('projectList');
    projects.forEach(project => {
        const li = document.createElement('li');
        li.innerText = '${project.title} - ${project.status}';
        projectList.appendChild(li);
    });

    // Afficher les freelances récents
    const freelancerList = document.getElementById('freelancerList');
    freelancers.forEach(freelancer => {
        const li = document.createElement('li');
        li.innerText = '${freelancer.name} - ${freelancer.skills}';
        freelancerList.appendChild(li);
    });
}

// Initialiser le tableau de bord
window.onload = updateDashboard;
