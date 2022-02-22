/* Abre e fecha o Menu quando clica nos ícones 'hambúrguer' e 'x' */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* Esconde o Menu quando clica em um item da lista */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/* Mudar o header da página quando der o scroll */
function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
});

/* ScrollReveal: Mostra elementos ao dar scroll na página */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text, 
    #about .image, #about .text, 
    #services header, #services .card, 
    #testimonials header, #testimonials .testimonials, 
    #contact .text, #contact .links,
    footer .brand, footer .social`, 
    { interval: 100 })

/* Botão de voltar para o topo */
function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')

    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

/* Quando usar o scroll */
window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
})