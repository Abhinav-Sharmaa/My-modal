let modal_btns = document.querySelectorAll(".btn");
let modal_all = document.querySelectorAll(".modal");
let close_btn = document.querySelectorAll(".closer");
let lay = document.querySelector(".overlay");

// modal_all.classList.add("hidden");
for (let i = 0; i < modal_btns.length; i++) {
    modal_btns[i].addEventListener("click", function() {
        for (let j = 0; j < modal_all.length; j++) {
            modal_all[j].classList.add("hidden");

        }
        modal_all[i].classList.remove("hidden");
        lay.classList.remove("hidden");
    })

    lay.addEventListener("click", function() {
        lay.classList.add("hidden");
        modal_all[i].classList.add("hidden");

    })
}


for (let k = 0; k < close_btn.length; k++) {
    close_btn[k].addEventListener("click", function() {
        modal_all[k].classList.add("hidden");
        lay.classList.add("hidden");
    })
}