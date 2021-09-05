class APIUtil {
  
  static async getClassInfo(dndclass) {
    const response = await fetch(`https://www.dnd5eapi.co/api/classes/${dndclass}`);
    if (!response.ok) {
      throw new Error('Could not fetch information');
    }
    const data = await response.json();
    return data
 
  }
  
  static async getRaceInfo(race) {
    const response = await fetch(`https://www.dnd5eapi.co/api/races/${race}`);
    if (!response.ok) {
      throw new Error('Could not fetch information');
    }
    const data = await response.json();
    return data;
 
  }

  static async getTraitInfo(trait) {
    const response = await fetch(`https://www.dnd5eapi.co/api/traits/${trait}`)
    if (!response.ok) {
      throw new Error('Could not fetch information');
    }
    const data = await response.json();
    return data;
  }
}

export {APIUtil};