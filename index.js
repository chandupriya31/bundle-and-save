const options = document.querySelectorAll(".option");

options.forEach(option => {
    const radio = option.querySelector("input[type='radio']");
    const dropdowns = option.querySelector(".dropdowns");

    radio.addEventListener("change", () => {
        options.forEach(opt => {
            opt.classList.remove("selected");
            const drop = opt.querySelector(".dropdowns");
            if (drop) drop.style.display = "none";
        });

        option.classList.add("selected");
        if (dropdowns) dropdowns.style.display = "flex";
    });
});

document.querySelector("input[type='radio']:checked")?.dispatchEvent(new Event("change"));
