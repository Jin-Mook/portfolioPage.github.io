const myphoto = document.querySelector(".myphoto")
const myinfo = document.querySelector(".myinfo")

function clickButton() {
  myphoto.classList.add("show")
}

window.onload = setTimeout(() => myphoto.classList.add("show-photo"), 1000)

window.onload = setTimeout(() => myinfo.classList.add("show-info"), 1000)