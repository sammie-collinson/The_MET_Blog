const img = document.querySelectorAll('img')

img.forEach((index) => {
    index.addEventListener('mouseover', () => {
        index.classList.add('mouseover');
    });
    index.addEventListener('mouseout', () => {
        index.classList.remove('mouseover');
    });
});
