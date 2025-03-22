const toggler = document.querySelector('.nav-toggler');
const navLinks = document.querySelector('.links-container');

toggler.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
});

let faqs = [...document.querySelectorAll('.faq')];

faqs.map(faq => {
    let ques = faq.querySelector('.question-box');

    ques.addEventListener('click', () =>{
        faq.classList.toggle('active');
    })
})

