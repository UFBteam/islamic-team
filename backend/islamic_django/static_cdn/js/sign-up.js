// start focus and blur

const inputs = document.getElementsByClassName("input")
const labels = document.getElementsByClassName("label")


inputs[0].onfocus = () => {
    inputs[0].style.borderBottom ="2px solid #488199"
    labels[0].style.color = "#488199"
    labels[0].style.top = `${-4}%`
}
inputs[0].onblur = () => {
    if(inputs[0].value === ""){
        inputs[0].style.borderBottom ="2px solid #b2b2b2"
        labels[0].style.color = "#b2b2b2"
        labels[0].style.top = "2%"
    }else{
        inputs[0].style.borderBottom ="2px solid #488199"
        labels[0].style.color = "#488199"
        labels[0].style.top = "-5%"
    }
}
inputs[1].onfocus = () => {
    inputs[1].style.borderBottom ="2px solid #488199"
    labels[1].style.color = "#488199"
    labels[1].style.top = "20%"
}

inputs[1].onblur = () => {
    if(inputs[1].value === ""){
        inputs[1].style.borderBottom ="2px solid #b2b2b2"
        labels[1].style.color = "#b2b2b2"
        labels[1].style.top = "27%"
    }else{
        inputs[1].style.borderBottom ="2px solid #488199"
        labels[1].style.color = "#488199"
        labels[1].style.top = "20%"
    }
}
inputs[2].onfocus = () => {
    inputs[2].style.borderBottom ="2px solid #488199"
    labels[2].style.color = "#488199"
    labels[2].style.top = "45%"
}
inputs[2].onblur = () => {
    if(inputs[2].value === ""){
        inputs[2].style.borderBottom ="2px solid #b2b2b2"
        labels[2].style.color = "#b2b2b2"
        labels[2].style.top = "52%"
    }else{
        inputs[2].style.borderBottom ="2px solid #488199"
        labels[2].style.color = "#488199"
        labels[2].style.top = "45%"
    }
}
inputs[3].onfocus = () => {
    inputs[3].style.borderBottom ="2px solid #488199"
    labels[3].style.color = "#488199"
    labels[3].style.top = "70%"
}

inputs[3].onblur = () => {
    if(inputs[3].value === ""){
        inputs[3].style.borderBottom ="2px solid #b2b2b2"
        labels[3].style.color = "#b2b2b2"
        labels[3].style.top = "77%"
    }else{
        inputs[3].style.borderBottom ="2px solid #488199"
        labels[3].style.color = "#488199"
        labels[3].style.top = "70%"
    }
}
const warning = document.querySelectorAll("aside span")

inputs[3].addEventListener("input" ,() => {
    if(inputs[2].value != inputs[3].value){
        warning[0].style.display = "block"
    }else{
        warning[0].style.display = "none"

    }
})





















// // for(let i = 0; i < labels.length;i++){
// //     let top = labels[i].offsetTop;
// //     for(let y = 0; y < inputs.length;y++){
// //         inputs[y].onfocus = function (){
// //             this.style.borderBottom = "2px solid #488199"
// //             console.log(top)
// //             for(let x = 0 ; x < labels.length ; x++){
// //                 labels[x].style.top = `${top - 24}px`
// //             }
// //         }
// //     }
// // }

// for(let p = 0 ; p < labels.length;p++){
//     let ss =labels.offsetTop
//     for(let y = 0; y < inputs.length;y++){
//         inputs[y].onfocus = function (){
//             this.style.borderBottom = "2px solid #488199"
//             let i = this.getAttribute("data-number")
//                 labels[i].style.color = "#488199"
//                 let top1  = labels[i].offsetTop
                
//                 console.log(ss)
//                 labels[i].style.top = `${top1 - 24}px`

                
                
//         }
//     }
// }
// for(let y = 0; y < inputs.length;y++){
//     inputs[y].onblur = function (){
//         if(this.value == ""){
//             this.style.borderBottom = "2px solid #b2b2b2"
//             let i = this.getAttribute("data-number")
            
//                 labels[i].style.color = "#b2b2b2"
//                 let top  = labels[i].offsetTop
//                 labels[i].style.top = `${top + 24}px`
//         }else{
//             this.style.borderBottom = "2px solid #488199"
//             let i = this.getAttribute("data-number")
//             labels[i].style.color = "#488199"
            
            
//         }
        
//     }
// }

