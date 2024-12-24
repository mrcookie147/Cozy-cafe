document.addEventListener('DOMContentLoaded', () => {
    listElementsOpacity.forEach((e) => {
        document.querySelectorAll(e).forEach((element) => {
            element.style.opacity = 0;
        })
    });
    listElementsUp.forEach((e) => {
        document.querySelectorAll(e).forEach((element) => {
            element.style.opacity = 0;
        })
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                observer.unobserve(entry.target);
                for (let i = 0; i < listElementsOpacity.length; i++) {
                    if (entry.target.className === listElementsOpacity[i]) {
                        ElementOpacity(entry.target, delay);
                    } else {
                        ElementUp(entry.target, delay);
                    }
                }
            }
        });
    }, {
        threshold: 0.1
    });

    listElementsUp.forEach((selector) => {
        document.querySelectorAll(selector).forEach((element, index) => {
            element.dataset.delay = index * 0.2;
            observer.observe(element);
        });
    });

    listElementsOpacity.forEach((selector) => {
        document.querySelectorAll(selector).forEach((element) => {
            observer.observe(element);
        });
    });
});