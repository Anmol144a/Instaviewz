// Handle order and choose buttons
document.querySelectorAll('.order-btn, .choose-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        button.classList.add('animate-pulse');
        setTimeout(() => {
            button.classList.remove('animate-pulse');
        }, 300);
    });
});
