document.addEventListener('DOMContentLoaded', () => {
    // Google Analytics (ensure this is configured correctly on your GA4 property)
    // You've already included the async/defer script in HTML, this ensures gtag is available.
    // However, the config call is usually handled by the async script itself or immediately after.
    // If you need more complex GA interactions, they'd go here.

    const downloadButtons = document.querySelectorAll('.download-button');
    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const osType = button.getAttribute('data-os');
            // Ensure gtag is loaded before calling it
            if (typeof gtag === 'function') {
                gtag('event', 'download_click', {
                    'os_version': osType
                });
                console.log(`Download click tracked for: ${osType}`);
            } else {
                console.warn('Google Analytics gtag function not found. Download click not tracked.');
            }
        });
    });

    // --- Image Modal JavaScript ---
    const imageModal = document.getElementById("imageModal");
    const appMockup = document.querySelector(".app-mockup");
    const modalImage = document.getElementById("modalImage");
    const closeButton = document.getElementsByClassName("close-button")[0];

    if (appMockup && imageModal && modalImage && closeButton) {
        // When the user clicks the app mockup, open the modal
        appMockup.addEventListener('click', function() {
            imageModal.style.display = "flex"; // Use flex to center content
            modalImage.src = this.src; // Set the modal image source to the clicked image's source
        });

        // When the user clicks on (x), close the modal
        closeButton.addEventListener('click', function() {
            imageModal.style.display = "none";
        });

        // When the user clicks anywhere outside the image (on the modal overlay), close it
        imageModal.addEventListener('click', function(event) {
            if (event.target === imageModal) {
                imageModal.style.display = "none";
            }
        });

        // Optional: Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && imageModal.style.display === 'flex') {
                imageModal.style.display = 'none';
            }
        });
    } else {
        console.warn('One or more elements for the image modal were not found. Image modal functionality may be limited.');
    }
});