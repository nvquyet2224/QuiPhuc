

class LogosMarquee {
    constructor({
        containerSelector = ".marquee__ctn",
        trackSelector = ".marquee__track",
        speed = 60 // pixels per second
    } = {}) {
        this.container = document.querySelector(containerSelector);
        this.track = document.querySelector(trackSelector);
        this.speed = speed;

        if (!this.container || !this.track) {
            console.warn("Marquee: éléments introuvables.");
            return;
        }

        this.trackWidth = this.track.getBoundingClientRect().width;
        this.pos = 0;
        this.start = null;
        this.rafId = null;

        this.setup();
        this.animate = this.animate.bind(this); // Bind pour requestAnimationFrame
        requestAnimationFrame(this.animate);
    }

    setup() {
        // Étendre la largeur du container
        this.container.style.width = `${this.trackWidth}px`;

        // Dupliquer le contenu pour boucler visuellement
        this.clone = this.track.cloneNode(true);
        this.container.appendChild(this.clone);

        // Optimisation mobile
        this.container.style.willChange = "transform";
    }

    animate(timestamp) {
        if (!this.start) this.start = timestamp;

        const elapsed = timestamp - this.start;
        this.pos = -(elapsed / 1000) * this.speed;

        if (Math.abs(this.pos) >= this.trackWidth) {
            this.start = timestamp;
            this.pos = 0;
        }

        this.container.style.transform = `translateX(${this.pos}px)`;

        this.rafId = requestAnimationFrame(this.animate);
    }

    destroy() {
        cancelAnimationFrame(this.rafId);
        if (this.clone) this.clone.remove();
        this.container.style.transform = "";
        this.container.style.willChange = "";
    }
}


function yearClick() {
    const history = document.querySelector(".history");

    if (history) {
        history.addEventListener("click", (e) => {
            const item = e.target.closest(".nav-overlay li");

            if (item) {
                if (!item.classList.contains('current')) {

                    const target = item.getAttribute('data-target');

                    const oldItem = document.querySelector(".nav-overlay li.current");
                    const oldDetail = document.querySelector(".year-detail .detail.current");

                    if (oldItem && oldDetail) {
                        oldItem.classList.remove('current');
                        oldDetail.classList.remove('current');
                    }
                    // active
                    item.classList.add('current');
                    document.querySelector('.year-detail .detail[data-target="' + target + '"]').classList.add('current');

                }

            }

        });

    }
}

(function () {
    yearClick();
    const marquee = new LogosMarquee({
        containerSelector: ".marquee__ctn",
        trackSelector: ".marquee__track",
        speed: 120
    });
})();

