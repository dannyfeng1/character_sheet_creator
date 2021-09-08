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
    let sheetInfo = document.querySelector("#info-box");

    if (sheetInfo.childElementCount >= 5) {
      let firstInfo = sheetInfo.childNodes[1]
      firstInfo.remove()
      sheetInfo.append(element)
    } else {
      sheetInfo.append(element)
    }
  }

  let hpDesc = document.createElement("p");
  hpDesc.innerHTML = "<strong>Hit points</strong> are the amount of damage your character can sustain before being rendered unconcious or dead. On level-up, hp gain is determined through a die roll based on their class and add their consitution modifier to the result.";
  document.body.addEventListener("click", function (e) {
    if (e.target.id === 'hit-points') {
      addToSheetInfo(hpDesc)
    }
  });

  let ACDesc = document.createElement("p");
  ACDesc.innerHTML = "<strong>Armor Class</strong> determines how difficult you are to hit during combat. A combatant must roll a die and meet or beat your AC in order to damage you. Ways to increase AC include shields, spells, dexterity score increases, and armor."
  document.body.addEventListener("click", function (e) {
    if (e.target.id === 'armor-class') {
      addToSheetInfo(ACDesc)
    }
  });

  let profDesc = document.createElement("p");
  profDesc.innerHTML = "<strong>Proficiency Bonus</strong> is the bonus applied to dice rolls for equipment or skills that you are proficient in. This modifier will increase based on your level.";
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
        abilityScoreDesc.innerHTML = `<strong>${abilityData.full_name}</strong> ` + abilityData.desc.join(" ").split(" ").slice(1).join(" ")
      })
      addToSheetInfo(abilityScoreDesc)
    }
  })

  document.body.addEventListener("click", function(e) {
    if (e.target.classList.contains("skill-check")) {
      let skillDesc = document.createElement("p");
      let skillData = APIUtil.getSkillInfo(e.target.dataset.skillapi);
      skillData.then(skillData => {
        skillDesc.innerHTML = `<strong>${skillData.name}</strong>: ` + skillData.desc
      })
      addToSheetInfo(skillDesc)
    }
  })

  let farmerOne = document.querySelector("#farmer-one");
  let farmerTwo = document.querySelector("#farmer-two");
  let tutorialHead = document.querySelector("#tutorial-head");
  let tutorialText = document.querySelector("#tutorial-text");
  let tutorialInstructions = document.querySelector("#tutorial-instruction");

  const farmerOneChoice = (e) => {
    tutorialHead.innerHTML = "You attempt an intimidation check!";
    tutorialText.innerHTML = "You put on your meanest look and your most intimidating voice and bark at the farmer where the nearest inn is.";
    tutorialInstructions.innerHTML = "For information regarding intimidation checks, click on 'Intimidation(CHA) on the character sheet. Roll a 20 sided die(d20) and add your charisma modifier to the result. Your modifier follows the stat value in parentheses. Was your result above a 10?";
    farmerOne.classList.add("hidden");
    farmerTwo.classList.add("hidden");
    document.querySelectorAll(".first-roll").forEach(ele => {ele.classList.remove("hidden")})
  }

  const farmerTwoChoice = (e) => {
    tutorialHead.innerHTML = "You attempt a persuasion check!";
    tutorialText.innerHTML = "You flash a bright smile and use your friendliest voice to inquire the farmer where the inn is.";
    tutorialInstructions.innerHTML = "For information regarding persuasuion checks, click on 'Intimidation(CHA) on the character sheet. Roll a 20 sided die(d20) and add your charisma modifier to the result. Your modifier follows the stat value in parentheses. Was your result above a 10?";

    farmerOne.classList.add("hidden");
    farmerTwo.classList.add("hidden");
    document.querySelectorAll(".first-roll").forEach(ele => {ele.classList.remove("hidden")})
  }

  farmerOne.addEventListener("click", farmerOneChoice)
  farmerTwo.addEventListener("click", farmerTwoChoice)

  let successOne = document.querySelector("#success-one");
  let failOne = document.querySelector("#fail-one");

  const farmerSuccess = (e) => {
    tutorialHead.innerHTML = "You succesfully convinced him to give you the location of the inn!";
    tutorialText.innerHTML = "The difficulty class of convincing the farmer was 10, meaning you had to meet or beat 10 in order for your action to succeed. You make your way towards the Fallbrook Inn, the farmer informed you that it's approximately an hour away.";
    tutorialInstructions.innerHTML = "Roll a perception check as you travel on the main road. Roll a d20 and add your wisdom modifier to it. Did you roll higher than a 14?"

    successOne.classList.add("hidden");
    failOne.classList.add("hidden");
    document.querySelectorAll(".second-roll").forEach(ele => {ele.classList.remove("hidden")});
  }
  
  const farmerFail = (e) => {
    tutorialHead.innerHTML = "The farmer did not stir from his nap and continues ignoring you."
    tutorialText.innerHTML = "You decide to continue going down the main road in hopes that a town and a nice comfy place to rest is in that direction."
    tutorialInstructions.innerHTML = "Roll a perception check as you travel on the main road. Roll a d20 and add your wisdom modifier to it. Did you roll higher than a 14?"

    successOne.classList.add("hidden");
    failOne.classList.add("hidden");
    document.querySelectorAll(".second-roll").forEach(ele => {ele.classList.remove("hidden")});
  }


  successOne.addEventListener("click", farmerSuccess);
  failOne.addEventListener("click", farmerFail)

  let successTwo = document.querySelector("#success-two");
  let failTwo = document.querySelector("#fail-two");

  const roadSuccess = (e) => {
    tutorialHead.innerHTML = "You detected a nefarious goblin attempting to catch you off guard.";
    tutorialText.innerHTML = "The goblin does not realize that you have noticed him. You pull out a throwing knife and throw it directly at him.";
    tutorialInstructions.innerHTML = "You have advantage on this initial attack. Please roll two d20s and take the higher value. The armor class (AC) of the goblin is 12, if either rolls are higher than 12, you hit him. Did you hit him?";
    
    successTwo.classList.add("hidden");
    failTwo.classList.add("hidden");
    document.querySelectorAll(".ranged-combat").forEach(ele => {ele.classList.remove("hidden")});
  }

  const roadFail = (e) => {
    tutorialHead.innerHTML = "You noticed that there footprints that lead off the trail.";
    tutorialText.innerHTML = "A goblin jumps out of the bushes as you were examining the trail. He catches you by surprise and has advantage to hit you! He throws a dart at you!";
    tutorialInstructions.innerHTML = "Due to advantage, the goblin rolls two d20s to try and hit you. Unfortunately, he rolls a 13 and a 7. Your armor class(AC) is 14 so his blow dart narrowly misses you. You pull out a throwing knife and return fire! The goblin's AC is 10, roll a d20. Did you hit him?"

    successTwo.classList.add("hidden");
    failTwo.classList.add("hidden");
    document.querySelectorAll(".ranged-combat").forEach(ele => {ele.classList.remove("hidden")});
  }

  successTwo.addEventListener("click", roadSuccess)
  failTwo.addEventListener("click", roadFail)

  let combatOneSuccess = document.querySelector("#combat-one-success");
  let combatOneFail = document.querySelector("#combat-one-fail");

  const knifeHit = (e) => {
    tutorialHead.innerHTML = "You hit the goblin directly in his torso!";
    tutorialText.innerHTML = "The goblin howls in pain and grovels on the ground. Roll for damage. A knife is a melee weapon. When a melee weapon is thrown its damage bonus is based on your strength modifier. However, a knife counts as a finesse weapon and can get a bonus based on your dexterity modifier as well. Ranged weapons also utilize a dex modifier.";
    tutorialInstructions.innerHTML = "Roll a 1d4 for the knife's base damage and add your DEX or STR modifier, whichever is higher. Did you roll a 5 or higher?";

    combatOneSuccess.classList.add("hidden");
    combatOneFail.classList.add("hidden");
    document.querySelectorAll(".knife-damage").forEach(ele => {ele.classList.remove("hidden")});
  }

  const knifeMiss = (e) => {
    tutorialHead.innerHTML = "The goblin barely manages to evade a direct hit.";
    tutorialText.innerHTML = "The goblin is blinded as the knife grazed his eyebrow. The blood from the cut blocks his vision.";
    tutorialInstructions.innerHTML = "As the goblin is blinded, you have advantage on your next attack. Roll two d20s and take the higher roll. If either number is greater than 10, you succesfully hit him!";

    combatOneSuccess.classList.add("hidden");
    combatOneFail.classList.add("hidden");
    document.querySelectorAll(".second-attack").forEach(ele => {ele.classList.remove("hidden")});
  }

  combatOneSuccess.addEventListener("click", knifeHit)
  combatOneFail.addEventListener("click", knifeMiss)

  const goblinFlee = (e) => {
    tutorialHead.innerHTML = "The goblin dodges and flees!";
    tutorialText.innerHTML = "The goblin realizes that he is sorely outmatched and scurries back into the forest.";
    tutorialInstructions.innerHTML = "You continue towards Fallbrook and eventually approach the inn.";

    e.target.classList.add("hidden");
    document.querySelector("#combat-two-success").classList.add("hidden");
    document.querySelector("#finish-tutorial").classList.remove("hidden");
  }

  document.querySelector("#combat-two-success").addEventListener("click", knifeHit);
  document.querySelector("#combat-two-fail").addEventListener("click", goblinFlee);

  let goblinDeath = document.querySelector("#damage-kill");
  let goblinMercy = document.querySelector("#damage-surrender");

  const goblinDefeat = (e) => {
    tutorialHead.innerHTML = "The goblin was defeated!";
    tutorialText.innerHTML = "You search the goblin and find one gold coin and a strange document with words you do not recognize."
    tutorialInstructions.innerHTML = "You continue towards Fallbrook and eventually approach the inn."

    goblinDeath.classList.add("hidden");
    goblinMercy.classList.add("hidden");
    document.querySelector("#finish-tutorial").classList.remove("hidden");
  }

  document.querySelectorAll(".knife-damage").forEach(e => {
    e.addEventListener("click", goblinDefeat)
  })

  const finishTutorial = (e) => {
    let tutorialDiv = document.querySelector("#tutorial")
    tutorialDiv.classList.add("hidden")
    let finishTutorialMessage = document.createElement("p")
    finishTutorialMessage.innerHTML = "<strong>Congratulations on finishing the tutorial! Continue clicking on the elements on the character sheet for more information on common skills and terms in Dungeons and Dragons! I hope this application has been insightful and I wish you the best on your future Dungeons and Dragons Adventures!</strong>"
    addToSheetInfo(finishTutorialMessage)
  }

  let tutorialComplete = document.querySelector("#finish-tutorial")
  tutorialComplete.addEventListener("click", finishTutorial);
})