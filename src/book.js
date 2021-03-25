
// Declare function createTitle with a title parameter
function createTitle(title) {
  // Returns a string of a modified title with the argument
  // Given for title interpolated into the string
  return `The ${title}`;
}

// Function that creates an object utilizing it's parameters as values
function buildMainCharacter(name, age, pronouns) {
  // Create character object
  var character = {
    // Create 3 key:value pairs with the values corresponding to the
    // Arguments provided in the function
    name: name,
    age: age,
    pronouns: pronouns
  }
  // Return the character object
  return character;
}


// Empty reviews array

// Declare saveReview function with a review parameter
function saveReview(review, reviews) {
  // If the reviews array includes the argument given for a review
  if (reviews.includes(review)) {
    //end the function
    return
  }
  //else in all other instances
  else {
    // Append the review argument to the reviews array
    reviews.push(review);
  }
}

// Declare calculatePageCount function with a title parameter
function calculatePageCount(title) {
  // Create a variable equal to an array of each character in given title string
  titleArray = title.split('');
  // Create pages variable equal to the length of the array multiplied by 20
  pages = titleArray.length * 20;
  // Return value within pages variable
  return pages;
 }

// Declare writeBook function with 3 parameters for bookTitle, bookCharacter,
// and genre
function writeBook(bookTitle, bookCharacter, genre) {
  // Create new variable equal to an object with four key:value pairs
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    // Utilize previous calculatePageCount function for the value of pageCount
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  // Return book object
  return book
}

// Declare editBook function with a book parameter
function editBook(book) {
  // Access the pageCount of book object with dot notation, and
  // Set the value equal to the current value multiplied by 3/4
  book.pageCount = book.pageCount * 0.75;
  // Return the new value for book object's pageCount
  return book.pageCount;
}


// This one took me a good minute to figure out!
// I was initially trying to utilize a for loop to iterate
// But that ended up doubling results along the line
// So I checked my notes for any relevant methods and .includes
// Seemed to be the one to use

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
