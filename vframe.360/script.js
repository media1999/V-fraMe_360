// 1. Mouse Flow Trigger (Color Flow)
const cursor = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});


// Click effect for mouse
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
});
document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});

// 2. Smooth Scroll Reveal (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-elem');
        }
    });
}, { threshold: 0.1 });

const hiddenElements = document.querySelectorAll('.hidden-elem');
hiddenElements.forEach((el) => observer.observe(el));

// 3. Navigation & Modals
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function openModal(id) {
    document.getElementById(id).style.display = 'block';
    // Reset animation when opening team modal
    if(id === 'team-modal') {
        document.getElementById('team-scroll-content').style.animationPlayState = 'running';
        isPaused = false;
        document.getElementById('pause-btn').innerHTML = '<i class="fas fa-pause"></i> Pause';
    }
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// 4. Team Scroll Pause/Play Logic
const teamScroll = document.getElementById('team-scroll-content');
const pauseBtn = document.getElementById('pause-btn');
let isPaused = false;

pauseBtn.addEventListener('click', () => {
    isPaused = !isPaused;
    if (isPaused) {
        teamScroll.style.animationPlayState = 'paused';
        pauseBtn.innerHTML = '<i class="fas fa-play"></i> Play';
    } else {
        teamScroll.style.animationPlayState = 'running';
        pauseBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
    }

}
);
