const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
},{ threshold: 0.3 });
    
const hiddenElements = document.querySelectorAll('.hiddenanimation');
hiddenElements.forEach((el) => observer.observe(el));

document.querySelectorAll('.image-container').forEach(function(container) {
    container.addEventListener('click', function() {
        let img = this.querySelector('.logo-activity');
        img.classList.toggle('flip');
        this.classList.toggle('flip');
    });
});




