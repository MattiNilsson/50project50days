const steps = document.querySelector(".steps");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let current = 0;

const howMany = (amount) => {
    for(let i = 0; i < amount; i++){
        let newStep = document.createElement("div");
        newStep.id = "step-" + i;
        newStep.classList.add(`step`);
        if(i === 0) newStep.classList.add(`selected`);
        newStep.innerHTML = `<span class='stepNr'>${i + 1}</span>`;
        steps.appendChild(newStep);
    }

    prevBtn.addEventListener("click", (e) => navButtons(e, false, amount))
    nextBtn.addEventListener("click", (e) => navButtons(e, true, amount))
}

function navButtons(e, next, max){
    const progress = document.querySelector(".progress");

    if(next){
        if(current >= max - 1) return;
        if(current === max - 2) e.target.disabled = true;
        prevBtn.disabled = false;
        current++
    }else{
        if(current <= 0) return;
        if(current - 1 === 0) e.target.disabled = true;
        nextBtn.disabled = false;
        current--
    }
    let calc = Math.floor((current / (max - 1)) * 100);
    if(calc === 100){
        calc = 98;
    }
    progress.style.width = calc + "%";
    
    for(let i = 0; i < max; i++){
        let step = document.querySelector(`#step-${i}`);
        step.classList.remove("selected");
    }
    for(let i = 0; i < current + 1; i++){
        let step = document.querySelector(`#step-${i}`);
        step.classList.add("selected");
    }
    console.log(current);
}

howMany(5);

