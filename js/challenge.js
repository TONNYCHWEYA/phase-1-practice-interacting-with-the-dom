const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
let counterValue = parseInt(counter.textContent)
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const likes = document.getElementsByClassName("likes")[0]
const pause = document.getElementById("pause")

document.addEventListener("DOMContentLoaded", handleDocumentEvent)

function incrementNo(){
  counterValue++;
  counter.textContent = counterValue
}

function handleDocumentEvent(event){
    myInterval
}

  let myInterval = setInterval(incrementNo, 1000)


minus.addEventListener("click", (event)=>{
   counterValue--
})
plus.addEventListener("click", (event)=>{
  counterValue++
})
let count =0;
heart.addEventListener("click", (event) => {
  count++

  let li = document.createElement('li')
  
  console.log(likes)
  li.textContent = `${counterValue} has been liked ${count} times`
  likes.appendChild(li)
})


  

  

  pause.addEventListener("click", handleClickEvent)

function setCounterInterval(){
  setInterval(incrementNo, 1000)
}
function restart(){
setTimeout(setCounterInterval, 3000)
}

function handleClickEvent(event){
  let pauseValue = pause.textContent
  console.log(pauseValue)
  if(pauseValue === "pause"){
    minus.disabled = true
    plus.disabled = true
    heart.disabled = true
    
    clearInterval(myInterval)
    pause.textContent = "Resume"
}else{
  minus.disabled = false
    plus.disabled = false
    heart.disabled = false
    restart()

    pause.textContent = "pause"
}
}


const form = document.getElementById("comment-form")
form.addEventListener("submit", handleFormEvent)
function handleFormEvent(event){
  event.preventDefault()
  const inputValue = event.target.input.value 
  let p = document.createElement("p")
  p.textContent = inputValue
  let div = document.getElementById("list")
  div.appendChild(p)
}

