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


//? Comment out all the logic/my own understanding of it/interpretation with blue comments like this one.



export const gameDetails = {   
    title: 'Zappeton',
    desc: 'Welcome to the world of... here are some quick rules & concepts...',
    author: 'Dan Bauer',
    cohort: 'SBPT-June-2023',
    startingRoomDescription: 'Your goal, like the real Patriots, is to get from the football field to the toilet. You are standing in front of a huge crowd. You see a football on the ground and a big yellow goalpost and ahead of you is the tunnel.',
    playerCommands: [
        // replace these with your games commands as needed
        'move', 'inspect', 'pickup', 'drop', 'inventory'
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}

// Your code here

//! Make a class of room with exits, descriptions, and items (which are arrays).

class Item {
    constructor(name, description, location, moveable) {
        this.name = name,
        this.description = description,
        this.location = location,
        this.moveable = moveable
    }
    describeItem(item) {
        return item.description;
    }
};

class Room {
    constructor(description, items, exits) {
        this.description = description,
        this.items = items,
        this.exits = exits
    }
    describeRoom(room) {
        return room.description;
    }
};

//? Items -- football, goalpost, money, bike, helmet, locker, soap, toilet
//? Rooms -- field, tunnel, lockers, bathroom

const football = new Item('Pigskin', "Arnold's head", 'field', true);
const goalpost = new Item('Posty', 'a big yellow structure', 'field', false);
const field = new Room("You are standing in front of a huge crowd. You see a football on the ground and a big yellow goalpost and ahead of you is the tunnel.", [goalpost, football], "tunnel");

const money = new Item('Ben Franklin', 'green paper you can buy stuff with', 'tunnel', true);
const bike = new Item('bikey', 'a thing you do warmups on', 'tunnel', false);
const tunnel = new Room("You are standing between the field of play and the private area for players and coaches. You see roaring fans, loose money sitting in the corner, and players huddled by the stationary bike.", [money, bike], ["field", "lockers"]);

const helmet = new Item('Helmy', "a thing to wear so you don't get concussed", 'lockers', true);
const locker = new Item('Locky', 'a place to store your clean threads', 'lockers', false);
const lockers = new Room("You are in a smelly atmosphere before and especially after the game. This is where speeches happen, and there are helmets and lockers abound.", [helmet, locker], ["tunnel", "bathroom"]);

const soap = new Item('Soapy', 'a slippery cleaning product', 'bathroom', true);
const toilet = new Item('Toily', 'A place to go when nature calls', 'bathroom', false);
const bathroom = new Room('a place to do ya bidness', [soap, toilet], "lockers");

let roomDictionary = {
    'field': field,
    'tunnel': tunnel,
    'lockers': lockers,
    'bathroom': bathroom
};

let itemDictionary = {
    'football': football,
    'goalpost': goalpost,
    'money': money,
    'bike': bike,
    'helmet': helmet,
    'locker': locker,
    'soap': soap,
    'toilet': toilet
};

let currentRoom = field;
let playerInventory = [];

//* Comment out my strat here

console.log(currentRoom);

export const domDisplay = (playerInput) => { 

    let [command, object] = playerInput.split(" ");

    // if (command !== 'move' || 'inspect' || 'pickup' || 'drop' || 'inventory') {
    //     return `I don't know how to ${command}`;
    // }

    if (command === 'move') {
        if (currentRoom.exits.includes(object)) {
            currentRoom = roomDictionary[object]
            console.log(currentRoom);
            return currentRoom.describeRoom(currentRoom);
        } else {
            return `Headed down the wrong path there, partner. ${currentRoom.describeRoom(currentRoom)}`
        }
    }

    if (command === 'inspect') {
        if (currentRoom.items.includes(itemDictionary[object])) {
            return `${itemDictionary[object].describeItem(itemDictionary[object])}. ${currentRoom.describeRoom(currentRoom)}`
        } else {
            return `You're as blind as Mac Jones! Give your item a second glance: ${currentRoom.describeRoom(currentRoom)}`
        }
    }

    if (command === 'pickup') {
        if (currentRoom.items.includes(itemDictionary[object]) && itemDictionary[object].moveable === true) {
            let foundItem = currentRoom.items.indexOf(itemDictionary[object]);
            currentRoom.items.splice(foundItem, 1);
            playerInventory.push(itemDictionary[object])
            console.log(playerInventory);
            console.log(currentRoom.items);
            return `You've picked up the ${object}. Congrats!(?) ${currentRoom.describeRoom(currentRoom)}`
        } else if (playerInventory.includes(itemDictionary[object])) {
            return `You already picked that up! ${currentRoom.describeRoom(currentRoom)}`
        } else if (currentRoom.items.includes(itemDictionary[object]) && itemDictionary[object].moveable === false) {
            return `That won't budge! ${currentRoom.describeRoom(currentRoom)}`
        }
        
        else {
            return `You can't pick that up! ${currentRoom.describeRoom(currentRoom)}`
        }
        
    }

    if (command === 'drop') {
        if (playerInventory.includes(itemDictionary[object])) {
            let foundItem = playerInventory.indexOf(itemDictionary[object]);
            playerInventory.splice(foundItem, 1);
            currentRoom.items.push(itemDictionary[object]);
            console.log(currentRoom.items);
            console.log(playerInventory);
            return `You've dropped the ${object} like our receivers drop passes. ${currentRoom.describeRoom(currentRoom)}`
        } else {
            return `You can't drop what you've never picked up to begin with. ${currentRoom.describeRoom(currentRoom)}`
        }
    }

    if (command === 'inventory') {
        let returnedInventory = playerInventory.map(inventory => inventory.name);
        return `In your tour de misery here at Gilette, you've pickup up: ${returnedInventory}. ${currentRoom.describeRoom(currentRoom)}`;
    }





        // TODO: for students
    //     - This function must return a string. 
            
    //     - This will be the information that is displayed within the browsers game interface above the users input field.
    //     - This function name cannot be altered. 
    //     - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
    //         - test this out with a console log.

    //     What your player should be able to do (checklist):
    //         - move between rooms
    //         - view current room
    //         - pickup moveable items
    //             - there should be at least 2 items that cannot be moved.
    //         - view player inventory
        
    //     Stretch Goals:
    //         - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
    //         - create win/lose conditions.
    //             - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

    //     HINTS:
    //         - consider the various methods that are available to use.
    //         - arrays are a great way to hold "lists".
    //         - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
    //         - Review notes!
    //             - Have them open as you build.
    //             - break down each problem into small chunks
    //                 - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    // */

    // Your code here
} 
