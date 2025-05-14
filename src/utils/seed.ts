import connection from '../config/connection.js';
import mongoose from "mongoose";
import { User, Thought } from '../models/index.js';
//import { genRandomIndex, getRandomUserName, getRandomEmail, getRandomThoughts, getRandomReactions } from './data.js';

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the collections if they exist
  
  let usersCheck = await connection.db?.listCollections({ name: 'users' }).toArray();
  if (usersCheck?.length) {
    await connection.dropCollection('users');
  }

  let thoughtsCheck = await connection.db?.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtsCheck?.length) {
    await connection.dropCollection('thoughts');
  }

//   const users = [
//     {
//       username: "pwallington0",
//       email: "mlesor0@imgur.com",
//       thoughts: [],
//       friends: [],
//     },
//     {
//       username: "jserrier1",
//       email: "overbruggen1@fc2.com",
//       thoughts: [],
//       friends: [],
//     },
//     {
//       username: "ssteely2",
//       email: "bnears2@google.com",
//       thoughts: [],
//       friends: [],
//     },
// {
//       username: "dbraithwait3",
//       email: "egavan3@cmu.edu",
//       thoughts: [],
//       friends: [],
//     },
//     {
//       username: "fwagg4",
//       email: "sdashper4@mac.com",
//       thoughts: [],
//       friends: [],
//     },
//   ];

//   // Makes comments array
//   const users: { username: string; email: string; thoughts: any[]; friends: any[] }[] = [];

// const makeThoughts = () => {
//   const newThoughts = [
//     {
//       thoughtText: "TypeScript makes development more reliable!",
//       username: "pwallington0",
//       reactions: [
//         {
//           reactionBody: "I totally agree!",
//           username: "fwagg4",
//         },
//         {
//           reactionBody: "Interesting perspective.",
//           username: "jserrier1",
//         },
//         {
//           reactionBody: "Not sure I follow, can you elaborate?",
//           username: "jserrier1",
//         },
//       ],
//     },
//     {
//       thoughtText: "Cypress testing can be challenging, but worth it!",
//       username: "ssteely2",
//       reactions: [
//         {
//           reactionBody: "I struggled with this too!",
//           username: "dbraithwait3",
//         },
  
//       ],
//     },
//     {
//       thoughtText: "MongoDB is great for flexible schema designs.",
//       username: "dbraithwait3",
//       reactions: [{
//         reactionBody: "Totally agree!",
//         username: "jserrier1",
//       },
//       {
//         reactionBody: "Couldn’t have said it better!",
//         username: "pwallington0",
//       },
// ],
//     },
//   ];

//   thoughts.push(...newThoughts);
// };

//  // Insert users into the database
//  await Thought.insertMany(makeThoughts());


//   const thoughts = [
//     {
//       thoughtText: "TypeScript makes development more reliable!",
//       username: "pwallington0",
//       reactions: [
//         {
//           reactionBody: "I totally agree!",
//           username: "fwagg4",
//         },
//         {
//           reactionBody: "Interesting perspective.",
//           username: "jserrier1",
//         },
//         {
//           reactionBody: "Not sure I follow, can you elaborate?",
//           username: "jserrier1",
//         },
//       ],
//     },
//     {
//       thoughtText: "Cypress testing can be challenging, but worth it!",
//       username: "ssteely2",
//       reactions: [
//         {
//           reactionBody: "I struggled with this too!",
//           username: "dbraithwait3",
//         },
  
//       ],
//     },
//     {
//       thoughtText: "MongoDB is great for flexible schema designs.",
//       username: "dbraithwait3",
//       reactions: [{
//         reactionBody: "Totally agree!",
//         username: "jserrier1",
//       },
//       {
//         reactionBody: "Couldn’t have said it better!",
//         username: "pwallington0",
//       },
// ],
//     },
//   ];


  const makeUsers = () => {
    return [
      { username: "pwallington0", email: "mlesor@gmail.com", thoughts: [], friends: [] },
      { username: "jserrier1", email: "overbruggen1@fc2.com", thoughts: [], friends: [] },
      { username: "ssteely2", email: "bnears2@google.com", thoughts: [], friends: [] },
      { username: "dbraithwait3", email: "egavan3@cmu.edu", thoughts: [], friends: [] },
      { username: "fwagg4", email: "sdashper4@mac.com", thoughts: [], friends: [] },
    ];
  };
  
  // Insert users into the database
  await User.insertMany(makeUsers());
  

  const makeThoughts = () => {
    return [
      {
        thoughtText: "TypeScript makes development more reliable!",
        username: "pwallington0",
        reactions: [
          { reactionBody: "I totally agree!", username: "fwagg4" },
          { reactionBody: "Interesting perspective.", username: "jserrier1" },
          { reactionBody: "Not sure I follow, can you elaborate?", username: "jserrier1" },
        ],
      },
      {
        thoughtText: "Cypress testing can be challenging, but worth it!",
        username: "ssteely2",
        reactions: [
          { reactionBody: "I struggled with this too!", username: "dbraithwait3" },
        ],
      },
      {
        thoughtText: "MongoDB is great for flexible schema designs.",
        username: "dbraithwait3",
        reactions: [
          { reactionBody: "Totally agree!", username: "jserrier1" },
          { reactionBody: "Couldn’t have said it better!", username: "pwallington0" },
        ],
      },
    ];
  };
  
  // Insert thoughts into the database
  await Thought.insertMany(makeThoughts());
  
  mongoose.disconnect();






  
  // async function seedDatabase() {
  //   try {
  
  //     //await Thought.deleteMany({}); // Clear previous entries
  //     await Thought.insertMany(thoughts); // Insert new data
  //     //await User.deleteMany({}); // Clear previous entries
  //     await User.insertMany(users); // Insert new users

  
  //     console.log("Database seeded successfully!");
  //   } catch (error) {
  //     console.error("Error seeding database:", error);
  //   } finally {
  //     mongoose.disconnect();
  //   }
  // }

  // seedDatabase();
  // console.log

  // Log out a pretty table for comments and posts
  console.table(makeThoughts);
  console.table(makeUsers);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});
