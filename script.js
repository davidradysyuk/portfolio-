document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const duration = 1500; // Duration in milliseconds

        window.scrollTo({
            top: topOffset,
            behavior: 'smooth'
        });

        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const scrollToPosition = topOffset * Math.min(progress / duration, 1);
            window.scrollTo(0, scrollToPosition);

            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    });
});