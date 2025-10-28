// Tema Dia/Noite - Script compartilhado
(function() {
  const NUMBER_OF_STARS = 100;
  
  function setThemeByTime() {
    const currentHour = new Date().getHours();
    const isDayTime = currentHour >= 6 && currentHour < 18; // Das 06:00 às 17:59 é dia
    
    if (isDayTime) {
      document.body.classList.add('day-theme');
    } else {
      document.body.classList.remove('day-theme');
      // Criar estrelas apenas à noite
      createStars();
    }
  }
  
  function createStars() {
    // Evita criar estrelas duplicadas
    if (document.querySelectorAll('.star').length > 0) return;
    
    for (let i = 0; i < NUMBER_OF_STARS; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      document.body.appendChild(star);
    }
  }
  
  // Aplicar tema ao carregar a página
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setThemeByTime);
  } else {
    setThemeByTime();
  }
})();
