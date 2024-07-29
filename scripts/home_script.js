document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });

        document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showSlide(index);
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000);
});


//frame
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const dots = document.querySelectorAll('.dot2');
    let currentIndex = 0;

    const updateCards = () => {
        cards.forEach((card, index) => {
            card.classList.remove('active');
            card.style.zIndex = 1;
            card.style.transform = '';

            if (index === currentIndex) {
                card.classList.add('active');
                card.style.zIndex = 2;
                card.style.transform = 'translateY(-50%) scale(1.1)';
            } else if (index === (currentIndex + 1) % cards.length) {
                card.style.transform = 'translateX(100%) translateY(-50%) scale(0.8)';
            } else if (index === (currentIndex + cards.length - 1) % cards.length) {
                card.style.transform = 'translateX(-100%) translateY(-50%) scale(0.8)';
            }
        });
    };

    const updateDots = () => {
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
        });
    };

    const updateAll = () => {
        updateCards();
        updateDots();
    };

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            currentIndex = index;
            updateAll();
        });
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateAll();
        });
    });

    updateAll();
});
// frame 2
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card2');
    const dots = document.querySelectorAll('.dot3');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;

    const updateCards2 = () => {
        cards.forEach((card, index) => {
            card.classList.remove('active');
            card.style.zIndex = 1;
            card.style.transform = '';

            if (index === currentIndex) {
                card.classList.add('active');
                card.style.zIndex = 2;
                card.style.transform = 'translateY(-50%) scale(1.1)';
            } else if (index === (currentIndex + 1) % cards.length) {
                card.style.transform = 'translateX(100%) translateY(-50%) scale(0.8)';
            } else if (index === (currentIndex + cards.length - 1) % cards.length) {
                card.style.transform = 'translateX(-100%) translateY(-50%) scale(0.8)';
            }
        });
    };

    const updateDots2 = () => {
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
        });
    };

    const updateAll2 = () => {
        updateCards2();
        updateDots2();
    };

    const showPrevCard = () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateAll2();
    };

    const showNextCard = () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateAll2();
    };

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            currentIndex = index;
            updateAll2();
        });
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateAll2();
        });
    });

    prevButton.addEventListener('click', showPrevCard);
    nextButton.addEventListener('click', showNextCard);

    updateAll2();
});
