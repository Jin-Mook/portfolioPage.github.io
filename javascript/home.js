const p = document.querySelector('.text-simulation')
const text = "안녕하세요 저는 정진묵 입니다."


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

setTimeout(textAnimation, 2000)
setInterval(textAnimation, 10000)
