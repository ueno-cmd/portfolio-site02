import './style.css'

// Form submission handler
const form = document.querySelector('.form')
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        // Form submission handled
    })
}

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.header-navitem a')
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href')
        if (href && href.startsWith('#')) {
            e.preventDefault()
            const targetId = href.substring(1)
            const targetElement = document.getElementById(targetId)
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        }
    })
})
