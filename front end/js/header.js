
const i = document.getElementById("i")
const input  = document.getElementById("input")

i.onclick = function(){
    input.focus()
}

const after = document.querySelector("#first span")
const lis = document.querySelectorAll("nav ul li")

lis.forEach(el =>{
    el.onclick = function() {
        lis.forEach(el =>{
            el.classList = ""
        })
        let data = this.getAttribute("data-number")
        this.classList = "active"
        after.style.top = `${70 * parseInt(data)}px`
    }
})
const menuContainerIcon = document.querySelector(".cont")
const menuIcon = document.querySelectorAll(".cont > div > div")
const navNav =document.querySelector("nav")
menuContainerIcon.onclick = function(){
    menuIcon.forEach(el =>{
        el.classList.toggle("active")
    })
    navNav.classList.toggle("active")
}