import {APIUtil} from './APIUtil.js';
import {DisplayInfo} from './displayInfo.js'
import {Character} from './character.js';

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
      if (genderRadio.checked) charOptions["gender"] = genderRadio.id
    })
    document.querySelectorAll(".class-select").forEach(classRadio => {
      if (classRadio.checked) charOptions["class"] = classRadio.id
    })
    document.querySelectorAll(".race-select").forEach(raceRadio => {
      if (raceRadio.checked) charOptions["race"] = raceRadio.id
    })
    
    let character = new Character(charOptions);
    let characterSheet = character.createCharacterSheet();

    let sheetElement = document.querySelector("#character-sheet");
    sheetElement.append(characterSheet);

    let raceDisplay = document.querySelectorAll(".race-info")
    raceDisplay.forEach(ele => {
      ele.classList.add('hidden');
    })

    document.querySelectorAll(".sheet-display").forEach(el => {
      el.classList.remove('hidden')
    })

  }

  createButton.addEventListener("click", submitCharForm)

  function addToSheetInfo(element) {
    let sheetInfo = document.querySelector("#info-dice-box");

    if (sheetInfo.childElementCount >= 5) {
      let firstInfo = sheetInfo.childNodes[1]
      firstInfo.remove()
      sheetInfo.append(element)
    } else {
      sheetInfo.append(element)
    }
  }

  let hpDesc = document.createElement("p");
  hpDesc.innerHTML = "Hit points are the amount of damage your character can sustain before being rendered unconcious or dead. On level-up, hp gain is determined through a die roll based on their class and add their consitution modifier to the result.";
  document.body.addEventListener("click", function (e) {
    if (e.target.id === 'hit-points') {
      addToSheetInfo(hpDesc)
    }
  });

  let ACDesc = document.createElement("p");
  ACDesc.innerHTML = "Your armor class determines how difficult you are to hit during combat. A combatant must roll a die and meet or beat your AC in order to damage you. Ways to increase AC include shields, spells, dexterity score increases, and armor."
  document.body.addEventListener("click", function (e) {
    if (e.target.id === 'armor-class') {
      addToSheetInfo(ACDesc)
    }
  });

  let profDesc = document.createElement("p");
  profDesc.innerHTML = "Your proficiency bonus is the bonus applied to dice rolls for equipment or skills that you are proficient in. This modifier will increase based on your level.";
  document.body.addEventListener("click", function (e) {
    if (e.target.id === 'proficiency-bonus') {
      addToSheetInfo(profDesc);
    }
  });

  document.body.addEventListener("click", function(e) {
    if (e.target.classList.contains("saving-throw")) {
      let abilityScoreDesc = document.createElement("p");
      let abilityData = APIUtil.getAbilityScore(e.target.dataset.abilityapi);
      abilityData.then(abilityData => {
        abilityScoreDesc.innerHTML = abilityData.desc.join()
      })
      addToSheetInfo(abilityScoreDesc)
    }
  })

  document.body.addEventListener("click", function(e) {
    if (e.target.classList.contains("skill-check")) {
      let skillDesc = document.createElement("p");
      let skillData = APIUtil.getSkillInfo(e.target.dataset.skillapi);
      skillData.then(skillData => {
        skillDesc.innerHTML = skillData.desc
      })
      addToSheetInfo(skillDesc)
    }
  })
})