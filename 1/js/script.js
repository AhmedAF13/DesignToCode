const details = document.querySelectorAll(".detail");

details.forEach((d, n, details) => {
    const x = window.matchMedia("(max-width: 700px)");
    d.addEventListener("click", () => {
        if (x.matches) d.classList.toggle('open');
        else {
            details.forEach(i => i.classList.remove("open"))
            d.classList.add("open");
        }
    });
})
