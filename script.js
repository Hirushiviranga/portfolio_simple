// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}
const text = document.querySelector(".text-animate h3");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Full-Stack Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Software Engineer";
    }, 6000);
    setTimeout(() => {
        text.textContent = "UI/UX Designer";
    }, 12000);
    setTimeout(() => {
        text.textContent = "Translator";
    }, 18000);
}

textLoad();
setInterval(textLoad, 24000); // Cycles every 24s (6s per role)
// Trigger the scroll function on load to reveal the home section immediately
window.dispatchEvent(new Event('scroll'));