document.addEventListener('mousemove', (event) => {
    const image = document.querySelector('.image');
    const { clientX: x, clientY: y } = event;
    const { innerWidth: width, innerHeight: height } = window;

    const moveX = ((x / width) - 0.8) * 100; // Increased intensity
    const moveY = ((y / height) - 0.8) * -100; // Increased intensity

    image.style.transform = `rotateY(${moveX}deg) rotateX(${moveY}deg)`;
});
