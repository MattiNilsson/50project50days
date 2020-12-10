let panels = document.querySelectorAll(".panel");

for(panel of panels){
    panel.addEventListener("click", (e) => toggleClick(e))
}

const toggleClick = (e) => {
    for(panel of panels){
        panel.classList.remove("active");
    }

    e.target.classList.add("active");
}