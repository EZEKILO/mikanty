document.addEventListener("scroll", () => {
    document.querySelectorAll(".contenedor2").forEach((element) => {
        let rect = element.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
            element.classList.add("fija");
        } else {
            element.classList.remove("fija");
        }
    });
});