# D&D 5E Character Creator and Tutorial
## [Demo is now live!](https://dannyfeng1.github.io/dnd_for_newcomers/)

## About
  This application is a resource for Dungeons and Dragons Fifth Edition. D&D character creation is oftentimes one of the most overwhelming experiences for first time players. There are so many options and possibilities to explore due to the fantasy nature and large world of DnD. This application will streamline the character creation process by providing the user with digestable amounts of information in a step by step process. After creation, an interactable character sheet and a short text-based adventure will teach new players the basics of Dungeons and Dragons.

![image](https://user-images.githubusercontent.com/86497399/140419833-daef1311-05c8-4060-b1bc-dd141e3cb5fb.png)

 
 ## Functionality and MVPS
 With this application users will be able to:
  - Create a character through a guided process.
  - Generate a basic character sheet.
![image](https://user-images.githubusercontent.com/86497399/140420797-7f8d3df0-8510-447e-b067-df198d6669a9.png)


In addition, this application will include:
  - Learn the basic mechanics of the D&D system through a tutorial.
  - The ability to roll different types of dice.
  - A display box that records user requested information.
  - A character sheet with clickable elements that returns information.

![image](https://user-images.githubusercontent.com/86497399/140420170-65319416-be75-41d9-bde6-c63b849c48a0.png)


## Technologies, Libraries, APIs
The application will be built using: 
  - npm to manage project dependencies.
  - [The D&D 5th edition API](http://www.dnd5eapi.co/) to access a directory of D&D information.
  ```
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
  ```
  
  - 3JS for loading dice models from [this dice rolling program by Anton Natarov](http://www.teall.info/2014/01/online-3d-dice-roller.html)
  - Javascript for underlying logic of the program.
  - HTML/CSS to style the program for a better user experience.

## Bonus Features
Features that could be added in the future: 
  - Images that will display when options are selected.
  - A more robust tutorial of the mechanics.
  - A tutorial for rolling base ability scores.
  - A resource list for new players.
