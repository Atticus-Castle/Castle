document.addEventListener('DOMContentLoaded', () => {
    // 滚动动画
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s ease forwards';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.belief-card').forEach(card => {
        observer.observe(card);
    });

    // 导航栏滚动效果
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.main-nav');
        nav.style.transform = 'translateY(0)';
    });
}); 