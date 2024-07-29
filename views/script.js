document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card2');
    const dots = document.querySelectorAll('.dot3');
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
    

    updateAll2();
});
