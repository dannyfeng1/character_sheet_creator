import {APIUtil} from './APIUtil.js';
import {DisplayInfo} from './displayInfo.js'
import { characterData } from './charData.js';

document.addEventListener("DOMContentLoaded", function() {
  
  let basicButton = document.querySelector('#basic-info-button');
  let classButton = document.querySelector('#class-info-button')

  // Initial View
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
// Class form view and submission rendering
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
  // class info API request and display
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
// race information display
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
// full form submission. refactor to properly use form data submission
  let createButton = document.querySelector("#race-info-button");

  const submitCharForm = (e) => {
    e.preventDefault();
    let charOptions = {};
    charOptions["name"] = document.querySelector("#characterName").value;
    charOptions["age"] = document.querySelector("#characterAge").value;
    document.querySelectorAll(".gender").forEach(genderRadio => {
      if (genderRadio.checked) charOptions["gender"] = genderRadio.value
    })
    document.querySelectorAll(".class-select").forEach(classRadio => {
      if (classRadio.checked) charOptions["class"] = classRadio.value
    })
    document.querySelectorAll(".race-select").forEach(raceRadio => {
      if (raceRadio.checked) charOptions["race"] = raceRadio.value
    })
    
    console.log(charOptions)
    let charOb
  }

  createButton.addEventListener("click", submitCharForm)
})