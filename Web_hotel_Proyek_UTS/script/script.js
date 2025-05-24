

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 992) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});

// Dropdown toggle for mobile
dropdowns.forEach(dropdown => {
  const link = dropdown.querySelector('a');
  
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      dropdown.classList.toggle('active');
      
      // Close other dropdowns
      dropdowns.forEach(otherDropdown => {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove('active');
        }
      });
    }
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 992) {
    if (!e.target.closest('.dropdown') && !e.target.closest('.hamburger')) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const clickableItems = document.querySelectorAll('.clickable');
    const detailImg = document.getElementById('detail-img');
    const detailTitle = document.getElementById('detail-title');
    const detailDesc = document.getElementById('detail-desc');
  
    clickableItems.forEach(item => {
      item.addEventListener('click', () => {
        const name = item.getAttribute('data-name');
        const desc = item.getAttribute('data-desc');
        const imgSrc = item.getAttribute('data-img');
  
        detailTitle.textContent = name;
        detailDesc.textContent = desc;
        detailImg.src = imgSrc;
      });
    });
  });
  

    // JavaScript untuk hamburger menu
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                
                // Animasi hamburger menjadi X
                hamburger.classList.toggle('open');
            });
            
            // Tutup menu saat mengklik link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('open');
                });
            });
            
            // Efek smooth scroll untuk semua link
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if(targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if(targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Efek scroll untuk header
            window.addEventListener('scroll', function() {
                const header = document.querySelector('.main-header');
                if(window.scrollY > 50) {
                    header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                    header.style.background = 'linear-gradient(135deg, rgba(187, 190, 2, 0.95) 0%, rgba(93, 95, 1, 0.95) 100%)';
                } else {
                    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                    header.style.background = 'linear-gradient(135deg, rgb(187, 190, 2) 0%, rgb(93, 95, 1) 100%)';
                }
            });
        });



  
  