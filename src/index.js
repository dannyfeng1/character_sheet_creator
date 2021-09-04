import {APIUtil} from './APIUtil.js';
import {DisplayInfo} from './displayInfo.js'

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
    e.stopPropagation()
    let dndclass = e.target.value.toString();
    let classData = APIUtil.getClassInfo(dndclass);
    let classDisplay = document.querySelector("#class-display");

    classData.then(classData => {
      classDisplay.innerHTML = "";
      let classDisplayInfo = DisplayInfo.createClassInfo(classData);
      classDisplay.append(classDisplayInfo);
    })
  }

  classOptions.forEach(option => {
    option.addEventListener("click", showClassInfo);
  })

  let raceOptions = document.querySelectorAll(".race-select");
  const showRaceInfo = (e) => {
    e.stopPropagation();
    let race = e.target.value.toString();
    let raceData = APIUtil.getRaceInfo(race);
    let raceDisplay = document.querySelector("#race-display");

    raceData.then(raceData => {
      raceDisplay.innerHTML = "";
      let raceDisplayInfo = DisplayInfo.createRaceInfo(raceData);
      raceDisplay.append(raceDisplayInfo)
    })
  }

  raceOptions.forEach(option => {
    option.addEventListener("click", showRaceInfo)
  })
})