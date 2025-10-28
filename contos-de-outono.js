// Autumn leaves animation and easter egg
(function() {
  const leavesContainer = document.querySelector('.leaves-container');
  const easterEgg = document.getElementById('easter-egg');
  
  // Leaf emojis to use
  const leafEmojis = ['🍂', '🍁', '🍃'];
  
  // Create falling leaves
  function createLeaf() {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.textContent = leafEmojis[Math.floor(Math.random() * leafEmojis.length)];
    leaf.style.left = Math.random() * 100 + '%';
    leaf.style.fontSize = (Math.random() * 20 + 15) + 'px';
    leaf.style.animationDuration = (Math.random() * 10 + 8) + 's';
    leaf.style.animationDelay = Math.random() * 5 + 's';
    
    leavesContainer.appendChild(leaf);
    
    // Remove leaf after animation completes
    setTimeout(() => {
      leaf.remove();
    }, (parseFloat(leaf.style.animationDuration) + parseFloat(leaf.style.animationDelay)) * 1000);
  }
  
  // Create initial batch of leaves
  for (let i = 0; i < 15; i++) {
    setTimeout(createLeaf, i * 300);
  }
  
  // Continue creating leaves periodically
  setInterval(createLeaf, 2000);
  
  // Rising leaves effect (straw-like particles)
  function createRisingLeaf() {
    const leaf = document.createElement('div');
    leaf.className = 'leaf rising';
    leaf.textContent = leafEmojis[Math.floor(Math.random() * leafEmojis.length)];
    leaf.style.left = Math.random() * 100 + '%';
    leaf.style.fontSize = (Math.random() * 15 + 10) + 'px';
    leaf.style.bottom = '-50px';
    leaf.style.opacity = '0.6';
    
    leavesContainer.appendChild(leaf);
    
    // Animate rising
    const duration = Math.random() * 8 + 6;
    leaf.style.animation = `rise ${duration}s linear`;
    
    setTimeout(() => {
      leaf.remove();
    }, duration * 1000);
  }
  
  // Add rising animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rise {
      0% {
        bottom: -50px;
        opacity: 0.6;
        transform: translateX(0) rotate(0deg);
      }
      100% {
        bottom: 110vh;
        opacity: 0;
        transform: translateX(-30px) rotate(-180deg);
      }
    }
  `;
  document.head.appendChild(style);
  
  // Create rising leaves periodically
  setInterval(createRisingLeaf, 3000);
  
  // Easter egg trigger
  let easterEggShown = false;
  
  window.addEventListener('scroll', () => {
    // Check if user has scrolled to the bottom
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollPosition >= documentHeight - 100 && !easterEggShown) {
      easterEggShown = true;
      easterEgg.classList.add('show');
      
      // Create celebration effect
      for (let i = 0; i < 30; i++) {
        setTimeout(() => {
          const celebrationLeaf = document.createElement('div');
          celebrationLeaf.className = 'leaf';
          celebrationLeaf.textContent = leafEmojis[Math.floor(Math.random() * leafEmojis.length)];
          celebrationLeaf.style.left = Math.random() * 100 + '%';
          celebrationLeaf.style.fontSize = (Math.random() * 25 + 20) + 'px';
          celebrationLeaf.style.animationDuration = (Math.random() * 3 + 2) + 's';
          celebrationLeaf.style.top = '0';
          leavesContainer.appendChild(celebrationLeaf);
          
          setTimeout(() => celebrationLeaf.remove(), 5000);
        }, i * 100);
      }
      
      // Hide easter egg after 8 seconds
      setTimeout(() => {
        easterEgg.classList.remove('show');
      }, 8000);
    }
  });
  
  // Add parallax effect to chapters
  const chapters = document.querySelectorAll('.chapter');
  
  window.addEventListener('scroll', () => {
    chapters.forEach((chapter, index) => {
      const rect = chapter.getBoundingClientRect();
      const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
      
      if (scrollPercent > 0 && scrollPercent < 1) {
        const translateY = (scrollPercent - 0.5) * 20;
        chapter.style.transform = `translateY(${translateY}px)`;
      }
    });
  });
  
})();
