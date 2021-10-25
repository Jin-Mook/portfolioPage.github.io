const container1 = document.querySelector(".aboutme-container1")
const container2 = document.querySelector(".aboutme-container2")

function scrollEvent(event) {
  const container1Location = container1.offsetTop;
  const container2Location = container2.offsetTop;
  const currentLocation = window.scrollY

  if (currentLocation === container1Location && event.deltaY > 0) {
    window.scrollTo({top: container2.offsetTop, behavior: 'smooth'})
  } else if (currentLocation <= container2Location && event.deltaY < 0) {
    window.scrollTo({top: container1.offsetTop, behavior: 'smooth'})
  }
}

window.addEventListener('wheel', scrollEvent)