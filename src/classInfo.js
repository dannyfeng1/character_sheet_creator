const CLASS_DESCRIPTION = {
  "Barbarian": "Barbarians are warriors that fight on the battlefield with an unbridled rage. This rage gives them extra strength behind each of their swings. Along with having the largest hit die (HP per level) in the game, barbarians take halved physical damage while raging, creating allowing them to absorb much more damage than other classes. Due to this rage mechanic, barbarians offer little utility to their team aside from being a damage dealing tank. Other features include fighting recklessly and unarmored without concern for bodily harm. A barbarian's main stats are strength and consitution. Often, this stat distribution will lead to a brutish character that is the stereotypical meathead fighter, however, your character's traits will be determined by the way you play them!",
  "Bard": "Bards are traveling performers, oftentimes story-tellers or musicians. As a seasoned traveler, they are a jack of all trades, allowing them to perform all tasks with some level of confidence. Bards utilize the magic of song and speech to perform ther feats. While they can learn most spells, they lean towards a supportive role on the sidelines of combat instead of directly engaging with the enemy. A bard's words will inspire their allies, demoralize foes, manipulate minds, create illusions, and even heal wounds. A bard's main stat is charisma, creating a charming character that can talk themselves into and out of situations with ease. Their secondary stat will depend on the skill build you want your bard to have as they level up.",
  "Cleric": "Clerics are chosen by and granted powers by the god they worship. The classic cleric is a healer that throws ranged spells from the sidelines while supporting their team. However, clerics can also be played as a heavily armored mace wielder that can bolster allies whilst raining fire on enemies in the front lines. A cleric's Divine Domain is dependent on what they worship, it gives access to unique abilities that may not be accessible in the base cleric class. Their main stat is wisdom which leads to attention to detail and a good read on others. Their secondary stat is constituion to maintain concentration on their spells along with a larger hp pool to stay healthy. Strength or dexterity will be the third stat depending on build path.",
  "Druid": "Druids are worshippers of nature, they gain their spells and magical powers from nature itself. The ancient druidic traditions are known as the Old Faith to diffrentiate from the modern worship of gods in temples and shrines. Druid spells generally call upon the power of the elements: air, earth, fire, and water. Additionally, they call upon the power of animals through the Wild Shape ability that transforms them into animals, offering them much utility in and out of combat. A druid's man stat is wisdom which leads to attention to detail and a good read on others. Their secondary stat is consitution as druids need to be healthy to heal others and tank in Wild Shape forms.",
  "Fighter": "Fighters excel at what they're named after, fighting. They have access to all weapon types and armors. Most of their abilities keep them healthy in combat or allow to them to maximize the damage they deal. A classic fighter can be one-dimensional in that they are only good at one thing, hitting enemies...multiple times. However, a fighter has access to many subclasses that can provide a different playstyle, such as Eldritch Knight giving access too magic or Battle Master to influence the battlefield itself. A fighter's main stats are strength and dexterity depending on playstyle with consitution to keep them healthy in combat.",
  "Monk": "Monks excel at magically harnessing the Ki that flows through their bodies. Monks have mastery over unarmed combat and monk weapons. Due to using their own body as a weapon, monks do not deal as much damage as other melee fighters. However, their strikes gain special effects from Ki usage, allowing them to attack multiple times or disrupt the Ki of their enemies. A monk's main stat is dexterity making them lightfooted and mobile in and out of combat. Their high dexterity score also allows for effective usage of throwing items; at higher levels, a monk can deflect and even catch projectiles directed at themselves. Their secondary stat is wisdom to allowing them to read situations well and make sure status effects are applied on their Ki-enhanced abilities.",
  "Paladin": "Paladins are heavily-armored warriors that gain their power from an Oath to certain ideals, often under some god. Paladins fight on the front lines as a tank with supportive capabilities such as healing and party buffs. However, they have access to Divine Smites which allow them to do massive damage to enemies. Their Sacred Oaths are similar to a cleric's Divine Domain, they give access to unique spells and abilities that may not be included in the base paladin class. A paladin's main stat is strength to be effective in combat. Secondary stats are charisma for their spell casting abilities and constitution to be tankier in combat.",
  "Ranger": "Rangers are warriors of the wilderness. They specialize in hunting monsters navigating terrain and gain advantages (Favored Enemy and Natural Explorer) based on their experience. A ranger excels at combat from a distance and against multiple enemies. Outside of combat, a ranger has excellent survival skills, allowing their party to navigate through environments with ease. Often times, the ranger will scout ahead for the party. Rangers are semi-casters with access to a small list of spells allowing for general utility in a situation. A ranger's main stat is dexterity in order to be fleet-footed and capable with their hands. Their secondary stat is wisdom in order to be aware of their surroundings and any hidden dangers. ",
  "Rogue": "Rogues focus on cunning and precision over brute strength. This line of thinking allows them to maneuver unnoticed across the battlefield before inflicing a debilitating attack on unsuspecting foes. Rogues are skilled in many things that would raise questions amongst normal civilians. They have an uncanny knack for stealth and deception and a suspicous knowledge of traps and locks. Due to their expertise, rogues will often scout ahead for the party when in dangerous locations such as a dungeon or tomb. In addition, rogues will pick up a few magical tricks to aid in their missions. A rogue's main stat is dexterity to be able to slink around in and out of combat. Secondary stats are intelligence to be investigative of your surroundings or charisma to be deceptive with social interactions.",
  "Sorcerer": "Sorcerers gain their magical powers from their bloodline, otherworldly influences, or cosmic forces rather through studying the arcane arts like a wizard. Sorcerers have access to sorcery points that allow them to recover spell slots. Sorcerers have a shorter spell list than wizards but have access to Metamagic. Metamagic allows you to manipulate your spells to do extra damage, have different properties, or even duplicate spell casts. A Metamagic enhancement will utilize sorcery points. What they lack in utility and variety, they make up for being able to cause massive damage with meticulously curated spells. A sorcerer uses charisma as their main stat as they command the magic within them through their own will and personality. Secondary stat is constitution to remain healthy while fighting.",
  "Warlock": "Warlocks gain their power from dedicating themselves to an Eldritch being, often in pursuit of knowledge or power. Warlocks will have to follow the bidding of their patrons, leading to interesting interactions with the party if their goals align(or not). Warlocks are a full caster class with very strong but limited spells. Due to this, warlocks rely on frequent rests or their cantrips. A warlock's main stat is charisma as they make their own will and their patron's will a reality due to force of will. Secondary stat is constitution to keep themselves healthy during combat.",
  "Wizard": "Wizards gain access to their arcane abilities through devotion to their studies. A wizard's most important tool is their spell book which holds all the spells they have learned across their journeys. Due to their ability to extract arcane knowledge from all sources, wizards have access to the largest array of spells amongst the caster classes making them versatile in all situations, in combat and while adventuring. A wizard's main stat is intelligence as they require a keen mind to study the fundamental forces of magic. Depending on playstyle, secondary stats are constitution or dexterity."
}

class ClassInfo {

  static title(classData) {
    let classTitle = document.createElement("h2");
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
    proficiencies.innerHTML = "Proficiencies"
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