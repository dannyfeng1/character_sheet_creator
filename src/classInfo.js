
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

class ClassInfo {

  static title(classData) {
    let classTitle = document.createElement("h1");
    classTitle.innerHTML = classData.name;
    return classTitle
  }

  static description(classData) {
    let desc = document.createElement("p");
    desc.innerHTML = CLASS_DESCRIPTION[`${classData.name}`];
    return desc;
  }

  static proficiencies(classData) {
    let proficiencies = document.createElement("div")
    proficiencies.innerHTML = "Proficienicies"
    let baseProficiencies = classData.proficiencies ;
    for(let i = 0; i < baseProficiencies.length; i++) {
      let prof = document.createElement("li");
      prof.innerHTML = baseProficiencies[i].name;
      proficiencies.append(prof);
    } 
    return proficiencies
  }

  static bonusProficiencies(classData) {
    let bonusProfs = document.createElement("div");
    bonusProfs.innerHTML = "Bonus Proficiencies(Choose 2)"
    let bonusChoices = classData.proficiency_choices[0].from
    for(let i = 0; i < bonusChoices.length; i++) {
      let prof = document.createElement("li");
      prof.innerHTML = bonusChoices[i].name;
      bonusProfs.append(prof);
    } 
    return bonusProfs
  }
}

export {ClassInfo}