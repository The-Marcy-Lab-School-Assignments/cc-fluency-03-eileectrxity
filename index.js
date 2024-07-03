//Code Challenge: Fluency Drill 3 by Eileen

//perform all of our operations on the following arr, users
const users = [
  { name: 'Reuben',
    username: '@blood_pressure_killa',
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege."
  },
  { name: 'Laisha',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  },
  { name: 'Anne',
    username: '@i_love_bambas',
    followers: 12,
    verified: false,
    bio: "@mayabee is my best friend"
  },
  { name: 'Steph',
    username: '@queen_of_the_kew',
    followers: 1200,
    verified: false,
    bio: "✌🏼"
  },
  { name: 'Carmen',
    username: '@omar_apollo_fanclub',
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
  }
];
  
//QUESTION 1: a function that logs all the names of each user to the console
const logAllNames = (usersArr) => {
  usersArr.forEach((userObj) => console.log(userObj.name)); //return not needed since forEach() doesn't return anything
};

// //logging q1 test to console
// logAllNames(users); //"Reuben"  "Laisha"  "Anne"  "Steph"  "Carmen"

//QUESTION 2: a function that logs strings that contain the name and username property for each user to the console
const getAllTags = (usersArr) => {
  usersArr.forEach((userObj) => console.log(`Hi my name is ${userObj.name}, and my tag is ${userObj.username}!`)); //logging a str for each user obj
};

// //logging q2 test to console
// getAllTags(users); //logs:
/* 'Hi my name is Reuben, and my tag is @blood_pressure_killa!',
'Hi my name is Laisha, and my tag is @passaic_papi!',
'Hi my name is Anne, and my tag is @i_love_bambas!',
'Hi my name is Steph, and my tag is @queen_of_the_kew!',
'Hi my name is Carmen, and my tag is @omar_apollo_fanclub!'
*/