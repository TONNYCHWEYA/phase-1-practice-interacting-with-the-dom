const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
let counterValue = parseInt(counter.textContent)
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const likes = document.getElementsByClassName("likes")[0]
const pause = document.getElementById("pause")
document.addEventListener("DOMContentLoaded", (event) =>{
 
  console.log(counterValue)
  setInterval(incrementNo, 1000)
  function incrementNo(){
  counterValue++;
  counter.textContent = counterValue
}
})

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



function handleClickEvent(event){
  let pauseValue = pause.textContent
  console.log(pauseValue)
  if(pauseValue === "pause"){
    minus.disabled = true
    plus.disabled = true
    heart.disabled = true
    pause.textContent = "Resume"
}else{
  minus.disabled = false
    plus.disabled = false
    heart.disabled = false
    pause.textContent = "pause"
}
}

