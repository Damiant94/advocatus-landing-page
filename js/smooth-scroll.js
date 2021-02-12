const sections = [
    document.querySelector("#about-us-anchor"),
    document.querySelector("#practis-anchor"),
    document.querySelector("#lawyers-anchor"),
    document.querySelector("#publications-anchor"),
    document.querySelector("#faq-anchor"),
    document.querySelector("#contact-anchor")
];

const links = document.querySelectorAll('.nav-links a');

links.forEach((link, index) => {
    link.onclick = (event) => {
        event.preventDefault();
        sections[index].scrollIntoView({
            behavior: 'smooth'
        })
    }
});

const contactBtn = document.querySelector(".contact-btn");
contactBtn.onclick = () => {
    sections[5].scrollIntoView({
        behavior: 'smooth'
    });
}

const logo = document.querySelector(".logo");
logo.onclick = () => {
    body.scrollIntoView({
        behavior: 'smooth'
    })
}

