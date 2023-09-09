"use strict";
var myName = "hamza";
console.log(myName);
var storeName = "ali";
var NameInLowercase = storeName.toLowerCase();
console.log(NameInLowercase);
var NameInUppercase = storeName.toUpperCase();
console.log(NameInUppercase);
var author = "AlbertEinstein";
var Quote = "a person who never made a mistake never tried anything";
console.log((author), "once said", (Quote));
var personNameWithVariable = " /t      hamza/n    ";
console.log(personNameWithVariable);
var numberStripped = "john        doe ".trim();
console.log(numberStripped);
var num1 = 2;
var num2 = 4;
console.log(num1 + num2);
console.log(num2 - num1);
console.log(num1 * num2);
console.log(num2 / num1);
//hamza//
//i ant //hamza
const list = ["ali", "ahmad", "hamza"];
for (const name of list) {
    console.log(name);
}
const names = ["ali", "ahmad", "hamza"];
for (const name of names) {
    console.log('hello,${name}! have a good day!');
}
const transportation = ["car", "bicycle", "cycle"];
for (const like of transportation) {
    console.log(`i liked  ${like}.yes`);
}
const guestlist = ["ali", "ahad", "zahid"];
function sendDinnerInvitation(guest) {
    console.log(`dear ${guest},/n you areinvited to join`);
}
for (const guest of guestlist) {
    sendDinnerInvitation(guest);
}
guestlist.unshift("ali");
guestlist.push("saad");
console.log("guestlist");
let placeToVisit = ["tokyo", "japan", "lahore", "fsd"];
console.log("original order:");
console.log(placeToVisit);
console.log("/nAlphatical order:");
let alphaticalOrder = placeToVisit.slice().sort();
console.log("alhaticalOrder:", placeToVisit);
let sortedReverseAlphatical = [];
const city = ["lahore", "fsd", "karachi", "peshawar"];
console.log("list of famous city:");
city.forEach(city => console.log(city));
//object of typescript
const usa = { name: "United state of america",
    language: "english" };
console.log(usa.name);
console.log(usa.language);
//intentional error
const fruits = ["apple", "banna", "sugar"];
console.log(fruits[3]);
//corrected
const indexToAccess = 3;
if (indexToAccess < fruits.length) {
    console.log(fruits[indexToAccess]);
}
else {
    console.log("index is out of bounds!");
}
//conditional statement
let car;
console.log("is car =='subaru'? i predict true.");
console.log("va");
//check 2
console.log("Is car == 'honda'? i predict false");
//false
//check2
const str1 = "hello";
const str2 = "world";
const str3 = "hello";
console.log(str1 === str2);
console.log(str1 !== str2);
console.log(str1 !== str3);
console.log(str1.toLowerCase() === str3);
console.log(str1.toLowerCase() !== str2.toLowerCase());
const nm1 = 10;
const nm2 = 18;
const nm3 = 10;
console.log(nm1 === nm2);
console.log(nm1 !== nm2);
console.log(nm1 < nm2);
//alian color
const alien_color_pass = 'green';
if (alien_color_pass === 'green') {
    console.log('congratulation !you earned 5 points');
}
const alien_color_fail = 'yellow';
if (alien_color_fail === 'green') {
    console.log('congralution !you earned 5 points');
}
;
//2 shooting
const alien_color_version1 = 'green';
if (alien_color_version1 === 'green') {
    console.log('congratulation !you just earned 5 pointsfor shhoting the green alien.');
}
else {
    console.log('congralutions!you just earned 10 points.');
}
const alien_color_version2 = 'red';
if (alien_color_version2 === 'green') {
    console.log('congralution !you earned 5 points for shooting green alien. ');
}
else
    [console.log('congralution !ypu just earned 10 points')];
//new
const alien_color_version3 = 'yellow';
if (alien_color_version2 === 'green') {
    console.log('congralution you earned 10 marks');
}
else {
    'congralution !you earned 15 marks';
}
//age if-else
const age = 25;
if (age < 2) {
    console.log("the person  is a baby");
}
else if (age >= 2 && age < 4) {
    console.log("the person is todle");
}
else if (age <= 5 && age < 13) {
    console.log("the person is kid");
}
else if (age >= 13 && age < 20) {
    console.group("the person is teenager");
}
else if (age >= 20 && age < 65) {
    console.log("the person is adult");
}
else {
    console.log("the person is older");
}
//fav fruits
const favorite_fruits = ["banna", "strawberry", "mango"];
if (favorite_fruits.includes("banna")) {
    console.log("you really like banna");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("you really like strawberry");
}
if (favorite_fruits.includes("mango")) {
    console.log("you really like mango");
}
if (favorite_fruits.includes("apple")) {
    console.log("you really like not apple");
}
else
    (console.log("it is not my type"));
//arrray of username
const usernames = ['admin', 'ali', 'haider', 'afzal'];
function printGreating(usernames) {
    for (const username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log(`hello ${username},would you like to see me`);
        }
        else {
            console.log(`hello ${username},thank for logging`);
        }
    }
}
printGreating(usernames);
//2
// Array of usernames
const useres = ['admin', 'Eric', 'John', 'Jane', 'admin123'];
// Function to print greetings
function printGreetings(useres) {
    if (useres.length === 0) {
        console.log("we need to find user!");
    }
    else {
        for (const username of useres) {
            if (username.toLowerCase() === 'admin') {
                console.log(`Hello ${username}, would you like to see a status report?`);
            }
            else {
                console.log(`Hello ${username}, thank you for logging in again.`);
            }
        }
    }
}
//new
// Array of usernames
let user = ['admin', 'Eric', 'John', 'Jane', 'admin123'];
// Check if the list is empty
if (user.length === 0) {
    console.log('We need to find some users!');
}
else {
    // Loop through the array and print greetings
    for (const username of user) {
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
// Remove all usernames from the array
user = [];
// Check if the list is empty again
if (usernames.length === 0) {
    console.log('We need to find some users!');
}
//new
// Current usernames list
const current_users = ['admin', 'Eric', 'John', 'Jane', 'admin123'];
// New usernames list
const new_users = ['John', 'Mike', 'Sarah', 'JaneDoe', 'Alex'];
// Check if each new username is unique
for (const new_username of new_users) {
    const isUsernameTaken = current_users.some((current_username) => current_username.toLowerCase() === new_username.toLowerCase());
    if (isUsernameTaken) {
        console.log(`Sorry, the username '${new_username}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_username}' is available.`);
    }
}
//new
// Array of numbers from 1 to 9
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array and print the proper ordinal ending for each number
for (const number of numbers) {
    let ordinalEnding;
    if (number === 1) {
        ordinalEnding = 'st';
    }
    else if (number === 2) {
        ordinalEnding = 'nd';
    }
    else if (number === 3) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = 'th';
    }
    console.log(`${number}${ordinalEnding}`);
}
//new
const favoritePizza = ['bbq', 'chicken', 'villagepizza'];
for (const pizza of favoritePizza) {
    console.log(`i like ${pizza} very much`);
}
console.log("i like all pizza");
const animals = ['dog', 'rabbit', 'fish'];
for (const animal of animals) {
    console.log(`${animal} is good pet`);
}
console.log(" this is true pet");
//shirt
function make_shirt(size, message) { console.log(`shirt size:${size}, message:${message}`); }
make_shirt("large", "i love typescript");
function describecity(city, country = "unknown") { console.log(`${city} is ${country}`); }
describecity("karachi", "pakistan");
describecity("london", "uk");
describecity("new york");
//new4= 
function citycountry(city, country) { return ` '${city}, is that${country} `; }
const city1 = citycountry("lahore", "pakistan");
console.log(city1);
function make_album(artist, title, tracks) {
    const album = { artist,
        title, };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album = [];
album.push(make_album("artist1", "album1", 12));
album.push(make_album("artist2", "album2"));
console.log(album);
//magician
function showmagicians(magicians) {
    magicians.forEach((name) => {
        console.log(name);
    });
}
const magicians = ["john", "alice", "david"];
showmagicians(magicians);
//
function make_great(magician) {
    const greatMagicians = magician.map((name) => {
        return `the great ${name} nb`;
    });
    return greatMagicians;
}
function showMagicians(magicians) {
    magicians.forEach((name) => {
        console.log(name);
    });
}
const gicians = ["john", "alice", "saad"];
const greatMagicians = make_great([...magicians]);
console.log("orginal magicians:");
showMagicians(magicians);
console.log(showMagicians);
showMagicians(greatMagicians);
//sandwitch
function orderSandwitch(...items) {
    console.log("sandwitch summary");
    console.log("bread +");
    if (items.length === 0) {
        console.log("nothing on the sandwitch.");
    }
    else {
        items.forEach((items) => { console.log(items + "+"); });
    }
    console.log("bread\n");
}
orderSandwitch("cheese", "butter", "tomoto");
function createCar(manufacturer, model, ...args) {
    const car = {
        manufacturer,
        model,
    };
    if (args.length > 0) {
        for (let i = 0; i < args.length; i += 2) {
            const key = args[i];
            const value = args[i + 1];
            car[key] = value;
        }
    }
    return car;
}
// Call the function with required information and additional name-value pairs
const carInfo = createCar("Toyota", "Camry", "color", "blue", "year", 2023);
// Print the object that's returned
console.log(carInfo);
