// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing...');
    
    // Tab Switching Functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    console.log('Found ' + tabButtons.length + ' tab buttons');
    console.log('Found ' + tabPanes.length + ' tab panes');
    
    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            console.log('Clicked tab: ' + targetTab);
            
            // Remove active class from all buttons
            tabButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            // Remove active class from all panes
            tabPanes.forEach(function(pane) {
                pane.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Add active class to corresponding pane
            const targetPane = document.getElementById(targetTab);
            if (targetPane) {
                targetPane.classList.add('active');
                console.log('Activated tab: ' + targetTab);
            } else {
                console.error('Tab pane not found: ' + targetTab);
            }
        });
    });
    
    // Keyboard Navigation for Tabs
    document.addEventListener('keydown', function(e) {
        const activeTabBtn = document.querySelector('.tab-btn.active');
        if (!activeTabBtn) return;
        
        const allTabButtons = Array.from(tabButtons);
        const currentIndex = allTabButtons.indexOf(activeTabBtn);
        
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % allTabButtons.length;
            allTabButtons[nextIndex].click();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevIndex = (currentIndex - 1 + allTabButtons.length) % allTabButtons.length;
            allTabButtons[prevIndex].click();
        }
    });
    
    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section').forEach(function(section) {
        observer.observe(section);
    });
    
    // Skill Tags Animation
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(function(tag) {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Achievement Animations
    const achievementObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                setTimeout(function() {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.achievement').forEach(function(achievement) {
        achievement.style.opacity = '0';
        achievement.style.transform = 'translateX(-20px)';
        achievementObserver.observe(achievement);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('All event listeners initialized!');
});

// Print functionality - show all tabs when printing
window.addEventListener('beforeprint', function() {
    document.querySelectorAll('.tab-pane').forEach(function(pane) {
        pane.style.display = 'block';
    });
});

window.addEventListener('afterprint', function() {
    const activeTabButton = document.querySelector('.tab-btn.active');
    if (activeTabButton) {
        const targetTab = activeTabButton.getAttribute('data-tab');
        
        document.querySelectorAll('.tab-pane').forEach(function(pane) {
            if (pane.id === targetTab) {
                pane.style.display = 'block';
            } else {
                pane.style.display = 'none';
            }
        });
    }
    
    // Navigation link highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    console.log('All event listeners initialized!');
});