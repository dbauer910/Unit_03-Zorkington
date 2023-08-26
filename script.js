/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

export const gameDetails = {   
    title: 'the Best Zonkington Ever Made',
    desc: 'Welcome to the world of... here are some quick rules & concepts...',
    author: 'Student Name',
    cohort: 'SBPT-2022',
    startingRoomDescription: 'What you see before you is...',
    playerCommands: [
        // replace these with your games commands as needed
        'inspect', 'view', 'look', 'pickup',
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}

// Your code here

//! Make a class of room with exits, descriptions, and items (which are arrays).

class room {
    constructor(exit, description, items) {
        this.exit = exit;
        this.description = description;
        this.items = [];
    }

    listOfItems (newItems) {
        this.items.push(newItems);
        console.log('New items added to "Items" list');
    }
}

// Make different instance of room classes

let bathroom = new room("Window, Door", "Gross, crowded", "Sink, toilet, urinal");
let kitchen = new room("Back porch screen door", "cozy, welcoming, inviting", "rolling pan, pots, knives, salt shakers");
let diningRoom = new room("Front door", "comfortable, formal", "plates, candles, utensils");

console.log(bathroom);
console.log(typeof room.items);


// then make item class, different instances of itmes needed [see cookie notes]

class items {
    constructor(weapon, tool) {
    this.weapon = weapon
    this.tool = tool
}
}

let useless = new items("paper towel roll", "fly-swatter");
let useful = new items("knife", "wrench");

//* Truthfully, I don't think I got this last part correct. I wasn't sure if you wanted me to do anything beyond just making a new item class, or whether 'making different instances of items' here meant doing a similar thing to what I did on lines 49-51 (making new instances of a class). I did the latter on lines 66-67, but it felt like I was merely repeating a previous action here, and feel like there's something more the assigment was looking for.



export const domDisplay = (playerInput) => { 
    
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */

    // Your code here
} 
