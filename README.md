# D&D 5E Character Creator and Tutorial

## Background
  This application is a resource for Dungeons and Dragons Fifth Edition. D&D character creation is oftentimes one of the most overwhelming experiences for first time players. There are so many options and possibilities to explore due to the fantasy nature and large world of DnD. This application will streamline the character creation process by providing the user with digestable amounts of information in a step by step process. After creation, an interactable character sheet and a short text-based adventure will teach new players the basics of Dungeons and Dragons.
 
 ## Functionality and MVPS
 With this application users will be able to:
  - Create a character through a guided process.
  - Generate a basic character sheet.
  - Learn the basic mechanics of the D&D system through a tutorial.

In addition, this application will include:
  - Roll dice with proper modifiers and bonuses.
  - A character sheet that reacts to user edits and modifies itself.
  - A character sheet with clickable elements that returns information.
  - A production README.

## Wireframes
![image](https://user-images.githubusercontent.com/86497399/131964592-d2ed364f-a1c5-4e82-a039-be7eab69ab24.png)
- Nav links will contain links to my Github, LinkedIn, and other DnD resources for first time players.
- Character sheet will be generated and interactable.
- Info box will display information requested from character sheet along with rolls generated from inputs through text.
- The character creation form will display options and a description will be displayed on the right based on the currently selected option.

## Technologies, Libraries, APIs
The application will be built using: 
  - npm to manage project dependencies.
  - [The D&D 5th edition API](http://www.dnd5eapi.co/) to access a directory of D&D information.
  - 3JS for creating dice models.
  - Javascript for underlying logic of the program.
  - HTML/CSS to style the program for a better user experience.

## Implementation Timeline
  - 9/3-9/5: Set up project, including webpack and postman to get comfortable with D&D 5E API. Make character creation form. Render multiple forms that create each other. Access the API to get information regarding selected character creation options. Create Character class that will take form info. 
  - 9/6: Create a basic character sheet that extrapolates info from Character object. Use the Character class to generate HTML elements for a character sheet to be rendered in HTML.
  - 9/7: Make an information display box. Make each character sheet element clickable and return a description to the display box. Refactor this to be used in character creation form. Create a dice roller that displays results.
  - 9/8: Focus on styling.
  - 9/9: Deploy to GitHub pages

## Bonus Features
Features that could be added in the future: 
  - A way to export the character sheet so users can save them.
  - Search bar for D&D resources.
  - Combatant creation.
