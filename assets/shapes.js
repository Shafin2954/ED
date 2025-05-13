document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.floating-shapes');

    for (let i = 0; i < 10; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.animationDelay = `${Math.random() * 10}s`;
        shape.style.width = shape.style.height = `${10 + Math.random() * 30}px`;
        container.appendChild(shape);
    }
});
