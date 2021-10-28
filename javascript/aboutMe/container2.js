const frontend = document.querySelector("#frontend")
const backend = document.querySelector("#backend")
const data = document.querySelector("#data")

const frontendImgaeBox = document.querySelector("#frontend-img")
const backendImgaeBox = document.querySelector("#backend-img")
const dataImgaeBox = document.querySelector("#data-img")

// frontend 이미지 채우기
const frontendImageArrays = ['../../images/html.PNG', '../../images/css.PNG', '../../images/javascript.PNG', '../../images/react.PNG']

frontendImageArrays.forEach((el) => {
  const imgTag = `<img src=${el} >`
  frontendImgaeBox.innerHTML += imgTag
})

// backend 이미지 채우기
const backendImageArrays = ['../../images/nodejs.PNG', '../../images/flask.PNG', '../../images/mysql.PNG']

backendImageArrays.forEach((el) => {
  const imgTag = `<img src=${el} >`
  backendImgaeBox.innerHTML += imgTag
})

// data 이미지 채우기
const dataImageArrays = ['../../images/python.PNG', '../../images/pandas.PNG', '../../images/seaborn.PNG']

dataImageArrays.forEach((el) => {
  const imgTag = `<img src=${el} >`
  dataImgaeBox.innerHTML += imgTag
})
