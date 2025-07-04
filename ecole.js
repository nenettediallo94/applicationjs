function showSection(id) {
  const sections = document.querySelectorAll('.content-section');
  
  sections.forEach(section => {
    if (section.id === id) {
      section.style.display = 'block';

      // Animation d'entrée
      section.animate([
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], {
        duration: 400,
        fill: 'forwards'
      });
    } else {
      section.style.display = 'none';
    }
  });

  // Mise à jour du titre principal
  const selectedNav = document.querySelector(`nav li[onclick*='${id}']`);
  if (selectedNav) {
    document.getElementById("titre").textContent = selectedNav.textContent;
  }
}
