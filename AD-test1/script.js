const container = document.querySelector(".con")
const click = document.querySelector(".btn1")
const reset = document.querySelector(".btn2")
const red = document.querySelector(".btn3")
const blue = document.querySelector(".btn4")
const count = document.querySelector(".count")
const mode = document.querySelector(".btn5")
const main = document.querySelector(".main")

let count1 = 1;

function shape(){
    if(count1%5==0 && count1 != 0){
        container.classList.add("circle")
        container.classList.remove("square")
        container.classList.remove("rectangle")
    }
    else if(count1%2==0){
        container.classList.add("square")
        container.classList.remove("circle")
        container.classList.remove("rectangle")
    }
    else{
        container.classList.remove("square")
        container.classList.remove("circle")
        container.classList.add("rectangle")
    }
}
 

click.addEventListener("click" , ()=>{
    count1 +=1;
    count.innerHTML=`count:${count1}`
    shape()
})

reset.addEventListener("click", ()=>{
    count1 = 0;
    count.innerHTML=`count:${count1}`
    container.classList.remove("square")
    container.classList.remove("circle")
    container.classList.add("rectangle")
})

red.addEventListener("click" ,()=>{
    count1 +=1;
    count.innerHTML=`count:${count1}`
    container.style.background = "red"
    shape()
})

blue.addEventListener("click" ,()=>{
    count1 +=1;
    count.innerHTML=`count:${count1}`
    container.style.background = "blue"
    shape()
})

mode.addEventListener("click" , ()=>{
    main.classList.toggle("dark")
    if(main.classList.contains("dark")){
        container.style.background = "#fff"  
        mode.style.color = "#000"
        click.style.background = "#fff"
        reset.style.background = "#fff"
        red.style.background = "#fff"
        blue.style.background = "#fff"
        mode.style.background = "#fff"
        count.style.color = "#fff"
        mode.innerHTML = "light mode"
    }
    else{
        container.style.background = "#000"  
        mode.style.color = "#fff"
        mode.style.background = "#000"
        count.style.color = "#000"
        mode.innerHTML = "dark mode"
    }
})