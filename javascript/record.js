const container1 = document.querySelector(".record-container1")
const container2 = document.querySelector(".record-container2")
const container3 = document.querySelector(".record-container3")

function scrollEvent(event) {
  const container1Location = container1.offsetTop;
  const container2Location = container2.offsetTop;
  const container3Location = container3.offsetTop;
  const currentLocation = window.scrollY

  if (currentLocation === container1Location && event.deltaY > 0) {
    window.scrollTo({top: container2Location, behavior: 'smooth'})
  } else if (currentLocation === container2Location) {
    if (event.deltaY < 0) {
      window.scrollTo({top: container1Location, behavior: 'smooth'})
    } else {
      window.scrollTo({top: container3Location, behavior: 'smooth'})
    }
  } else if (currentLocation === container3Location && event.deltaY < 0) {
    window.scrollTo({top: container2Location, behavior: 'smooth'})
  }
}

window.addEventListener('wheel', scrollEvent)