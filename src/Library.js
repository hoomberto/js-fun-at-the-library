function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library;
}

function addBook(shelf, book) {
  // Create variable keys equal to the value of the
  // shelf.shelves' object's keys
  var keys = Object.keys(shelf.shelves)
  // Create variable values equal to the value of the
  // shelf.shelves' object's values
  var values = Object.values(shelf.shelves)
  // Create a for loop that goes through the length of keys
  // Which should be the same as the lengh of values, because
  // They're pairs
  for (var i = 0; i < keys.length; i++) {
    // If the value of the variable index of keys is strictly equal
    // to the genre property of the argument for the book parameters
    if (keys[i] === book.genre) {
      // Add the book to the array at variable index
        values[i].unshift(book);
      }
    }
  }

// The solution that Lauren helped me get to after
// Explaining how bracket notation can work with Objects
// It's so much more eloquent!
function addBook(library, book) {
  library['shelves'][book.genre].push(book);
}

//   function checkoutBook(library, book, genre) {
//     var keys = Object.keys(library.shelves)
//     var values = Object.values(library.shelves)
//     var checkedOut;
//     for (var i = 0; i < keys.length; i++) {
//       if (keys[i] === genre && values[i] === book) {
//         checkedOut = values[i].pop();
//         return `You have now checked out ${checkedOut.title} from the Denver Public Library`;
//       }
//
//     }
// }

// function checkoutBook(library, book, genre) {
//   shelves = library.shelves
//   shelvesObjectLength = Object.keys(shelves).length;
//   fantasyShelf = shelves.fantasy;
//   fictionShelf = shelves.fiction;
//   nonFictionShelf = shelves.nonFiction;
//   // console.log(fantasyShelf[0]);
//   // eachShelf = [fantasyShelf, fictionShelf, nonFictionShelf];
//   // console.log(shelvesObjectLength);
//   for (var i = 0; i < shelvesObjectLength; i++) {
//     if (fantasyShelf[i]['genre'] === genre) {
//       fantasyShelf.splice([i], 1);
//       return `You have now checked out ${book} from the ${library.name}`
//       break
//     }
//
//     else if (fictionShelf[i]['genre'] === genre) {
//         fictionShelf.splice([i], 1);
//         return `You have now checked out ${book} from the ${library.name}`
//         break
//     }
//     else if (nonFictionShelf[i]['genre'] === genre) {
//       nonFictionShelf.splice([i], 1);
//       return `You have now checked out ${book} from the ${library.name}`
//       break
//     }
//     else {
//       return `Sorry, there are currently no copies of ${book} available at the Denver Public Library`;
//       break
//     }
//   }
//
// }

function checkoutBook(library, book, genre) {
  shelves = library.shelves
  shelvesObjectLength = Object.keys(shelves).length;
  fantasyShelf = shelves.fantasy;
  fictionShelf = shelves.fiction;
  nonFictionShelf = shelves.nonFiction;
  // console.log(fantasyShelf[0]);
  // eachShelf = [fantasyShelf, fictionShelf, nonFictionShelf];
  // console.log(shelvesObjectLength);
  // console.log(fantasyShelf[0]['genre'])
    if (nonFictionShelf[0]['genre'] === genre) {
      nonFictionShelf.splice([0], 1);
      return `You have now checked out ${book} from the ${library.name}`;

    }

    else if (fantasyShelf[0]['genre'] === genre) {
      fantasyShelf.splice([0], 1);
      return `You have now checked out ${book} from the ${library.name}`;
    }
    else if (fictionShelf[0]['genre'] === genre) {
      fictionShelf.splice([0], 1);
      return `You have now checked out ${book} from the ${library.name}`;

    }
    else {
      return `Sorry, there are currently no copies of ${book} available at the Denver Public Library`;

    }

}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
