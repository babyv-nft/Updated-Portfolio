// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) entry.target.classList.add(‘visible’)
})
}, { threshold: 0.15 })

document.querySelectorAll(’.fade-in’).forEach((el) => observer.observe(el))

// Hero load animation
window.addEventListener(‘load’, () => {
const hl = document.querySelector(’.hero-left’)
if (hl) hl.classList.add(‘loaded’)
})