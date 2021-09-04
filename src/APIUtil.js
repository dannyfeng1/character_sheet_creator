const APIUtil = {
  
  async getClassInfo(dndclass) {
    const response = await fetch(`https://www.dnd5eapi.co/api/classes/${dndclass}`);
    if (!response.ok) {
      throw new Error('Could not fetch information');
    }
    const data = await response.json();
    console.log(data)
    return data
    // fetch(`https://www.dnd5eapi.co/api/classes/${dndclass}`)
    // .then(response => response.json())
    // .then(data => {
    //   return data
    // })
  },
  
}

export {APIUtil};