function ElementUp(element, delay) {
    gsap.fromTo(
        element, {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: parseFloat(delay)
        }
    );
}

function ElementOpacity(element, delay) {
    gsap.fromTo(
        element, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 1.5,
            delay: parseFloat(delay)
        }
    );
}