function toggleActiveNavLink() {
    const hash = window.location.hash
    const navLinks = document.querySelectorAll(`.nav-link`)

    for (const navLink of navLinks) {
        if (navLink.hash === hash) navLink.classList.add(`active`)
        else navLink.classList.remove(`active`)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector(`form#contact-form`)

    toggleActiveNavLink()

    new fullScroll({
        mainElement: "main",
        displayDots: false,
        dotsPosition: "left",
        animateTime: 0.7,
        animateFunction: "ease",
    })

    AOS.init()

    const swiper = new Swiper(".project-slideshow", {
        effect: "cards",
        grabCursor: true,
    })

    contactForm.addEventListener('submit', event => {
        event.preventDefault()

        alert('Email sent.')
    })

    window.addEventListener('hashchange', event => {
        toggleActiveNavLink()

        const hash = window.location.hash
        const sections = document.querySelectorAll(`section`)

        for (const section of sections) {
            if ('#' + section.dataset.index === hash) {
                const aosElements = section.querySelectorAll(`[data-aos]`)
                for (const aosElement of aosElements) {
                    const delay = aosElement.dataset.aosDelay || '0'

                    setTimeout(() => {
                        aosElement.classList.add('aos-animate')
                    }, +delay);
                }
            }
        }
    })
})