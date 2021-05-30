window.onload = (() => {
    window.addEventListener('scroll', () => {

        let nav = document.querySelector(".nav");

        nav.classList.add("scroll");
        if (window.scrollY < 10) {
            nav.classList.remove("scroll");
        }
    });

});