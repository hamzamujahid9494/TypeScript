var myName:string="hamza";
console.log(myName)
var storeName:string="ali";
var NameInLowercase:string=storeName .toLowerCase();
console.log( NameInLowercase)
var NameInUppercase:string=storeName .toUpperCase();
console.log(NameInUppercase)
var author:string="AlbertEinstein"
var Quote:string="a person who never made a mistake never tried anything"
console.log( (author) ,"once said" ,(Quote) )
var personNameWithVariable:string= " /t      hamza/n    "
console.log(personNameWithVariable)
var numberStripped:string=       "john        doe " .trim()

console.log(numberStripped)
var num1:number=2
var num2:number=4
console.log(num1+num2)
console.log(num2-num1)
console.log(num1*num2)
console.log(num2/num1)
//hamza//
//i ant //hamza
const list: string[] =["ali","ahmad","hamza"];
for (const name of list)
{console.log(name)}
const names: string[] =["ali","ahmad","hamza"];
for (const name of names)
{console.log('hello,${name}! have a good day!'); }
const transportation :string[]=["car","bicycle","cycle"];
for(const like of transportation)
{console.log(`i liked  ${like}.yes`)
;}
const guestlist:string[]=["ali","ahad","zahid"]
function sendDinnerInvitation(guest:string):void{console.log(`dear ${guest},/n you areinvited to join`)
}
for (const guest of guestlist){sendDinnerInvitation(guest);}

guestlist.unshift("ali");
guestlist.push("saad");
console.log("guestlist")
let placeToVisit:string[]=["tokyo","japan","lahore","fsd"];
console.log("original order:")
console.log(placeToVisit)
console.log("/nAlphatical order:");
let alphaticalOrder=placeToVisit.slice().sort();
console.log("alhaticalOrder:",placeToVisit)
let sortedReverseAlphatical = []
const city:string[]=["lahore","fsd","karachi","peshawar"];
console.log("list of famous city:");
city.forEach(city=>console.log(city));
//object of typescript
const usa={name :"United state of america",
language:"english"}
console.log(usa.name)
console.log(usa.language)
//intentional error
const fruits:string[]=["apple","banna","sugar"];
console.log(fruits[3]);
//corrected
const indexToAccess=3;
if(indexToAccess< fruits.length){console.log(fruits[indexToAccess])}
else{console.log("index is out of bounds!");}
//conditional statement
let car:"subaru";
console.log("is car =='subaru'? i predict true.");
console.log("va") 

//check 2
console.log("Is car == 'honda'? i predict false")
 //false
//check2
const str1: string= "hello"
const str2:string="world"
const str3:string="hello"
console.log(str1===str2);
console.log(str1 !==str2);
console.log(str1!==str3)
console.log(str1.toLowerCase()===str3);
console.log(str1.toLowerCase()!==str2.toLowerCase());
const nm1:number=10;
const nm2:number=18;
const nm3:number=10;
console.log(nm1===nm2)
console.log(nm1!== nm2)
console.log( nm1< nm2)
//alian color
const alien_color_pass:String='green'
if(alien_color_pass==='green')
{console.log('congratulation !you earned 5 points')
}
const alien_color_fail:string='yellow';
if(alien_color_fail==='green'){console.log('congralution !you earned 5 points')};
//2 shooting
const alien_color_version1:string='green';
if(alien_color_version1==='green'){console.log('congratulation !you just earned 5 pointsfor shhoting the green alien.')}
else{console.log('congralutions!you just earned 10 points.');}
const alien_color_version2:string='red';
if(alien_color_version2==='green'){console.log('congralution !you earned 5 points for shooting green alien. ')}else[console.log('congralution !ypu just earned 10 points')];
//new

const  alien_color_version3:string='yellow';
if (alien_color_version2 ==='green'){console.log('congralution you earned 10 marks')}else {'congralution !you earned 15 marks'}
//age if-else
const age=25
if (age<2){console.log ("the person  is a baby");}else if (age>=2 && age<4){console.log("the person is todle");}
else if(age <=5 &&age<13){console.log("the person is kid");}else if (age>=13 && age<20){console.group("the person is teenager");}else if(age>=20 &&age <65){console.log("the person is adult");}
else{console.log("the person is older");}
//fav fruits
const favorite_fruits:string[]=["banna","strawberry","mango"];
if (favorite_fruits.includes("banna")){console.log("you really like banna");}
if (favorite_fruits.includes("strawberry")){console.log("you really like strawberry");}
if (favorite_fruits.includes("mango")){console.log("you really like mango");}
if (favorite_fruits.includes("apple")){console.log("you really like not apple");}
else (console.log("it is not my type"))
//arrray of username
const usernames:string[]=['admin','ali','haider','afzal'];
function printGreating(usernames:string[]):void {for(const username of usernames){if(username.toLowerCase()==='admin'){console.log(`hello ${username},would you like to see me`);} else {console.log(`hello ${username},thank for logging`);}}
}
printGreating(usernames);
//2
// Array of usernames
const useres: string[] = ['admin', 'Eric', 'John', 'Jane', 'admin123'];

// Function to print greetings
function printGreetings(useres: string[]): void { if (useres.length ===0){console.log("we need to find user!")}
  else{for (const username of useres) {
    if (username.toLowerCase() === 'admin') {
      console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}
}
//new
// Array of usernames
let user: string[] = ['admin', 'Eric', 'John', 'Jane', 'admin123'];

// Check if the list is empty
if (user.length === 0) {
  console.log('We need to find some users!');
} else {
  // Loop through the array and print greetings
  for (const username of user) {
    if (username.toLowerCase() === 'admin') {
      console.log('Hello admin, would you like to see a status report?');
    } else {
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
const current_users: string[] = ['admin', 'Eric', 'John', 'Jane', 'admin123'];

// New usernames list
const new_users: string[] = ['John', 'Mike', 'Sarah', 'JaneDoe', 'Alex'];

// Check if each new username is unique
for (const new_username of new_users) {
  const isUsernameTaken = current_users.some(
    (current_username) => current_username.toLowerCase() === new_username.toLowerCase()
  );

  if (isUsernameTaken) {
    console.log(`Sorry, the username '${new_username}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${new_username}' is available.`);
  }
}
//new
// Array of numbers from 1 to 9
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array and print the proper ordinal ending for each number
for (const number of numbers) {
  let ordinalEnding: string;

  if (number === 1) {
    ordinalEnding = 'st';
  } else if (number === 2) {
    ordinalEnding = 'nd';
  } else if (number === 3) {
    ordinalEnding = 'rd';
  } else {
    ordinalEnding = 'th';
  }

  console.log(`${number}${ordinalEnding}`);
}

//new
const favoritePizza:string[]=['bbq','chicken','villagepizza'];
for (const pizza of favoritePizza){console.log(`i like ${pizza} very much`);}
console.log("i like all pizza")
const animals:string[]=['dog','rabbit','fish'];
for (const animal of animals){console.log(`${animal} is good pet`)}
console.log(" this is true pet")
//shirt
function make_shirt(size:string, message:string):void{console.log(`shirt size:${size}, message:${message}`)}
make_shirt ( "large","i love typescript" )
function describecity(city:string, country:string= "unknown"):void{console.log(`${city} is ${country}`)}
describecity("karachi","pakistan")
describecity("london","uk")
describecity("new york")
//new4= 
function citycountry(city:string, country:string):string{return` '${city}, is that${country} `}
const city1= citycountry("lahore","pakistan");
console.log(city1)
// music album
type album={artist:string;title:string;tracks?:number;
};
function make_album(artist:string,title:string,tracks?:number):album{
  const album:album ={artist,
  title,};
  if(tracks!==undefined){album.tracks=tracks;}
  return album;
}
const album: album[]=[];
album.push(make_album("artist1","album1",12));
album.push(make_album("artist2","album2"));
console.log(album);
//magician
function showmagicians(magicians:string[]):void{magicians.forEach((name)=>{
  console.log(name);
})}
const magicians:string[]=["john","alice","david"];
showmagicians(magicians);
//
function make_great(magician:string[]):string[]{
  const greatMagicians:string[]=magician.map((name)=>{
    return `the great ${name} nb`;

  }) 
  return greatMagicians
}
function showMagicians(magicians:string[]):void{
  magicians.forEach ((name)=>{
    console.log(name);
  })
}
const gicians:string[]=["john","alice","saad"]

const greatMagicians :string[]=make_great([...magicians])
console.log("orginal magicians:");
showMagicians(magicians);
console.log( showMagicians)
showMagicians(greatMagicians)
//sandwitch
function orderSandwitch(...items:string[]):void{
  console.log("sandwitch summary");
  console.log("bread +");
  if (items.length===0){
console.log("nothing on the sandwitch.")
  } else{ items.forEach ((items)=>{console.log(items+"+")})}
console.log("bread\n")
}
orderSandwitch ("cheese","butter","tomoto");
//cars 
interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...args: any[]): Car {
  const car: Car = {
    manufacturer,
    model,
  };

  if (args.length > 0) {
    for (let i = 0; i < args.length;i +=2) {
      const key = args[i];
      const value = args[i + 1];
      car[key] = value;
    }
  }

  return car;
}

// Call the function with required information and additional name-value pairs
const carInfo: Car = createCar("Toyota", "Camry", "color", "blue", "year", 2023);

// Print the object that's returned
console.log(carInfo);