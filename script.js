const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substrings(1);
        const targetSection = documenet.getElemenetById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        })
    })
})

const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission
    alert('Thank you! Your message has been received.');
    contactForm.reset(); // Clear form fields
});

const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let scrollPos = windows.scroll + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`nav a[href="#${id}"]`);
        if(scrollPos >= top && scrollPos <= bottom) {
            link.computedStyleMap.color = '#ffcc00';
        }
        else{
            link.computedStyleMap.color = 'white'
        }
    })
})