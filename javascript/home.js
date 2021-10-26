const p = document.querySelector('.text-simulation')
const text = p.innerHTML
p.innerHTML = ''

function textAnimation() {
  p.innerHTML = ''
  let i = 0
  const interval = setInterval(() => {
    if (i === text.length-1) {
      clearInterval(interval)
    }
    p.innerHTML += text[i]
    i++
  }, 120)
}
textAnimation()
setInterval(textAnimation, 10000)
