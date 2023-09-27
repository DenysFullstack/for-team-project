// let arrays = ([1,2,3],[4,5,6],5)

// function makeArray(firstArray, secondArray, maxLength) {

//   const allarrays = firstArray.concat(secondArray);

//   return allarrays.length > maxLength ? allarrays.slice(0, maxLength) : allarrays.slice();

// }

// console.log(makeArray)

// function calculateTotal(number) {
//     // Change code below this line
//    let sum = 0;
//    for (let i=0; i<= number; i+=1) {
//      sum += i;
//    }
//    return sum;
//      // Change code above this line
//    }

//    console.log(return);

// function filterArray(numbers, value) {
//   // Change code below this line

//   let newArray = [];

//   for (i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }

//   return newArray;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   };

//   console.log(hexColors);
//   console.log(rgbColors);

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function getAllPropValues(propName) {
//     // Change code below this line
//   const arrayValues = [];
//     for (const product of products) {
//     arrayValues += Object.values(product);
//     }
//   return arrayValues;

//     // Change code above this line
//   }
//   getAllPropValues('name');
//   console.log(getAllPropValues);

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     for (i=0; i<this.books.length; i+=1) {
//         if (oldName === this.books[i]) {
//             this.books.splice(i, 1, newName);
//         }
//     }

//   },
// };
// console.table(bookShelf.books)
//   console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"))

// potions: [
//   { name: "Speed potion", price: 460 },
//   { name: "Dragon breath", price: 780 },
//   { name: "Stone skin", price: 520 },
// ],
// // Change code below this line
// getPotions() {
//   return this.potions;
// },
// addPotion(newPotion) {
//   if (this.potions.includes(newPotion)) {
//     return `Error! Potion ${newPotion} is already in your inventory!`;
//   }

//   this.potions.push(newPotion);
// },
// removePotion(potionName) {
//   const potionIndex = this.potions.indexOf(potionName);

//   if (potionIndex === -1) {
//     return `Potion ${potionName} is not in inventory!`;
//   }

//   this.potions.splice(potionIndex, 1);
// },
// updatePotionName(oldName, newName) {
//   const potionIndex = this.potions.indexOf(oldName);

//   if (potionIndex === -1) {
//     return `Potion ${oldName} is not in inventory!`;
//   }

//   this.potions.splice(potionIndex, 1, newName);
// },
// // Change code above this line

// for (const potion of this.potions) {
//   if (potion.name === potionName) {
//     this.potions.splice(this.potions.indexOf(potionName), 1);
//   }
//   }

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = potions[i];
//       if (potionName === name) {
//         potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     const {potions} = this;
//     for (let i=0; i<potions.length; i+=1) {
//     potions.splice(potions.indexOf(oldName), 1, newName);
//     }
//   },
// };

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {

//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//           this.potions.push(newPotion);
//   },
// removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = potions[i];
//       if (potionName === potions[i].name) {
//         potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {

//         const {potions} = this;
//     for (let i=0; i<potions.length; i+=1) {
//       if(potions[i].name === oldName) {
//      return potions[i].name = newName;
//       }
//     }
//   },
// };

// atTheOldToad.addPotion({ name: "Stone skin", price: 520 })
// console.log(atTheOldToad.getPotions());

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }

//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this line

//   makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`)
//   });

// const avaregeGrade = students.map(student => students.grades)

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = [...books]
  .filter((book, index, array) => array.indexOf(book.rating) > MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort((firstBook, secondBook) =>
    firstBook.author.localeCompare(secondBook.author)
  );

  console.log(names);
