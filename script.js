document.addEventListener('mousemove', (event) => {
    const image = document.querySelector('.image');
    const { clientX: x, clientY: y } = event;
    const { innerWidth: width, innerHeight: height } = window;

    const moveX = ((x / width) - 0.5) * 20; // Adjust intensity
    const moveY = ((y / height) - 0.9) * -20; // Adjust intensity

    image.style.transform = `rotateY(${moveX}deg) rotateX(${moveY}deg)`;
});
