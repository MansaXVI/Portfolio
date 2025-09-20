document.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(ScrollTrigger);

    const container = document.querySelector(".container");
    const sections = gsap.utils.toArray(".panel");

    // L'animation principale pour le scrolling horizontal
    // On la stocke dans une variable pour la réutiliser facilement
    const mainAnimation = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + container.offsetWidth
        }
    });

    // Boucle sur chaque section pour créer des animations d'entrée
    sections.forEach(section => {
        const heading = section.querySelector("h1");
        const paragraph = section.querySelector("p");
        const projectCards = section.querySelectorAll(".projet-card");
        const icons = section.querySelectorAll(".language-container");

        if (heading) {
            gsap.from(heading, {
                scrollTrigger: {
                    trigger: section,
                    containerAnimation: mainAnimation, // On utilise la variable ici
                    start: "left 80%",
                },
                opacity: 0,
                y: 50,
                duration: 1
            });
        }
        
        if (paragraph) {
             gsap.from(paragraph, {
                scrollTrigger: {
                    trigger: section,
                    containerAnimation: mainAnimation, // Et ici
                    start: "left 75%",
                },
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.2
            });
        }
        
        if(projectCards.length > 0) {
            gsap.from(projectCards, {
                 scrollTrigger: {
                    trigger: section,
                    containerAnimation: mainAnimation, // Et ici
                    start: "left 70%",
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2
            });
        }

        if(icons.length > 0) {
            gsap.from(icons, {
                 scrollTrigger: {
                    trigger: section,
                    containerAnimation: mainAnimation, // Et ici
                    start: "left 70%",
                },
                opacity: 0,
                y: 50,
                duration: 0.5,
                stagger: 0.1
            });
        }
    });
});