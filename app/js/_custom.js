document.addEventListener("DOMContentLoaded", function() {
	const carousel = new flexCarousel('.posts__wrap' , {
        circles: true,
        circlesOverlay: true,
        arrows: false,
        arrowsOverlay: false,
        slidesPerPage: 1,
        responsive: [
            {
              breakpoint: 768,
              options: {
                arrows: false,
                arrowsOverlay: false,
                circles: false,
                circlesOverlay: false,
                slidesPerPage: 3
              }
            }
        ],
    });
});
