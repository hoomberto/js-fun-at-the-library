function shelfBook (book, shelf) {
  if (shelf.length >= 3) {
    return
  }
  else {
    shelf = shelf.unshift(book);
    return shelf;
  }
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
      if (shelf[i].title === book) {
        shelf.splice([i], 1);
        return shelf;
      }
    }
}

function listTitles(shelf) {
  var titleList = [];
  for (var i = 0; i < shelf.length; i++) {
    titleList.push(shelf[i].title);
  }
  return titleList.join(', ');
}

function searchShelf(shelf, book) {
  // Declare as-of-yet undefined function inShelf as placeholder
  var inShelf;
  // For loop that iterates through the shelf array
  for (var i = 0; i < shelf.length; i++) {
    // If the variable index selection of that shelf's title value 
    // is strictly equal to the argument for the book parameter
    if (shelf[i].title === book) {
      // set inShelf to true;
      inShelf = true;
    }
    // Otherwise set inShelf to false;
    else {
      inShelf = false;
    }
  }
  // Return the inShelf variable's value.
  return inShelf;
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
