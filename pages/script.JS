// Fonction pour charger un fichier HTML et l'insérer dans un élément
function loadHTML(selector, filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.querySelector(selector).innerHTML = data;
      })
      .catch(err => console.error('Erreur lors du chargement du fichier :', err));
  }
  
  // Charger le header et le footer
  loadHTML('#hearder', '../assets/hearder.html');
  loadHTML('#footer', '../assets/footer.html');
  