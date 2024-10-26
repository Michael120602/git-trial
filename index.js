const progress = document.getElementById('progress_bar')
const prev =document.querySelector('.prev')
const next=document.querySelector('.next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1


next.addEventListener('click', () =>{
    currentActive++
    if (currentActive > circles.length) {
        currentActive= circles.length
        document.querySelector('.submit').classList.remove('off')
    }
    update()
})
prev.addEventListener('click', () =>{
    currentActive--
    if (currentActive < 1) {
        currentActive= 1
    }
    update()
})
function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    }); 
    var progress = document.querySelector('.progress')
    var actives = document.querySelectorAll('.active')
    var length = ((actives.length -1)/( circles.length-1)*100);
    progress.style.width = length+'%'
    
    if (currentActive === 1) {
        prev.disabled= true
    }else if (currentActive === 4) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
