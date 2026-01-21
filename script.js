console.log('Avinash Mali Photography site loaded');

document.addEventListener('DOMContentLoaded', function () {

    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    let currentIndex = 0;
    let slideshowInterval;

    // Fade change function
    function changeImage(index) {
        lightboxImg.classList.remove('show');

        setTimeout(() => {
            lightboxImg.src = galleryImages[index].src;
            lightboxImg.classList.add('show');
        }, 200);
    }

    // Open lightbox
    function openLightbox(index) {
        currentIndex = index;
        changeImage(currentIndex);
        lightbox.style.display = 'flex';
        startSlideshow();
    }

    // Auto slideshow
    function startSlideshow() {
        stopSlideshow();
        slideshowInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            changeImage(currentIndex);
        }, 3000);
    }

    function stopSlideshow() {
        if (slideshowInterval) clearInterval(slideshowInterval);
    }

    // Click on images to open
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });

    // Close lightbox
    lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
        stopSlideshow();
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            stopSlideshow();
        }
    });

    // Next / Prev buttons
    nextBtn.addEventListener('click', () => {
        stopSlideshow();
        currentIndex = (currentIndex + 1) % galleryImages.length;
        changeImage(currentIndex);
        startSlideshow();
    });

    prevBtn.addEventListener('click', () => {
        stopSlideshow();
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        changeImage(currentIndex);
        startSlideshow();
    });

    /* -----------------------
       SWIPE SUPPORT (MOBILE)
       ----------------------- */
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    lightbox.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const diff = touchEndX - touchStartX;

        // Swipe Right = Previous
        if (diff > 50) {
            stopSlideshow();
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            changeImage(currentIndex);
            startSlideshow();
        }

        // Swipe Left = Next
        if (diff < -50) {
            stopSlideshow();
            currentIndex = (currentIndex + 1) % galleryImages.length;
            changeImage(currentIndex);
            startSlideshow();
        }
    }
});
