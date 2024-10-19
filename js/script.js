const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appearElement');
        };
    });
});

observer.observe(document.querySelector('.hero'));
observer.observe(document.querySelector('.about-tour'));
observer.observe(document.querySelector('.offer'));
observer.observe(document.querySelector('.feedback'));
observer.observe(document.querySelector('.blog'));
observer.observe(document.querySelector('.report'));

// burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
burger.addEventListener('click', () => {
    nav.classList.toggle('nav--active');
    burger.classList.toggle('burger--active');
    document.querySelector('body').classList.toggle('stop-scrolling');
})