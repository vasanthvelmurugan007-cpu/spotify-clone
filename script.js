document.addEventListener('DOMContentLoaded', () => {
    
    // Topbar Scroll Effect
    const contentScrollable = document.querySelector('.content-scrollable');
    const topbar = document.querySelector('.topbar');
    
    if (contentScrollable && topbar) {
        contentScrollable.addEventListener('scroll', () => {
            if (contentScrollable.scrollTop > 50) {
                topbar.classList.add('scrolled');
            } else {
                topbar.classList.remove('scrolled');
            }
        });
    }

    // Dynamic Greeting based on time
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        const hour = new Date().getHours();
        let greeting = 'Good evening';
        
        if (hour >= 5 && hour < 12) {
            greeting = 'Good morning';
        } else if (hour >= 12 && hour < 17) {
            greeting = 'Good afternoon';
        }
        
        greetingElement.textContent = greeting;
    }

    // Play/Pause Button Toggle
    const playPauseBtns = document.querySelectorAll('.play-pause-btn');
    let isPlaying = false;

    playPauseBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            isPlaying = !isPlaying;
            
            if (isPlaying) {
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
            } else {
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
            }
        });
    });

    // Like Button Toggle
    const likeBtn = document.querySelector('.like-btn');
    if (likeBtn) {
        likeBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            const icon = this.querySelector('i');
            
            if (this.classList.contains('active')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
            }
        });
    }

    // Interactive Progress Bars
    const progressWrappers = document.querySelectorAll('.progress-bar-wrapper');
    
    progressWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const width = rect.width;
            const percentage = (x / width) * 100;
            
            const fill = this.querySelector('.progress-fill');
            if (fill) {
                fill.style.width = `${percentage}%`;
            }
        });
    });

    // Toggle active state for shuffle and repeat buttons
    const toggleBtns = document.querySelectorAll('.shuffle-btn, .repeat-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active-state');
        });
    });
});
