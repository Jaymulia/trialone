window.addEventListener('scroll', () => {
    const imageTop = document.querySelector('.img-top');
    const imageMiddle = document.querySelector('img-middle');
    const imageBottom = document.querySelector('img-bottom');
    const showcaseData = document.querySelector('showcase-data');
    let scrollpositionY = window.scrollY;
    let showcaseDataStyles = `
        transform : translateY(${scrollpositionY * .2}%);
        opacity: ${1 - scrollpositionY * 0.002};
    `;
}
if (scrollpositionY < 650) {
    showcaseData.Style = showcaseDataStyles;
    imageTop.style.transform = `translateY(${-scrollPositionY * .001}%)`;
    imageMiddle.style.transform = `translateY(${scrollPositionY * .02}%)`;
    imageBottom.style.transform = `translateY(${-scrollPositionY * .04}%)`;
};
});
