let fleches = document.querySelectorAll(".flech");

fleches.forEach((flech) => {

    flech.addEventListener("click", function () {

        let parent = flech.parentNode.parentNode;

        let textArea = parent.querySelector(".text-area");

        textArea.classList.toggle("active");

        flech.classList.toggle("active");

        let icon = flech.querySelector("i");

        if (flech.classList.contains("active")) {
            icon.classList.remove("bi-chevron-down");
            icon.classList.add("bi-chevron-up");
        } else {
            icon.classList.remove("bi-chevron-up");
            icon.classList.add("bi-chevron-down");
        }
    });
});


