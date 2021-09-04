import {APIUtil} from './APIUtil.js';
document.addEventListener("DOMContentLoaded", function() {
  // let rogueInfo = APIUtil.getClassInfo("rogue");
  // console.log(rogueInfo)
  
  let basicButton = document.querySelector('#basic-info-button');
  let classButton = document.querySelector('#class-info-button')
  
  const submitBasicInfo = (e) => {
    e.preventDefault();
    let basicInfo = document.querySelectorAll('.basic-info');
    
    basicInfo.forEach(el => {
      el.classList.add('hidden')
    })
    
    let classInfo = document.querySelectorAll(".class-info")
    classInfo.forEach(ele => {
      ele.classList.remove('hidden')
      ele.classList.add('form-display')
    })

  }
  
  basicButton.addEventListener("click", submitBasicInfo)

  const submitClassInfo = (e) => {
    e.preventDefault();
    let classInfo = document.querySelectorAll('.class-info')
    classInfo.forEach(el => {
      el.classList.add('hidden')
    })
    
    let raceInfo = document.querySelectorAll(".race-info")
    raceInfo.forEach(ele => {
      ele.classList.remove('hidden')
      ele.classList.add('form-display')
    })

  }
  
  classButton.addEventListener("click", submitClassInfo)
  
  let classOptions = document.querySelectorAll(".class-select")
  const showClassInfo = (e) => {
    let dndclass = e.target.value.toString();
    let data = APIUtil.getClassInfo(dndclass);
    let display = document.querySelector("#class-display");
    data.then(() => {
      console.log(data)
      display.innerHTML = data
    })
    // display.innerHTML = data;
  }

  classOptions.forEach(option => {
    option.addEventListener("click", showClassInfo)
  })
})