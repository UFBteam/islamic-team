//  start on focus or on blur on inputs

const inputP = document.getElementById("input-p")
const inputE = document.getElementById("input-e")

const labelP = document.getElementById("label-p")
const labelE = document.getElementById("label-e")

inputE.onfocus = () => {
    inputE.style.borderBottom ="2px solid #488199"
    labelE.style.color = "#488199"
    labelE.style.top = "-14px"
}
inputP.onfocus = () => {
    inputP.style.borderBottom ="2px solid #488199"
    labelP.style.color = "#488199"
    labelP.style.top = "92px"
}
inputE.onblur = () => {
    if(inputE.value === ""){
        inputE.style.borderBottom ="2px solid #b2b2b2"
        labelE.style.color = "#b2b2b2"
        labelE.style.top = "13px"
    }else{
        inputE.style.borderBottom ="2px solid #488199"
        labelE.style.color = "#488199"
        labelE.style.top = "-14px"
    }
}
inputP.onblur = () => {
    if(inputP.value === ""){
        inputP.style.borderBottom ="2px solid #b2b2b2"
        labelP.style.color = "#b2b2b2"
        labelP.style.top = "119px"
    }else{
        inputP.style.borderBottom ="2px solid #488199"
        labelP.style.color = "#488199"
        labelP.style.top = "92px"
    }
}
