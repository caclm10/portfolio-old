function toggleActiveNavLink() {
    const hash = window.location.hash
    const navLinks = document.querySelectorAll(`.nav-link`)

    for (const navLink of navLinks) {
        if (navLink.hash === hash) navLink.classList.add(`active`)
        else navLink.classList.remove(`active`)
    }
}

const media = {
    smDown: window.matchMedia('(max-width: 575.98px)'),
    smMd: window.matchMedia('(min-width: 576px) and (max-width: 767.98px)'),
    mdUp: window.matchMedia('(min-width: 768px)')
}

function handleSmDown(p = {}) {
    if (this.matches) {
        p.swiper.params.slidesPerView = 1
    }
}

function handleSmMd(p = {}) {
    if (this.matches) {
        p.swiper.params.slidesPerView = 2
    }
}

function handleMdUp(p = {}) {
    if (this.matches) {
        p.swiper.params.slidesPerView = 3
    }
}


document.addEventListener('DOMContentLoaded', () => {

    toggleActiveNavLink()

    new fullScroll({
        mainElement: "main",
        displayDots: false,
        dotsPosition: "left",
        animateTime: 0.7,
        animateFunction: "ease",
    })

    const contactForm = document.querySelector(`form#contact-form`)
    contactForm.addEventListener('submit', event => {
        event.preventDefault()

        // alert('Email sent.')
    })

    window.addEventListener('hashchange', event => {
        toggleActiveNavLink()

        // const hash = window.location.hash
        // const sections = document.querySelectorAll(`section`)

        // for (const section of sections) {
        //     if ('#' + section.dataset.index === hash) {
        //         const aosElements = section.querySelectorAll(`[data-aos]`)
        //         for (const aosElement of aosElements) {
        //             const delay = aosElement.dataset.aosDelay || '0'

        //             setTimeout(() => {
        //                 aosElement.classList.add('aos-animate')
        //             }, +delay);
        //         }
        //     }
        // }
    })

    var swiper = new Swiper(".swiper.content", {
        slidesPerView: media.smDown.matches ? 1 : (media.smMd.matches ? 2 : 3),
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });




    media.smDown.addEventListener('change', handleSmDown.bind(media.smDown, { swiper }))
    media.smMd.addEventListener('change', handleSmMd.bind(media.smMd, { swiper }))
    media.mdUp.addEventListener('change', handleMdUp.bind(media.mdUp, { swiper }))
})