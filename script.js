function increment(){
        let value= document.getElementById("counter").textContent
        value=parseInt(value)
        document.getElementById("counter").textContent=value+1
}


function decrement(){
       let value= document.getElementById("counter").textContent
       value=parseInt(value)
       document.getElementById("counter").textContent=value-1
}

function reset(){
        let value= document.getElementById("counter").textContent
        value=parseInt(value)
        document.getElementById("counter").textContent=0
}