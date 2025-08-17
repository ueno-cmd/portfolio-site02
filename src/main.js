import './style.css'

console.log('Portfolio site loaded successfully')

// Form submission handler
const form = document.querySelector('.form')
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        alert('Thank you for your message! We will get back to you soon.')
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
