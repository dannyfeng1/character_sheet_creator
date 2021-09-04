const CLASS_DESCRIPTION = {
  "Barbarian": "Barbarian description",
  "Bard": "Bard description",
  "Cleric": "Cleric description",
  "Druid": "Druid description",
  "Fighter": "Fighter description",
  "Monk": "Monk description",
  "Paladin": "Paladin description",
  "Ranger": "Ranger description",
  "Rogue": "Rogue description",
  "Sorceror": "Sorceror description",
  "Warlock": "Warlock description",
  "Wizard": "Wizard description"
}

class DisplayInfo {
 

  static createClassInfo(classData) {
    let container = document.createElement("div");
    let classTitle = document.createElement("h1");
    classTitle.innerHTML = classData.name;
    container.append(classTitle);
    
    let description = document.createElement("p");
    description.innerHTML = CLASS_DESCRIPTION[`${classData.name}`];
    container.append(description);

    let proficiencies = document.createElement("div")
    proficiencies.innerHTML = "Proficienicies"
    container.append(proficiencies)
    let baseProficiencies = classData.proficiencies ;
    for(let i = 0; i < baseProficiencies.length; i++) {
      let prof = document.createElement("li");
      prof.innerHTML = baseProficiencies[i].name;
      proficiencies.append(prof);
    } 

    let bonusProfs = document.createElement("div");
    bonusProfs.innerHTML = "Bonus Proficiencies(Choose 2)"
    container.append(bonusProfs)
    let bonusChoices = classData.proficiency_choices[0].from
    for(let i = 0; i < bonusChoices.length; i++) {
      let prof = document.createElement("li");
      prof.innerHTML = bonusChoices[i].name;
      bonusProfs.append(prof);
    } 

    return container
  }

  static createRaceInfo(raceData) {
    console.log(raceData)
    let container = document.createElement("div");
    let raceName = document.createElement("h1");
    raceName.innerHTML = raceData.name;
    container.append(raceName);
    
    let raceDescription = document.createElement("div");
    container.append(raceDescription);
    raceDescription.innerHTML = `${raceData.age + " " + raceData.alignment + " " + raceData.size_description + " " + raceData.language_desc}`
  
    let traits = document.createElement("div");
    traits.innerHTML = "List of race traits"
    container.append(traits);
    raceData.traits.forEach(trait => {
      let traitList = document.createElement("li");
      traitList.innerHTML = trait.name
      traits.append(traitList)
    })


    return container
  }
}

export {DisplayInfo}