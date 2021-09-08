import { APIUtil } from "./APIUtil";

class RaceInfo {

  static raceName(raceData) {
    let raceName = document.createElement("h2");
    raceName.innerHTML = raceData.name;
    return raceName
  }

  static raceDescription(raceData) {
    let raceDescription = document.createElement("div");
    raceDescription.innerHTML = `${raceData.age + " " + raceData.alignment + " " + raceData.size_description + " " + raceData.language_desc}`
    raceDescription.append(document.createElement("br"));
    raceDescription.append(document.createElement("br"));

    return raceDescription;
  }

  static raceTraits(raceData) {
    let traitList = document.createElement("div");
    if (!raceData.traits.length) return traitList;
    traitList.innerHTML = "<strong>List of race traits</strong>";
    raceData.traits.forEach(trait => {
      let traitInfo = document.createElement("li");
      APIUtil.getTraitInfo(trait.index).then(traitAPICall => {
        traitInfo.innerHTML = trait.name + " - " + traitAPICall.desc;
      })
      traitList.append(traitInfo);
    })
    return traitList;
  }
}

export {RaceInfo}