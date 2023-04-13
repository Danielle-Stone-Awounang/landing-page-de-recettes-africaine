 /*================= SCROLL REVEAL ANIMATION ================*/
 const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000
    // reset: true
});

// SCROLL HOME 
sr.reveal('.titre',{delay:400})
sr.reveal('.introduction',{origin:'right',delay:600, distance:'300px'})

// SCROLL ABOUT 
sr.reveal('.serv, .img, .services__item',{delay:500})