// Rain animation effect
(function() {
  const rainContainer = document.querySelector('.rain-container');
  
  // Create rain drops
  function createRainDrop() {
    const drop = document.createElement('div');
    drop.className = 'rain-drop';
    drop.style.left = Math.random() * 100 + '%';
    drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
    drop.style.animationDelay = Math.random() * 2 + 's';
    drop.style.opacity = Math.random() * 0.5 + 0.3;
    
    rainContainer.appendChild(drop);
    
    // Remove drop after animation completes
    setTimeout(() => {
      drop.remove();
    }, (parseFloat(drop.style.animationDuration) + parseFloat(drop.style.animationDelay)) * 1000);
  }
  
  // Create initial batch of rain drops
  for (let i = 0; i < 50; i++) {
    setTimeout(() => createRainDrop(), i * 100);
  }
  
  // Continue creating rain drops
  setInterval(createRainDrop, 200);
  
  // Subtle parallax effect for content
  let lastScrollY = 0;
  let ticking = false;
  
  function handleScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const content = document.querySelector('.content');
        
        if (content) {
          // Very subtle parallax
          const translateY = scrollY * 0.1;
          content.style.transform = `translateY(${translateY}px)`;
        }
        
        lastScrollY = scrollY;
        ticking = false;
      });
      
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  
})();
