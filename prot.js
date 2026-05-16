const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });

    });

});



const button = document.getElementById('btn-id');

button.addEventListener("click",() =>{
    window.location.href = "mailto:saivamsiitta@gmail.com";
}); 