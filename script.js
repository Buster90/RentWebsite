// Toggle warning details
function toggleWarning() {
    const details = document.getElementById('warningDetails');
    const btn = document.querySelector('.expand-btn');
    
    details.classList.toggle('open');
    btn.classList.toggle('open');
}

// Download modal functions
function openDownloadModal() {
    const modal = document.getElementById('downloadModal');
    const overlay = document.getElementById('modalOverlay');
    
    modal.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDownloadModal() {
    const modal = document.getElementById('downloadModal');
    const overlay = document.getElementById('modalOverlay');
    
    modal.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDownloadModal();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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