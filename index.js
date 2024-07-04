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

// //alt solution: using shorthand syntax with implicit return and destructuring obj property name to make code DRYer
// const logAllNames = (usersArr) => usersArr.forEach(({ name }) => console.log(name));

// //logging q1 test to console
// logAllNames(users); //"Reuben"  "Laisha"  "Anne"  "Steph"  "Carmen"


//QUESTION 2: a function that logs strings that contain the name and username property for each user to the console
const getAllTags = (usersArr) => {
  usersArr.forEach((userObj) => console.log(`Hi my name is ${userObj.name}, and my tag is ${userObj.username}!`)); //logging a str for each user obj
};

// //alt solution: refactored func to be DRYer (shorthand syntax + destructured obj properties)
// const getAllTags = (usersArr) => usersArr.forEach(({ name, username }) => console.log(`Hi my name is ${name}, and my tag is ${username}!`));

// //logging q2 test to console
// getAllTags(users); //logs:
/* 'Hi my name is Reuben, and my tag is @blood_pressure_killa!',
'Hi my name is Laisha, and my tag is @passaic_papi!',
'Hi my name is Anne, and my tag is @i_love_bambas!',
'Hi my name is Steph, and my tag is @queen_of_the_kew!',
'Hi my name is Carmen, and my tag is @omar_apollo_fanclub!'
*/


//QUESTION 3: a function that returns a sum of the number of followers each user has
const sumAllFollowers = (usersArr) => {
  return usersArr.reduce((sum, userObj) => {
    sum += userObj.followers; //increasing the sum by the int value of follower count found in the current userObjs followers property
    return sum; //returning the new sum to the next iteration
  }, 0); //starting accum sum count at 0
};

// //alt solution 1: refactored func to be DRYer (shorthand syntax + obj destructuring)
// const sumAllFollowers = (usersArr) => usersArr.reduce((sum, { followers }) => sum += followers, 0);

// //alt solution 2: refactored as a for..of loop
// const sumAllFollowers = (usersArr) => {
//   let followersSum = 0; //init a var followersSum, starting follower count at 0
//   for (const userObj of usersArr) { //iterating over each user obj el in the given arr and for each:
//     followersSum += userObj.followers; //concatenating the sum with the curr user objs follower count
//   }
//   return followersSum; //returning the final sum at the end
// };

// //logging q3 test to console
// console.log(sumAllFollowers(users)); //1201913


//QUESTION 4: a function that takes in a str along with the arr of objs and returns the user obj whose username matches the str parameter
const searchUsername = (usersArr, str) => {
  return usersArr.filter((userObj) => { //the find() method is not appropriate here as it would have returned just the obj when we want an arr of the obj
    return userObj.username === str; //returning the userObj whose username matches the given str
  });
};

// //alt solution 1: refactored func to be DRYer (shorthand syntax + obj destructuring)
// const searchUsername = (usersArr, str) => usersArr.filter(({ username }) => username === str);

// //alt solution 2: refactored as a for..of loop and an if/else statement
// const searchUsername = (usersArr, str) => {
//   for (const userObj of usersArr) {
//     if (userObj.username === str) return [userObj] //returning an arr with the userObj that met the condition
//   }
// };

// //logging q4 test to console
// console.log(searchUsername(users, "@passaic_papi")); //logs:
/*[
  { name: 'Laisha C',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  }
];
*/


//QUESTION 5: a function that returns the most long-winded user aka the obj with the longest bio
const longWinded = (usersArr) => {
  return usersArr.reduce((longestBio, userObj) => { //using reduce with a ternary statement as we're returning just one value, the obj with the longest bio
    if (userObj.bio.length > longestBio.bio.length) { //could be refactored as a ternary --> comparing the bio length of the curr user obj in the iteration with the accum longestBio, the user obj with the longest bio at the moment
      return userObj; //returning the userObj if so, to the next iteration with the accum, longestBio reassigned as it
    } else return longestBio; //returning the userObj if that users bio length was greater than the curr user
  }, usersArr[0]); //initializing accum to the first user obj in the given arr so that we have a valid obj with a bio property to compare to in the first iteration 
};

// //alt solution 1: refactored func to be DRYer (shorthand syntax)
// const longWinded = (users) => 
//   users.reduce((longestBioUser, currUser) =>
//     longestBioUser.bio.length < currUser.bio.length ? currUser : longestBioUser //no need to set the accum value since  thereduce() method will set the accum as arrs first el item if no initial value is supplied
//   );

// //alt solution 2: using a for..of loop to manually reassign longestBio if a user obj bio length in the iteration is found to be greater
// const longWinded = (usersArr) => {
//   let longestBio = usersArr[0]; //intializing a var to store the first user obj el from the given arr
//   for (const userObj of usersArr) {
//     if (userObj.bio.length > longestBio.bio.length) longestBio = userObj;
//   }
//   return [longestBio]; //returning an arr with the user obj that had the longest bio
// };

// //logging q5 test to console
// console.log(longWinded(users)); //logs:
/*[
  { name: 'Carmen S',
    username: '@omar_apollo_fanclub',
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
  }
];
*/


//QUESTION 6: a function that returns an array sorted by follower count from least to greatest
const follower = (usersArr) => {
  return [...usersArr].sort((a, b) => a.followers - b.followers); //spread given arr to so as to not mutate the original arr and return a new copy arr- no nested properties so no need to worry about it being a shallow copy
};

// //alt solution 1: refactored func to be DRYer (shorthand syntax)
// const follower = (usersArr) => [...usersArr].sort((a, b) => a.followers - b.followers);

// //alt solution 2: bubble sort algo, bad time complexity due to nested for loop
// const follower = (usersArr) => {
//   const sortedUsers = [...usersArr]; //using spread operator on given arr to avoid mutating it
//   const arrLength = sortedUsers.length; //storing lenght in a const so program doesn't have to compute it each time loop runs
//   for (let i = 0; i < arrLength; i++) { //outer for loop iterating over each user obj el of the arr
//     let currObj = sortedUsers[i];
//     for (let j = 0; j < arrLength - 1; j++) { //inner loop interating over each user obj up to the idx just before the last to compare w outer loop obj els
//       let nextObj = sortedUsers[j];
//       if (currObj.followers < nextObj.followers) { //comparing each loops user obj el follower count
//         let swapMe = currObj; //storing currObj in swap var
//         currObj = nextObj; //reassigning currObj to nextObj as condition was met and nextObj follower count is higher
//         nextObj = swapMe; //reassigning nextObj to sort, effectively swapping the vars
//       }
//     }
//   }
//   return sortedUsers; //returning the arr sorted in descending order
// };

// interesting logic to research later:
// let nextUserObj = usersArr[i+1]; //can't do --> i ? usersArr[i+1] : null --> because when idx is at 0, JS thinks i is falsey as 0 is a falsey value
// console.log(`im ${console.log(userObj)} after idx ${i}, im next ${nextUserObj}`); //note how the two objs are logged different depending on how its logged with string interpolation

// //logging q6 test to console
// console.log(follower(users)); //logs:
/*[
  { name: 'Reuben O.',
    username: '@blood_pressure_killa',
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege."
  },
  { name: 'Anne H.',
    username: '@i_love_bambas',
    followers: 12,
    verified: false,
    bio: "@mayabee is my best friend"
  },
  { name: 'Laisha C',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  },
  { name: 'Steph S.',
    username: '@queen_of_the_kew',
    followers: 1200,
    verified: false,
    bio: "✌🏼"
  },
  { name: 'Carmen S',
    username: '@omar_apollo_fanclub',
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
  }
]
*/