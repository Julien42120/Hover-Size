let boxs = document.querySelectorAll(".box")

boxs.forEach(box => {
    box.addEventListener("mouseenter", function (event) {
        box.style.border = "2px solid red";
        box.style.filter = 'blur(0)';
    })
})

boxs.forEach(box =>{
    box.addEventListener("mouseleave", function (event) {
        box.style.border = "2px solid black";
        box.style.filter = 'blur(0.5em)';
    })

})

boxs.forEach(box => {
    box.addEventListener("mousedown", function (event) {
        box.style.width = "400px";
    box.addEventListener("mouseup", function (event) {
        box.style.width = "200px"
})

    })
})

