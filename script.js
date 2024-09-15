document.addEventListener('mousemove', (event) => {
    const image = document.querySelector('.image');
    const { clientX: x, clientY: y } = event;
    const { innerWidth: width, innerHeight: height } = window;

    const moveX = ((x / width) - 0.7) * 60;
    const moveY = ((y / height) - 0.7) * -60;

    image.style.transform = `rotateY(${moveX}deg) rotateX(${moveY}deg)`;
});
